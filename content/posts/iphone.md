---
title: Moving to an iPhone (for now)
date: 2019-12-04
tags: ["tech"]
---
I spent the last two days trying to switch from my three year old Oneplus 3, to a brand new iPhone 11. I thought I was probably done with expensive phones (I count Oneplus as an expensive purchase), but resigned to giving iOS a chance this time around.

The Oneplus has served as my phone for 33 months now, and has had its fair share of rough usage.  The screen broke twice (and got replaced once). Its battery had degraded so much that I didn't dare go out without carrying a small sling bag with a charger and a power bank in it. Screen-on time would have been somewhere between 50-90 mins. At least it charged fast.

It wasn't a fast phone by any means anymore too, and I'd gotten used to waiting a few seconds for apps to launch.

The iPhone, is a stark contrast to that. It's a recent phone with the latest and greatest Apple processor, and things are super fucking fast on it. I am almost in disbelief of how much the battery lasts on this thing. That carry bag isn't a necessity anymore (though I have gotten used to it - it came in handy a lot more times than it became a hindrance).
<!--more-->

{{< figure src="/images/iphone/phones_front.jpg" caption="Shiny vs battered" alt="Comparing the front of iPhone and Oneplus phones" >}}

{{< figure src="/images/iphone/phones_back.jpg" caption="I much prefer the back of the Oneplus. It looks interesting. That sticker is a washed out logo of the [34C3 F.U.C.K. assembly](https://events.ccc.de/congress/2018/wiki/index.php/Assembly:F.U.C.K.)" alt="Comparing the back of iPhone and Oneplus phones" >}}

## Actually moving to iOS.

The first thing was setting up contacts and calendar on the iPhone. I use [radicale][radicale] as the CardDAV and CalDAV server to store my contacts and calendar. On Android, I had to use an app called [DavX][davx] to synchronize the files, which didn't work perfectly. Rarely ever synced in the background for me. I had to frequently open the app and manually refresh it. I was very pleased to know that iOS supported these standards natively (much like MacOS). Syncing works quite smoothly now.

Setting up Email was pretty easy too in the stock app. UI is really slick, and it sends plain-text emails by default. It's infuriating how many clients send HTML mails by default, even when not doing any sort of formatting.

The next step would be reinstalling the iOS counterparts to all the apps I had on Android. Most of the popular apps had an iOS version themselves, which didn't really create many issues. I had to replace few apps with different ones when they weren't available in the App Store, but the real problem was with apps which had no replacement. This was my first frustration with the walled garden.

### Replacement apps

- *Moon+ Reader → Marvin 3* - This was basically a drop-in replacement. I needed an app which could access my OPDS server, and Marvin seems to handle that really well.
- *Readable → Reeder 3* - This was my replacement for an RSS reader. I use a [FreshRSS][freshrss] server as an aggregator and Reeder (I am using the older, free version which seems sufficient for my needs right now) has good support for Fever APIs.
- *Slide → Apollo* - Slide was probably my favorite Reddit client on Android. The gestures were smooth, and it looked pretty nice. Slide for iOS had much more whitespace and had a different design which I wasn't a big fan of. Apollo, on the other hand seemed like a much better alternative, and had a closer UX to Android's Slide than iOS' Slide itself.
- *Hyperlapse → Microsoft Pix* - Microsoft Hyperlapse, while not a very well-designed app, was a good enough one to convert standard videos into Hyperlapse one. There's a Hyperlapse app from Instagram on iOS, but it doesn't let you import videos from outside, and stabilization didn't seem to work in iPhone 11. Microsoft Pix is a complete camera app, but one of its features is converting videos to hyperlapse. That's probably the only use I'm gonna get out of this app.
- *Juice SSH → Blink* - This was also basically a drop-in (and probably better) replacement for a mosh-enabled shell. The App Store version is pretty expensive, but given that it's an open source app, one can build it from the source and install the app.
- *Solid Explorer → Files/Airdrop* - Solid explorer used to solve two problems for me. One was being a pretty solid file manager, and the other was the built-in FTP server. It was my preferred way of transferring files between my computer and phone wirelessly, without using the internet. I'm currently using the stock Files app for file management (There might be better apps out there - but this one works well for me right now), and Airdop for exchanging files with my computer. Airdrop is just so nice, man.
- *Sky map → SkyView Lite* - There doesn't seem to be a good free astronomy app for iOS, so this would have to make do for now. Stellarium is available for iPhone, but I'm putting off buying paid apps for now.
- *Revolution IRC → Lounge* - I was unable to find a free and good IRC client for iOS — so, for now, I'm using a web-based [Lounge][lounge] instance to connect to IRC. It works pretty well, except for the fact that iOS browsers don't support notifications yet. I'm not really bothered by that though, as I don't like to be perma-connected to channels on my phone anyway.
- *Jellyfin → Jellyfin (web)* - Jellyfin also didn't have an iOS app, but the web interface is so good that it almost makes up for it.

