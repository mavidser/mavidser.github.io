---
title: iOS Shortcuts for Firefly III
date: 2019-12-06
tags: ["iOS", "Mobile"]
---

I've been using the excellent [Firefly III][firefly] to manage my expenses for a while. As a result, I have developed a habit to actively monitor every transaction I do, which, in my opinion is a much better way than using other automated expense managers which can only track your non-cash expenses, without a lot of context.

Android had an [unofficial app][android-app] which made it easier to interact with Firefly, but iOS doesn't seem to have one, and the web-ui is not a very mobile friendly one.

While searching for solutions, I came across [this blog post by Jesse Dyck][jesse-blog] where they utilised iOS Shortcuts to create transactions in Firefly. Honestly, I was pretty surprised that Shortcuts is powerful enough to do this, given Apple's approach to customization.

The shortcuts provided by Jesse didn't work for me (they were written for iOS 12, before Shortcuts were revamped for iOS 13), so I decided to build one for myself, with a UX more suited for my needs.
<!--more-->

Here it is in action:
<br>
<center>
<video controls width="250">
  <source src="/images/firefly-ios-shortcuts/video.mp4"
            type="video/mp4">
  <a href="/media/examples/flower.mp4">Link</a>
</video>
</center>
<br>
To use these for yourself, you have to download the following three shortcuts from your iOS device. The first two are function-like dependencies of the third one, which is used to add a transaction.

If you're not into categories, you'd probably have to edit the _Add Transaction_ shortcut and remove the steps where it deals with them. A fair bit of trial and error should probably give you what you want.

- [List Accounts][list-accounts] ([screenshot][list-accounts-screenshot])
- [List Categories][list-categories] ([screenshot][list-categories-screenshot])
- [Add Transaction][add-transaction] ([screenshot][add-transaction-screenshot])

Note that, to be able to import shortcuts from outside the app gallery, you have to go to _Settings_ > _Shortcuts_ and enable _Allow Untrusted Shortcuts_.

While adding these shortcuts, you'd be prompted to enter your firefly URL and Personal Access Token for each of the shortcut. The URL is where you've hosted the app, complete with the protocol and without a trailing slash (like `https://demo.firefly-iii.org`). You can generate the token from Firefly by going to _Options_ > _Profile_ > scroll down to _Personal Access Tokens_ and click on _Create New Token_.

After spending 3 hours creating these 150-step shortcuts on a very tiny screen, I was wondering if it'd have been easier to create a basic iPhone app itself. Not really, I don't know Swift yet.

[firefly]: https://firefly-iii.org/
[android-app]: https://f-droid.org/en/packages/xyz.hisname.fireflyiii/
[jesse-blog]: https://www.jessedyck.me/2019/03/ios-shortcuts-firefly-iii/
[list-accounts]: https://www.icloud.com/shortcuts/aae6683ea5124212b3eebc10a187ba34
[list-categories]: https://www.icloud.com/shortcuts/e03cc6c24f4e4f6092a4cea2cc35ded0
[add-transaction]: https://www.icloud.com/shortcuts/876597bf952c44daaf01b3a28ca89512
[list-accounts-screenshot]: /images/firefly-ios-shortcuts/list-accounts-screenshot.jpg
[list-categories-screenshot]: /images/firefly-ios-shortcuts/list-categories-screenshot.jpg
[add-transaction-screenshot]: /images/firefly-ios-shortcuts/add-transaction-screenshot.jpg
