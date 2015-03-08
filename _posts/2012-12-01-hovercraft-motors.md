---
layout: post
bodyclass: blogpost
title:  "Hovercraft Research 1: Motors"
date:   2012-12-01
categories: blog
blurb: "I understand how brushed motors work having seen the inside of plenty during my days of ripping any electrical toy I had apart as a kid, but wanted to learn about how brushless motors work."
image: /assets/images/blog/hover/hover.jpg
---

A good weekend to learn stuff that will help me build my robotic hovercraft. I am currently trying to work out what I need for the lift fan.  

I understand how brushed motors work having seen the inside of plenty during my days of ripping any electrical toy I had apart as a kid, but wanted to learn about how brushless motors work.  

Standard DC electric motors contain two main parts: permanent magnets and electromagnets formed by a charged coil. It is the attract and repel of the electromagnets against the permanent magnets being switched at the correct point of the motors rotation that makes them spin. In brushed motors this is done mechanically. The terminals for the coils are placed around the shaft of the motor. This is the bit that spins, and it is called the armature. As the armature spins around, the brushes come into contact with each of the terminals. The positioning of these terminals allows the correct coil to charge creating a temporary electromagnet that pushes against the fixed permanent magnets, pushing the motor around.

In short, brushed motors spin the armature around inside a case with fixed, permanent magnets mounted around the outside of the casing. The brushes are needed to come into contact with the terminals, the switching is done mechanically.

Brushless motors do the opposite; the coils are fixed either to the outer casing or inside the casing while the magnets are spun. This means that the coils can’t be mechanically switched – there is no feedback about the motors position since there are no brushes in contact with the **armature**. This means that they have to be computer-controlled. The electromagnets have to charge in the correct order, and at the correct times, relative to the speed of the spinning armature. This is done by something called an **electronic speed control or ESC.**

I am still wondering about how it knows what pulses to send when – if there is a heavy load on the motor, then the motor is going to take longer to spin up, and so the pulses will fall out of sync without feedback. More reading to be done here.

There are also two different kinds of brushless motors:

**Outrunner** motors have the magnets mounted on the outer casing and the outer casing is spun around the fixed coils in the center of the motor casing, hence the term “Outrunner”.

**Inrunner** motors have the fixed coils mounted to the outer casing and the magnets are mounted to the armature shaft and this spins inside the casing, hence the term “Inrunner”.

[This article](http://rcadvisor.com/inrunner-vs-outrunner-motors) and video explains in detail (once your ears adjust to dude’s accent), [this forum post](http://www.rcpowers.com/community/threads/inrunner-vs-outrunner.5215/#post-39966) is particularly helpful and [this eBay guide](http://reviews.ebay.com/Guide-to-Choosing-Your-First-Brushless-Motor?ugid=10000000017287417) looks promising.

That briefly covers types of motors but they also have different power ratings that I need to get my head around. I need something that can generate enough lift to allow me to support all the sensors/cameras I plan to mount on it. There are formulas that allow for a good calculation of how much lift you can achieve, but that in itself will be another topic. TBC.

