---
title:  "Wi-Fi positioning woes"
date: 2017-07-12
tags: ["Technology"]
---

Alice lives in India. She has super-cheap cellular internet (less than $0.2/GB on some networks). Cheap enough for it to be her daily driver, using [a][0] [number][1] [of][2] [portable][3] Wi-Fi routers, which just sit on her desk. And since it is so cheap and portable and convenient and long-lasting, she just carries it everywhere in her purse, wherever she travels.

Alice also faces an a peculiar amount of problems with her GPS. She could be at a crowded bus station, trying to get an Uber, or stuck in a storm, again trying to get a cab, her phone just fails to locate her correctly long enough for the app to work. Either it'll just be showing her previous location at the far away house, or it will keep fluctuating and jumping between her actual position, and her house. People around her sometimes get affected too. Maybe it's a curse.

<!--more-->

For most people, device positioning is synonymous with GPS. But these days, GPS is the last thing a smartphone checks when trying to locate itself. GPS takes some time to obtain a good fix, and drains a lot of battery. In contrasts, a lot of your phone radios are less power-hungry and always on. Mostly, it's a combination of cellular, bluetooth and Wi-Fi. Basically, the signal strength from different cell towers help triangulate your approximate location. Some BLE devices can also advertise their location to nearby devices.

Apart from these, Companies like Google/Apple/Microsoft/Skyhook maintain a huge list of `(Wi-Fi SSID + MAC) => Location` combinations to find your location. You might have noticed your phone telling you to switch on Wi-Fi for more accurate positioning at some point. This is why. This method quite is power efficient, and quick. And in most cases, very accurate.

_Note: This is one of the primary uses of [Google Location Service][google-location-service] on Android._

In our character's case though, Alice's wifi router normally always resides on her desk, at her home. The device has the MAC Address `AB:CD:EF:GH:IJ:KL`. It's boring SSID is `Alice's Wifi`. Now, a lot of smartphones around her will be reporting this MAC+SSID combination to some server, along with their location. Alice, her guests, her neighbours, almost everyone around her. They don't need to be connected to the network. Her router getting scanned is enough.

So, when travelling with the said hotspot on in her purse, if she tries using some location-requiring app, her phone gets wrong/conflicting location data. Depending on the neighboring conditions (the GPS strength, other Wi-Fi networks nearby, etc), she may see her actual location, or her far-away home, or even jumping between the currnt position and her home.

If you find yourself in such a situation and own the culprit router, just change the network name. This should solve the problem for you and people around you. Also, if you don't have control over the router, try switching your phone from from A-GPS to GPS-only temporarily. It might be slow and power-hungry, but is accurate. Disabling your Wi-Fi doesn't always prevent it from scanning for networks.

{{< figure src="/images/location-settings.jpg" caption="Example of Android's location settings" >}}

BTW, this is also how your PCs sometimes know their location. Eg— when you visit [Google Maps][maps] on the desktop.

[0]: http://www.amazon.in/D-Link-DWR-720-HSPA-Mobile-Router/dp/B00PVD1RV2
[1]: https://www.amazon.com/Hotspot-Unlocked-Worldwide-Huawei-E5220s-6/dp/B06XJ5NF8W/
[2]: https://www.amazon.com/Verizon-Wireless-LTE-Prepaid-Smartphone/dp/B014RJJXUW/
[3]: https://www.amazon.com/Hotspot-Unlocked-MF65-Router-Mobile/dp/B01KGCMUQ8/
[maps]: https://maps.google.com
[google-location-service]: https://support.google.com/accounts/answer/6179507?hl=en