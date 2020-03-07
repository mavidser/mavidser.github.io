---
title: Personal infrastructure overview
date: 2020-01-11
tags: ["Odyssey", "Me"]
---

Writing intros to posts is such a hard thing. I've spent more time on what to write in this paragraph than the rest of this article. You're supposed to start with a background and a motivation, and conclude with a sentence that you finally did it, and here is how.

I have not _done it_ yet. This thing keeps evolving. As to why I started doing this: it's fun. It's fun and powerful to be in control of where your information resides. It's fun to build a system to manage this efficiently. There are also some benefits too: much more control over my data and the services. These are also all open-source so I can add missing features which I really really want, and I don't have to abide by the restrictive terms and limits of other platforms. And I don't lose everything if a platform wants to shut itself down or delete my account for using their product wrong.

<!--more-->

As for the disadvantages: Only a few services look as polished as their commercial counterparts. It costs money to host them yourself. Mobile apps are rare. You have to think about security yourself. And if things go wrong, you only have yourself to blame.

---

Most of my services reside across two servers, which are named **HAL-9000** and **SAL-9000**.

_HAL_ is a Raspberry Pi 4 connected to a single HDD, and acts as a tiny media server for personal use. It runs:
- A samba server (allows the HDD to be available as a Windows share)
- A DLNA server (most good media players can use this to get a media index off a server)
- A Calibre web server (for serving eBooks indexed by Calibre)
- Jellyfin (open source alternative to Plex, to organize media)
- A suite of services for downloading media (Radarr, Sonarr, Jackett, Transmission)
- Syncthing (a P2P file synchronization service)
- Tinc VPN (to make this server reachable over the internet)
- Some monitoring services (explained later).

{{< figure src="/images/hal-9000.jpg" caption="HAL resides in a makeshift housing, connected to a cool status screen" >}}

_SAL_ runs a lot more services, which I'll refrain from listing here, as I keep adding and removing them over time. The most used ones are:
- Mailman (for hosting a couple of private mailing lists)
- Lounge + ZNC (A web IRC client for non-primary machines, and a bouncer for everywhere else)
- Firefly III (Favorite expense manager)
- Dokuwiki (As a personal knowledge base, also used as an idea-book and journal)
- Wallabag (A self-hosted alternative to Pocket, the read-it-later thing)
- FreshRSS (RSS reader with a decent frontend and Fever API support)
- Radicale (A tiny cardDAV and calDAV server for syncing my contacts and calendars)
- Kanboard (Kanban boards)
- Tmate (an amazing tool which lets you share your current shell session with anyone else, over ssh)

The complete list of services can be found in the terraform files [here][sal-terraform].

## Internal details
All of these services run in their own docker containers. This is a primary requirement for me, and I went to great lengths to make sure that nothing runs out of containers. Reasons are:
- _Easier management_: I can store every configuration as static files, which can spin up and configure containers that are ready to go. [I use terraform for this][tf-post]. Observing the state of my server becomes a breeze too.
- _Easier backups_: I have to backup only the mounted volumes, which greatly reduce the backup sizes, and can be backed up predictably too.
- _Easier Upgrades_: Upgrading services is as easy as updating the docker image tag. I don't have to worry of how things might break. And if they do, I can just go back to the earlier version without a hiccup.
- _Security_: Due to the isolated nature of containers, I feel much more safer running everything in containers, knowing that they don't speak to each other unless I want them to.
- _Reproducibility_: To set it up anew again, all I have to do is install and configure docker, make sure the OS itself is secure, and then my terraform files can take it from there. I rarely have to ever SSH into my host to make infrastructure changes.
- _Monitoring_: A linux system in use has tons of processes running, and to monitor your services, you have to filter through everything, identify which processes are used by which service/user, and so much more. Using containers, I can just look at the resources the container uses.

{{< figure src="/images/sal-grafana.png" caption="Monitoring page of SAL-9000" >}}


### How things actually connect
My home network sits behind my ISP's NAT, so _HAL_ cannot be reached directly from the Internet. To make it accessible, I use a VPN connection (tinc) between _HAL_ and _SAL_ to bridge the two servers, making _HAL_ locally accessible from _SAL_. In this network, _HAL_ gets the IP `10.0.0.2` while _SAL_ is `10.0.0.1`. This allows me to directly tunnel traffic from _SAL_ to _HAL_, making it available over the internet.

Tunneling all traffic, though, would mean that services on _SAL_ would be inaccessible. As it's not guaranteed that all traffic can be identified, I cannot do this selectively for services too. The solution was to get a Floating IP on DigitalOcean and attach it to _SAL_. Floating IPs are reassignable IP addresses, which can be attached to running instances.

