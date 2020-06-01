---
title: "Decision making while writing software"
date: 2020-06-01T01:00:00
tags: ["Programming"]
---

_Post #1 in the [Meta:Programming][meta-programming] series._

<!--more-->
Very often, a significant part of software development is making decisions between a couple of available options, over and over again.

In some areas, you would just skip the decision making process by picking a default, which can be dictated by your experience, social circle, current market trends, or personal preference.

And conversely, sometimes you'd spent way too much time on deciding between the options, to the point of diminishing returns. This is called [bikeshedding][bikeshedding].

Consider a student, Alice, who's just starting out as a software developer. She wants to create an Android app, for a small idea that she had. She starts with her usual first step - creating a private repository on Github, the most popular code-sharing site. Next, she goes on her favorite web-search, looks up how to build Android apps, and goes with the recommended starting point - installing a software called Android Studio.

While setting up a new project, the software offers her two choices: Which language do you want to use for writing this app - Java or Kotlin? Alice squints.

Alice went through two semesters of Java during college, but had never heard of Kotlin before. She can either choose Java right now, because she wants to get on with the development process, or she can spend some amount of time researching the two, and make a more educated choice. Both are valid options, with their own pros and cons.

She fires up that browser again, goes through tons of search results, and decides to go with Kotlin – because she is no hurry to develop the app, and can take a small risk, while using this opportunity to learn something new.

{{< figure src="/images/alice-decisiontree.svg" caption="Alice's decision tree" >}}

This was the first major choices she made in the life-cycle of this software.
This is not a choice which is easily reversible down the road, and is going to affect the project for a long time. There's a reason that developers are often seen spending large amounts of time exploring and researching different options, because the cost of changing that decision can be huge in the future. And when you do change such a decision, it leads to rewriting large chunks of code, which is best left to be discussed in a later post.

Now, if you were to take a second look at Alice's actions so far, you'd see that this wasn't a single choice with a long-term outcome, these were a series of choices, each with an almost equally enormous impact. Alice spent time on researching some choices, sped through some without realising they were choices, and sped through others becuase she straight up accepted the prevailing common choices without dwelling too long on them. There's a reason that some choices are so popular. This is also not something exclusive to software development, and can also be applied to life in general. Nevertheless, it certainly is something one should be actively aware of.

Let's take another developer - Bob, who is at a different stage in his career with different sensibilities and priorities. He gets the same idea, but stops and considers a lot of different choices while arriving at the same final decision.

{{< figure src="/images/bob-decisiontree.svg" caption="Bob's decision tree" >}}

Bob researches different ways to build mobile apps, looks into different frameworks, their pros and cons, takes into consideration the prospect of a future iOS application, and after balancing his priorities and current state, ends up going the same route as Alice.

But he could also have easily went in a different direction, if he had different priorities and timelines. Maybe he'd have gone with writing the app in Flutter if iOS application was a priority in the near future. Or if he was already familiar with React, and could've handle slight performance loss in favour of easier development, he'd have gone with React Native.

Even after spending so much time on this, Bob took shortcuts (and he spent A LOT of time on this, during which Alice might've already written the app). There are some frameworks he never considered. He sped through the choice of the version control because Git seemed popular and good enough so far. A different developer might have had a completely different decision tree, and would judge on different merits.

The ability to go through such a decision tree efficiently is often the difference between a junior developer and a senior one. Over time, you learn to set defaults for yourselves based on different requirements. You start to identify points which require more attention than others, and avoid bikeshedding. All this, while still being open to new options, becuase langauges, paradigms and tools come and go at quite a fast rate. You start to compile and cache these procedures in your brain, or collaborate with other people who have went through a similar process already.

There's rarely is a catch-all universal answer to these choices. Some mature fields get dominated by a particular option, while others get swarmed by a number of choices, and then you start balancing the tradeoffs between them based on current requirements.

---

An example of choices that a former team of mine faced, which consumed multiple weeks cumulatively – Which language to use - slow loosely-typed language which has tons of frameworks vs fast strongly-typed language with slow development speed? Old featureless stable framework or the new up-and-coming featureful one with a tiny community? Which reverse proxy should we use? Do we even need a reverse proxy? Cloud or colocate? Which cloud platform? Should we worry about vendor lock-in? Kubernetes - Too complicated at this stage, or is it good to set it up early and reduce friction in the future? Which databse should we use? Should we use an ORM? Which one? Which pattern to follow for writing tests? REST or GraphQL? Which monitoring stack to use?...

It is quite likely that we spent more time on making decisions than the time we'd have spent working around slightly worse choices. On the other hand, we did avoid any major revisions to the code during its lifetime, and the documentation of our research helped other teams shorten their decision-making process. It also helped newer members of our team to understand why some odd choices were made, and be more confident when making improvements to the code.

Factors which affected the above choices: The team size. The skills of the said team. The apetite for experimentation. Timeline of product launch. Minimum acceptable development speed. Ease of development vs performance of product. Testing protocols. Philosophical beliefs. Stress levels. Sleep deprivation. Is this tech cool enough to get to the Hacker News frontpage? Et cetera.

[meta-programming]: /2020/06/01/meta-programming-0/
[bikeshedding]: https://en.wiktionary.org/wiki/bikeshedding