These were the apps that were easy to replace. Now there were some which didn't seem to have any sort of replacement (at least not without jailbreaking the phone – which I'm not very keen on doing right now).

- *Flud* - Flud is a torrent client I used to run on my phone. It was pretty convenient to be able to download torrents on the phone without any hiccup or afterthought. Apple doesn't seem to allow anything torrent related on their store. I, now have to use the web-ui of a torrent client hosted at my home.
- *Transdroid* - Speaking of managing a hosted torrent client - Transdroid is an app which can remotely control hosted torrent clients really easily. I now have to use a web-browser for that, and most torrent clients don't really have a mobile-friendly UI.
- *NewPipe* - NewPipe is a Youtube client on steroids. It doesn't have ads, can download videos as MP4s, can play in the background, and has an overall better interface than the official youtube app. No such replacement on iOS sadly.
- *Firefly III* - I use a self-hosted version of [Firefly III][firefly] for managing my expenses. The web interface is not a mobile friendly one, but there were some Android apps which could connect to the API and make changes. No such things on iOS. But I did find [this][firefly-shortcuts] blog by Jesse Dyck where they utilized iOS shortcuts to interact with the server. That's something I wanna give a try later on.
- *SMS Organizer* - I am so bummed that this app is not available on iOS. SMS seems like a medium for spam these days, and SMS Organizer did a very good job silencing those messages. I am now back to blocking senders as they come to reduce spam. I'd happily block all SMS messages (I don't really use SMS for personal communication anyway) but that doesn't seem to be an option on iOS.
- *Google Play Services* - Okay, not really sad about this. I wrote this because I'm glad to not be dependent on Google APIs anymore. There're literally zero google apps on my phone right now, and it's really nice.

### The UX

Some things about the iPhone are really amazing. And other things, quite awful.

Right off the bat - I love the seamless clipboard syncing with macOS. Honestly, exchanging strings between the phone and computer was such a pain. My method was to use Signal's "Note to Self" feature for this. I've seen others using note-app synchronizations, self-emails, etc. This seamless copy-paste is basically my favorite thing about iOS right now.

There're also other nice integrations with macOS - Airdrop is super-nice. You can use your phone as a Wifi-hotspot without touching the phone itself. Can even accept calls right from the computer.

iOS Shortcuts seem to be pretty nice and well-integrated with Siri. Though not as powerful as Android's Tasker - they seem to be good enough for my needs as of now.

Permissions also seem to be better managed. The ability to disallow location access in the background is something which Android should have implemented long back. I like that iOS also asks for notification permissions explicitly. Though I do miss the granular notifications permissions from Android. There, I could disable all promotional notifications, and only keep the important variety. iOS does all-or-none. And this has led to me disallowing notifications from a lot of apps. I refuse to ever receive any promotional anything ever – SMSs, emails, notifications - everything must go.

And I really really miss the customizability of Android. There just seems to be no personality on iOS home screens. Even the widgets on iOS are vastly inferior to the android ones. Also, the status bar is worthless on iOS. On Android, I can see all the apps with notifications, current network speed, ringer status, VPN status, and so many other things. iOS has just the time, network, wifi and battery.

{{< figure src="/images/iphone/screenshots.jpg" caption="I find the latter layout much better. Everything is reachable on the bottom. The icons are nice, and there's a play button for music right there." alt="Comparing iOS and Android home-screens" >}}

### The hardware

The "True Tone display" is quite nice. It matches the ambient light and temperature much better than any other phone I've seen. The speakers are actually great for a mobile phone. What sucks is that there is no headphone jack in this phone. This phone is thicker and heavier than my previous phone. It could have had a fucking headphone jack in it. I do use wireless headphones with my phone, but ever so often, they run out of battery, and then it's very convenient to attach a wire and use it with that instead. I'll probably have to buy the lightning-to-AUX dongle now - which I hear, at least has a pretty good DAC in it. Which reminds me - it sucks to move away from USB-C to the lightning port. I'd been getting closer to everything USB-C with every new hardware purchase since the past few years, and now I just took a step back due to this iPhone.

And finally, it's laughable that Apple includes a 5W charger in the box. I hadn't seen a 5W charger in years lol. And this, when the phone actually supports 18W fast charging. I don't understand why they had to cheap out on this.

{{< figure src="/images/iphone/chargers.jpg" caption="What the fuck, Apple?" alt="Comparing iPhone and Oneplus chargers" >}}

I hope the good outweighs the bad in this move. It took way too much time to shift ecosystems, and I don't want to repeat that anytime soon.

[radicale]: https://radicale.org/
[davx]: https://f-droid.org/packages/at.bitfire.davdroid/
[freshrss]: https://freshrss.org/
[lounge]: https://thelounge.chat/
[firefly]: https://github.com/firefly-iii/firefly-iii/
[firefly-shortcuts]: https://www.jessedyck.me/2019/03/ios-shortcuts-firefly-iii/
[screenshots]:     /images/iphone/screenshots.jpg
[chargers]:     /images/iphone/chargers.jpg