_SAL_, now has two public IP addresses, the floating IP and the instance's own public IP. The floating IP connects to _SAL_ through what DigitalOcean calls an Anchor IP, which is added as an alias to the default interface. Now, I can use two different IP addresses to reach my _SAL_. One by using the _SAL_'s public IP, and the other via the floating IP (anchor IP on the instance).

```
                    +-------------------+
                    |      SAL-9000     |
                    | +---------------+ |
                    | |    eth0       | |
                    | |               | |
Internet ------------>| 159.65.147.19 | |
  |                 | | public IP     | |
  |                 | |               | |
  V                 | |               | |
139.59.52.106 ------->| 10.47.0.5     | |
Floating IP         | | anchor IP     | |
                    | +---------------+ |
                    +-------------------+
```

My DNS configuration says that `*.hal-9000` should point to the floating IP, while `*.sal-9000` should point to the _SAL_'s public IP.

I use HAProxy to redirect traffic received on the anchor IP to _HAL_ at `10.0.0.2` over the VPN, and keep the rest on the instance itself. This could be easily done with iptables too, but I wanted all configurations to live in Terraform, hence HAProxy. I'll be switching to iptables as soon as I add support for them in the [Linux Provider][linux-provider].

Once this step is cleared on both servers, all the traffic is forwarded to their respective docker containers. HTTP and TLS traffic, though, all goes to traefik, a reverse proxy with amazing support for Docker (with discovery), ACME, and some capable middlewares. Any contanier which needs to listen to HTTP or decrypted TCP traffic, registers itself with traefik and is ready to go. My traefik config is using Let's Encrypt to get signed TLS certificates.

### Monitoring

The following five services make up the monitoring stack of these servers:
- _prometheus_ as the time-series database for storing all metrics
- _node-exporter_ to export system metrics to prometheus
- _cadvisor_ exports metrics of docker containers to prometheus
- _loki_ for storing logs of services
- _promtail_ to put docker logs from the filesystem into loki

Data from both the servers' prometheus and loki is displayed on a Grafana instance running on _SAL_, which is also used for some rudimentary alerting.

A friend once asked why I was using separate loki and prometheus to store data for different servers, when one could suffice. It's so that _HAL_ can continue to write metrics to its own databases even in case of internet disruption at my home.

### Backups
I use restic to backup all my docker volumes to Backblaze. Restic is able to deduplicate blobs too, so the total capacity used for backups is less than the sum of all the backups.

## Things I don't host myself
I am using Migadu as my email provider for now, but plan to try hosting it myself on a separate server later this year.
I also use PIA as my VPN provider instead of hosting my own VPN server, mostly because I switch between regions often, and it was cheaper to use PIA than run VPN instances in different regions.

## How much does it cost me?

<div style="font-size: 0.88em;" markdown="1">

| Service        | Cost          | Notes |
|----------------|---------------|-------|
| Domain name    | $30/year      | Depending on the TLD, it can be $0 to $$$ |
| Cloud Server   | $240/year     | I have a DigitalOcean instance with 4GB memory. A 512MB one costs $60/year |
| Email          | $48/year      | I use migadu for my emails. It's a Swiss provider which allow you to have multiple custom domains as long as you don't send tons of emails everyday. I'd strongly recommend that you use your own domain for emails, to keep them migratory. But, if you don't wanna shell out, you can go with free email providers too (Fastmail is pretty good), or maybe what [Danny recommends][mailgun] if you really want that domain |
| Backup storage | $0/year       | The 10GB free tier of Backblaze is able to store all my backups for now. It's still pretty cheap at 0.5c/GB when it exceeds that limit though |
| Electricity    | $15/year      | Raspberry Pi running at 135kWh/year at 10c/hr |
| VPN            | $40/year      | I use PIA as my VPN provider. Alternatively, you can setup a VPN server on your machine too, if it fits your threat model and you don't require all the different regions supported by PIA |
| **Total**      | **$373/year** | *If you just go with a small cloud server, and a cheap domain, you can probably bring this down to $61/year. If your home IP is not behind a NAT (static IP, or dynamic DNS), you can host this at your home too, bringing it down to just the hardware and electricity costs.* |

</div>

Host things yourself. It's fun.

[mailgun]: https://www.dannyguo.com/blog/using-mailgun-for-a-free-custom-domain-email-address/
[sal-terraform]: https://github.com/mavidser/odyssey/tree/master/terraform/sal-9000
[linux-provider]: https://github.com/mavidser/terraform-linux-provider
[tf-post]: /2019/11/15/sysadmin-terraform/