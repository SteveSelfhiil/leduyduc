---
title: What's Your 1202 Alarm Moment?
tags: [Software Engineering]
order: 3
---

*What the woman who invented "software engineering" can teach founders in the age of AI-generated code*

If you're building a company right now, you're being told a story: code is becoming a commodity. AI writes it, ships it, fixes it. Move fast, prompt faster.

Before you buy that story completely, let me tell you an older one. It ends with an error code - **1202** — flashing on a computer screen 240,000 miles from Earth, and fifteen seconds to decide whether the first moon landing lives or dies.

## A discipline that had to be invented

In the mid-1960s, Margaret Hamilton led the MIT team writing the flight software for Apollo. There was a problem with her job title: her job didn't exist. Programming was considered clerical work - an afterthought bolted onto the "real" engineering of rockets and hardware.

Hamilton insisted on calling what her team did **software engineering**. Colleagues laughed at the term. Her point wasn't semantics — it was a claim: code deserves the same rigor as any load-bearing structure, because that's exactly what it is. When your software fails, the thing it holds up falls.

She won the Smithsonian's 2025 Michael Collins Trophy for that body of work ([watch the clip](https://youtu.be/x2F24FUpZtE) - she's the one standing next to a printout of Apollo code as tall as she is). The profession she named at a laughed-at kickoff meeting is now what most of us build companies on.

Founders know this arc intimately: the idea that sounds absurd until it's obvious. But the more useful lesson is *how* she worked.

## Critical thinking, compiled

Hamilton's team couldn't iterate in production. There was no hotfix to the Moon. So they did something that sounds almost radical today: they thought about failure *before* writing the code that could fail.

They ran relentless simulations of the full system - software, hardware, astronaut - and studied every error. Nearly three-quarters turned out to be interface errors: timing conflicts, priority conflicts, mismatched assumptions between components. Not typos. Not syntax. **Errors of thinking.** So Hamilton engineered the thinking into the system itself: an asynchronous executive that knew which jobs mattered most, and would shed everything else to protect them.

That's the part I'd build on every engineering roadmap: the hard part of software was never typing the code. It's deciding what the system must never fail to do, and proving to yourself it won't.

## Fifteen seconds

July 20, 1969. The lunar module is minutes from the surface when the 1202 alarm fires. A radar is flooding the computer - a machine with about 72KB of memory, less than a single email - with junk data. Overload, at the worst moment in the history of moments.

Mission Control has roughly fifteen seconds to call it. They call **"GO."**

Not because they were brave. Because Hamilton's software was doing precisely what it was designed to do under overload: dropping low-priority tasks, keeping the landing functions alive. The system degraded *gracefully*, exactly as tested, hundreds of times, on the ground. The trust was earned before launch. Armstrong landed with seconds of fuel to spare.

Hamilton later said she was happier that the software worked than that they landed. Only an engineer.

## Against the hype

Here's where I'll say the quiet part: AI has made *generating* code nearly free. It has not made *engineering* free. If anything, it's made the distinction more valuable.

When code is cheap, the scarce assets become exactly what Hamilton had: knowing what the system must never fail to do, designing for the failure modes you haven't seen yet, and testing until trust is earned rather than assumed. An LLM can write your radar driver. It cannot decide, fifteen seconds from the surface, which of your processes deserves to live. That judgment has to be designed in - by someone who thought about it.

The founders who win the next decade won't be the ones who generate the most code. They'll be the ones whose systems survive their 1202 moments - the demo-day crash, the launch-day meltdown, the traffic spike that kills your competitor - because someone on the team engineered for failure before failure arrived.

Sixty years ago, calling this discipline "engineering" was a joke. Today, abandoning the discipline because a machine can type is the same joke, told in reverse.

So: what's your 1202 alarm moment? And more importantly, will your software make the right call when it comes?

---

*Sources: [Smithsonian National Air and Space Museum](https://youtu.be/x2F24FUpZtE), [TIME — Remembering the Apollo 11 Moon Landing With the Woman Who Made It Happen](https://time.com/3948364/moon-landing-apollo-11-margaret-hamilton/)*
