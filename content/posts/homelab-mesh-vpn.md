---
title: Connect all your devices in a mesh VPN.
date: 2023-01-03
tags: ["Homelab", "Programming"]
---

I have a nice little computer in my house which hosts a bunch of services I use. It sits behind a NAT, so I can't connect directly to it via my public IP address. Hence, I use a cheap cloud instance on DigitalOcean to act as the gateway for my home-server to the internet.

My [previous setup][previous-setup] was basically a VPN tunnel between a cloud server and my home server, where the cloud server forwarded TCP traffic to my home server, which served all my services.

Lately, I've been rebuilding this infrastructure, and one of the things I was due for, is to have all my devices (my cloud server, home server, laptop, phone, etc) connected to each other all the time. Also, it needed to be in a mesh instead of hub-and-spoke, as there was no need for data to go over the internet if I'm home, on the same physical network as my home-server.

I spent a good amount of time trying out a bunch of methods, until settling on one. This post runs through all the options I found, and why I chose what I chose. I won't go into how to set it up - there should be plenty of articles and documentation on the internet.
TLDR: I now use tailscale with a headscale server.

<!--more-->

---

### Wireguard
There's a bunch of ways to do mesh VPN as of writing this. One obvious one is to use [Wireguard][wireguard], which is what I set up first. However, one drawback of it, for my use-case is that peers need an IP address to connect to. Since my IPv4-first ISP puts me behind a NAT, I was unable to do that. So, I had to choose between routing what-could-be local traffic over the internet, or have local peers and only connect to VPN when I'm at home. Neither were good solutions for me.

[This wonderful post][wireguard-stun] by Jordan Whited uses a STUN mechanism to do IP discovery with wireguard, but I don't want to take on the burden on compiling CoreDNS every time I perform upgrades. If that's something you're okay with, I'd highly suggest giving it a try - it's exceptionally neat.

### Netmaker

[Netmaker][netmaker] is another wonderful tool, which is very performant and incredibly easy to set up. It even includes a web-app where you can manage all the nodes. I would recommend this if you don't want your phone to be a part of the mesh. Netmaker uses its own `netclient` to connect nodes, and there's no such client for Android/iOS, [as of writing this][netmaker-android]. You can technically add a phone as an 'external device' via wireguard, but then the phone always uses a specific ingress server to access the VPN, and won't connect directly to a node even when on the same physical network.

### Tailscale/Headscale

[Tailscale][tailscale] is one of the popular Mesh-VPN services providers. It's built on top of wireguard, and uses its own coordination servers to keep track of your devices (a very good write-up of how it does that [here][nat-traversal]). It has a very stable android client which has worked without issues for me. And more importantly, the official open-source clients support the third-party open-source coordination server, [headscale], which I use. The official tailscale server is not open-source, but headscale hasn't given me any issues yet. Tailscale isn't the most performant option out there, but it has been very reliable in maintaining a connection between devices even when they hop between networks (sometimes spotty LTE). I hear the performance is gonna [increase soon][tailscale-faster] too, so that's nice.


### Also: Nebula, ZeroTier

Two more tools need to be mentioned here.

[Nebula][nebula] is developed by Slack, and builds a similar mesh overlay network. It seems simpler in design, however I had a hard time with the Android client, which sometimes would just not form connections. It could have been just a momentary bug, or a configuration error, but I moved past it very quickly. YMMV.

[Zerotier][zerotier] is very similar to Tailscale too. It uses its own custom protocol instead of wireguard, and works in a similar way. Zerotier's controller server is open source, and can be self-hosted. In my testing, it took longer to reconnect after a network change, and also took more time to figure out the optimal route to a peer, but otherwise it behaved quite the same. It was more performant than tailscale though, with lower ping-times and higher transfer speeds locally (albeit with more packet loss). I would have been happy with it too, and might try it again if tailscale fucks up at some point. So far, I went with tailscale mostly because of the trusted wireguard as base, and reliability of clients handling reconnections.





[previous-setup]: /2020/01/11/personal-infrastructure-overview/#how-things-actually-connect
[wireguard]: https://www.wireguard.com/quickstart/
[wireguard-stun]: https://www.jordanwhited.com/posts/wireguard-endpoint-discovery-nat-traversal/
[netmaker]: https://www.netmaker.org/
[netmaker-android]: https://github.com/gravitl/netmaker/discussions/631
[tailscale]: https://tailscale.com/
[nat-traversal]: https://tailscale.com/blog/how-nat-traversal-works/
[headscale]: https://github.com/juanfont/headscale
[tailscale-faster]: https://tailscale.com/blog/throughput-improvements/
[zerotier]: https://www.zerotier.com/
[nebula]: https://github.com/slackhq/nebula