---
title:  "STDIN inputs via Sublime Text (sort of)"
date: 2015-01-03
tags: ["tech"]
---

I love Sublime Text. I really do. I can put a ring on it if it had any corporeal form. I've been using it so much, that trying to work on anything else is kind of a pain. And yet, when dealing with STDIN inputs, the magic falters. This method describes a workaround to give inputs without a prompt.

Recently, I tried my hand on Competitive Programming, and though I didn't get really good at it, I did encounter a frustation. Entering the same input again and again after every change I make to the code. I wanted a simpler method.

Here's what a friend of mine came up with: Enter the input in comments.

{{< highlight cpp >}}
/*input
2
foo
bar
*/

#include <stdio.h>
int main() {
  int n,i;
  char s[10];
  scanf("%d",&n);
  for(i=0;i<n;i++) {
    scanf("%s",s);
    printf("%s\n",s);
} }
{{< /highlight >}}

gives the output:

```
foo
bar
```
<!--more-->
I wrote up a [quick and really dirty plugin to do it](http://gist.github.com/mavidser/83d50803622ae70895ce) for Python, and though it was rather clunky, I had a rough idea of what I wanted, and how to do it. Pipes! Good ol' pipes!

Now, what I had was a clunky implementation which just executes the following command:

{{< highlight bash >}}
echo "input" | python program.py
{{< /highlight >}}

I started jotting down a list of things I needed to add to the plugin. The first thing was to make the execution asynchronous. I couldn't let the whole editor hang when a program's under execution. Also, to be able to kill programs. And proper error reporting, platform independency, etc.

It turns out all these things were already implemented, in the default build system of Sublime Text itself. I decided to merge my plugin it.

Apart from things like input extraction, handling filenames, the behavious of things in Windows, etc, the main trick was changing

{{< highlight python >}}
self.proc = subprocess.Popen(["/bin/bash", "-c", shell_cmd],
                             stdout=subprocess.PIPE,
                             stderr=subprocess.PIPE,
                             startupinfo=startupinfo,
                             env=proc_env,
                             shell=False)
{{< /highlight >}}

to

{{< highlight python >}}
echo_input = subprocess.Popen('echo "' + user_input + '"',
                              stderr=subprocess.STDOUT,
                              stdout=subprocess.PIPE,
                              shell=True)

self.proc  = subprocess.Popen(["/bin/bash", "-c", shell_cmd],
                              stdin=echo_input.stdout, #Input
                              stdout=subprocess.PIPE,
                              stderr=subprocess.PIPE,
                              startupinfo=startupinfo,
                              env=proc_env,
                              shell=False)
{{< /highlight >}}

A few other fixes, and the whole thing was running smooth as butter. No more rapid switching between the Console and Sublime Text to execute a program.

---

The plugin has now been nicely packaged and uploaded. It can easily be installed via [Package Control](http://packagecontrol.io/packages/Sublime%20Input), and the source is available on [Github](http://github.com/mavidser/SublimeInput).
<!--more-->