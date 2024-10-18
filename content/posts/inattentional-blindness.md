---
title: Kodi controllers
date: 2019-07-06
tags: ["tech"]
---
For the past five years, a Raspberry Pi, running [Kodi][kodi], has been attached to my TV. The Pi, TV and the software all get updated time to time, but the overall setup has been the same for most of it.

```
+----+              +----+              +-----+
| TV |----(HDMI)----| Pi |--(USB/DLNA)--| HDD |
+----+              +----+              +-----+
```

Controllers I've used for Kodi over the years -
- Desktop Keyboards (Wired/Wireless)
- Wireless Mouse
- Web Interface
- Tasker scenes utilizing the web interface API
- Kodi remote apps (for Android/iOS)
- Emulated keyboard over SSH
- VNC
- Arduino based bluetooth remote
- Game controllers

Some of these were novelty ones, others were used because of circumstantial needs+availability.

My primary controller is the excellent app [Yatse][yatse] (Lets you browse/play media on the phone itself - much faster than the TV UI). When the phone's not nearby, or there's a guest involved, I use a game controller (connected for retroPie anyway).

Last week, I was setting up Kodi ([OSMC][osmc] to be exact) on my old roommate's Raspberry Pi. While I was installing Yatse on his phone, this other guy present there, who isn't familiar with the software, doesn't have any of the controller I know of, starts browsing movies on the TV. I look over, dumbfounded, and see him casually using the TV remote to play around in the UI.

Five years of having a [CEC][cec]-compatible TV with a CEC-compatible SBC, and it never dawned on me to try the simplest UI possible - The TV remote.

{{< youtube IGQmdoK_ZfY >}}

<br>

[yatse]: https://play.google.com/store/apps/details?id=org.leetzone.android.yatsewidgetfree
[osmc]: https://osmc.tv/
[kodi]: https://kodi.tv/
[cec]: https://en.wikipedia.org/wiki/Consumer_Electronics_Control

<!--more-->