---
title:  Link etiquettes for web developers.
date: 2017-08-02
tags: ["Programming"]
---

This post might seem like nitpicking, or unnecessary to a lot of people, but it's frustrating when links don't work how they're expected to.

- DO NOT use `<span>` or `<div>` tags and then proceed to handle their `click` events. Use proper `<a>` tags. This breaks so many things!
  - People can't use them if they have disabled javascript or it just failed to load.
  - Ctrl-click will not open a new tab unless you explicitly handle the situation. (More on that below)
  - Even then, you just dumbed down your users' context menus. No *Open link in new tab*, or *Copy link address*.
  - The same situation on mobile. Long click will copy the text instead of showing helpful actions.
  - The javascript might break, throw an unexpected error, or burn down your house, rendering that "link" useless.

- Even when you are using `<a>` tags:
  - If possible, execute whatever JS you want, and then let the link do its job. Don't `preventDefault()` and open the link through javascript.
  - If you really have to open it through JS, take care of Ctrl-clicks. And Cmd-clicks in case of macOs. [Old browsers might make this difficult][key-madness].

- Put `mailto:` links only where the email-id is the visible text too. [foo@bar.com][email-good] is so much better than [Contact Email][email-bad]. Not everyone has email clients configured, and opening bulky clients when clicking a link is just bad UX. Or people might just want to note down the address, to contact later.

[key-madness]: http://unixpapa.com/js/key.html
[email-good]: mailto:foo@bar.com
[email-bad]: mailto:foo@bar.com
<!--more-->