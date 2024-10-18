---
title: Mathematical operations on objects in javascript.
date: 2018-08-11
tags: ["tech"]
---

_All of these were executed on Node.js 6.9.1_

```
> [] + []
''
```
Obviously.

```
> [] + {}
'[object Object]'
```
Less obvious, but okay.

```
> {} + []
0
```
Huh?

```
> {} + {}
'[object Object][object Object]'
```
Oh, fuck off.

I'd rather just add strings to these from now on:

```
> [] + ''
''
```

```
> [] + '1'
'1'
```

```
> [] + 'a'
'a'
```

```
> {} + ''
0
```

```
> {} + '1'
1
```

```
> {} + 'a'
NaN
```
Lol.

Okay, subtraction maybe:

```
> [] - []
0
```

```
> {} - {}
NaN
```

```
> [] - ''
''
```

```
> [] - '1'
-1
```

```
> [] - {}
NaN
```

FML.

But, my favorite one is this:

```
> {} - []
-0
```

Follow-up post: [Minimalistic javascript packages][follow-up-post]

[follow-up-post]: /2018/08/16/minimal-npm-packages/

<!--more-->