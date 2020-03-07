---
title: Doing sysadmin things through Terraform
date: 2019-11-15
tags: ["Odyssey", "Programming"]
---

_Disclaimer: I have not worked as a sysadmin anywhere in my professional life, nor do I consider myself to be very good at it._

I've self-hosted a small part of my personal infrastructure (IRC bouncer, VPN server, torrent client, etc) for a while now.
These services were set up over the course of a week on the tiniest DigitalOcean instance five years ago, never to be touched again for the next three years.

Two years ago, at [Hackbeach 2017][hackbeach], [Arun Singh][arun] gave a small talk on Infrastructure as code and [Terraform][terraform]. Around then, I had recently started frequenting [/r/selfhosted][/r/self-hosted], and decided to start self-hosting more of my services. Upon finally logging in into my server after three years, I couldn't understand anything about the way it was set up. Port 443 seemed to be occupied by OpenVPN (for punching through restrictive firewalls), which proxied HTTP traffic to HAProxy which proxied it to a web server, and so on.

<!--more-->

I didn't quite remember how I had set it up, which configurations should be where, and had to go through quite some documentation to get up to speed on navigating the system.

This reminded me of the very similar problems that Arun had mentioned, which Terraform was trying to solve. I decided to give it a go, using the [Docker provider][docker-provider] to manage all the services.

This led to me reworking my entire infrastructure, where every service was deployed via Docker, and managed by Terraform. This included monitoring infrastructure, an RSS reader, a VPN server, a mailing list, etc. Later on, I also started managing my home-server (mostly media related services) with Docker and Terraform, with the former server acting as the edge node of it. Even the DNS rules related to the infrastructure (domain names of the various services, mail-server related records, etc) are now managed by Terraform using the [Cloudflare provider][cloudflare-provider].

Even after all this, I noticed that I sometimes still had to SSH into my server to setup some new services. Upon identifying those, they mostly seemed to be creating users+groups, creating some folders with special permissions, modifying iptables rules, and cleaning up after the services I'd removed – deleting the associated users and files/folders they left behind on mounted volumes.

This has led to me writing a provider, which I have crudely named [Linux Provider][linux-provider]. I am aware that this is not remotely accurate name. If you have a better but not restrictive name, feel free to <a id="sysadmin-post-email-1" class="email-hook" href="/contact">email</a> me.

<a id='email-text-sysadmin-post-email-1'></a>

As I am currently the only user I know who uses it ⁠— It mostly utilizes commands found in some common linux distros. Mine are Ubuntu and Raspbian.

I have now arrived at a state where I don't ever (_almost_) have to SSH into my server, to set up, modify, or completely remove a service. I can just delete `mailman.tf` and everything related to the setup of my mailserver will be removed from the system (_almost_ again - explanation below). And I can see everything about my configuration in just a single folder, while navigating around using simple grep commands.

> Explanation for (almost): I am still working on adding more capabilities to the provider. I still have to sometimes login into the machine modify firewall rules, if dealing with a non-HTTP service. Also note that my motivation is not to never use SSH; it is to make the configuration powerful enough that it doesn't _need_ me to.

Links to the code:
- __[Terraform Linux Provider][linux-provider]__ - As of writing this, it supports connecting to the client with SSH (key-based or password-based), and manage CRUD operations on files, folders, users and groups. Will keep working on improving this to add more resources.
- __[Terraform code of the infrastructure][odyssey]__ - This contains two terraform modules (folders, basically), HAL-9000 and SAL-9000. The former is my home-server, a Raspberry Pi 4, and the latter is a DigitalOcean instance (a basic 4GB RAM one, costs around $20 per month). The home-server runs services like Kodi for media browsing, samba server for sharing the media as a Windows Network Share with everyone connected on the Wi-Fi, monitoring infrastructure, etc. The cloud server would have much more services like a wiki server, IRC clients and bouncer, Finances and social management server, Kanban board, VSCode editor, Wallabag (Pocket alternative), CalDAV and CardDav servers, and some more.

I have shown this to some of my DevOps friends, and not everyone seems to be a fan of it. Common complaints were "too much abstraction", which I somewhat agree with, but am fine with, as the pros outweigh the cons for me.

Another complaint was that this was adding an unnecessary tool to a system which is usually pretty minimal (just SSH into a server, run a few commands, and log out). My take is that since this works in an agentless way, I can always move back if I ever needed to. This gives me an added benefit of using version control to see the system history (and revert changes), have all services+configs be reproducible and in a single folder, and be able to browse my system in a safe and easy way.

If you too have some strong reasons about this should not be done, feel free to tell me through <a id="sysadmin-post-email-2" class="email-hook" href="/contact">email</a>.

<a id='email-text-sysadmin-post-email-2'></a>

[hackbeach]: https://hackbeach.in
[arun]: https://twitter.com/aruns89
[terraform]: https://www.terraform.io
[/r/self-hosted]: https://old.reddit.com/r/selfhosted
[docker-provider]: https://www.terraform.io/docs/providers/docker/index.html
[cloudflare-provider]: https://www.terraform.io/docs/providers/cloudflare/index.html
[linux-provider]: https://github.com/mavidser/terraform-provider-linux
[odyssey]: https://github.com/mavidser/odyssey.
<!--more-->