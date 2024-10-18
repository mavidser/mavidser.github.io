---
title: Minimalistic npm packages.
date: 2018-08-16
tags: ["tech"]
---

A follow up to [my previous post][prev-post], this time we look into some of the lesser known, but widely used javascript packages.

Javascript's NPM package manager, is one of the [biggest and fastest growing][modulecounts] package manager out there. As of writing this:
- RubyGems - 145,675 (25 new packages/day)
- PyPI - 149,111 (104 new packages/day)
- Packagist - 191,577 (103 new packages/day)
- Maven Central - 244,143 (149 new packages/day)
- **npm - 679,009 (508 new packages/day)**

Minimalism doesn't only apply to design, lifestyle and ownership, but also to code. Here are some of the most minimal packages in npm:
<!--more-->

## [is-false][npm-is-false]
> Returns false if the value of a property is either strictly false, or it's inverse is strictly true.
>
> _**5 weekly downloads**_

Let's take a look at its github repository:

{{< figure src="/images/javascript-packages/gh-is-false.png" >}}

Pretty standard set of files. You've got your test cases, test runner config, editor config, lint config, and other necessary files. Let's look at the code:

{{< figure src="/images/javascript-packages/gh-is-false-code.png" >}}

Absolute minimalism.

&nbsp;

## [is-even][npm-is-even]
> Return true if the given number is even.
>
> _**27,881 weekly downloads**_

{{< figure src="/images/javascript-packages/gh-is-even-code.png" >}}

This was slightly more minimalistic.

&nbsp;

## [is-positive-integer][npm-is-positive-integer]
> check if a number is a positive integer
>
> _**173 weekly downloads**_

{{< figure src="/images/javascript-packages/gh-is-positive-integer-code.png" >}}

Oh, the beauty!<sup>*</sup>

&nbsp;

More:
- [is-array](https://npmjs.com/package/is-array) (18,412 weekly downloads)
- [is-string](https://npmjs.com/package/is-string) (785,069 weekly downloads)
- [is-object](https://npmjs.com/package/is-object) (1,177,287 weekly downloads)
- [array-length](https://npmjs.com/package/array-length) (11 weekly downloads)
- [is-empty-array](https://npmjs.com/package/is-empty-array) (20 weekly downloads)
- [is-non-empty-array](https://npmjs.com/package/is-non-empty-array) (3 weekly downloads)


<sup>\* The author has updated the code to a very non-minimalistic monstrosity. But for the sake of this post, we are gonna pretend that the
initial commit is where it's at.</sup>

[prev-post]: /2018/08/11/javascript-mathematical-operations/
[modulecounts]: http://www.modulecounts.com/
[npm-is-false]: https://www.npmjs.com/package/is-false
[npm-is-even]: https://www.npmjs.com/package/is-even
[npm-is-positive-integer]: https://www.npmjs.com/package/is-positive-integer