---
layout: post
bodyclass: blogpost
title:  "Dot"
subtitle: "An Ambient Display Lamp"
date:   2014-03-28
categories: blog
blurb: "Imagining the potential for a wall-mounted, Internet-connected, LED, dot-matrix display in the living area of a home."
image: /assets/images/blog/dot/dot-ambient-display-in-living-room.jpg
---

This idea came about through conversations between myself and [Tom Van Schelven](http://www.van-schelven.com/). It is an imagining of the potential for a wall-mounted, Internet-connected, LED, dot-matrix display in the living area of a home.

Dot learns about the context in which it lives by tapping into the APIs of cloud-based services that are in-turn informed by the sensors of the smartphones of those around it. Using algorithms Dot is able to present information relevant to context and aims of its users.

![Dot ambient display on a living room wall](/assets/images/blog/dot/dot-ambient-display-in-living-room.jpg "Dot ambient display on a living room wall")



##Potential Applications

###Helpful Reminders

Once Dot understands the habits of user’s in a home it can use data sourced from the Internet to offer intelligent messaging to the viewer such as a reminder to take your umbrella because rain is forecast.

###Cultivating Good Habits

Sick of waking up feeling tired every day? Then make time for sleep. What if something told you that it was time to climb the wooden stairs to Bedfordshire? Clocks are consistent enough in their appearance and behaviour that they too easily blend into the wallpaper. A bold change by an ambient display, whilst in the viewers eyeline might provide the motivation a user needs to get to bed at a reasonable time, even reminding them 10 minutes before the set bedtime.

![An ambient display promps the viewer to get to bed at 11:30](/assets/images/blog/dot/cultivating-good-habits.png "An ambient display promps the viewer to get to bed at 11:30")


###Sci-fi Personal Greetings

Home automation is now a reality and more and more home-automation systems are now in existence. The idea of the home as an intelligent robot lends well to this scenario. There are many ways to detect when a user arrives home, or gets up in the morning. An ambient display could communicate personalised greetings, greetings set by loved ones via the web or notes left by another person living in the house.

![An ambient display greets the viewer 'Good Morning' and displays the time](/assets/images/blog/dot/personal-greeting-messages.png "An ambient display greets the viewer 'Good Morning' and displays the time")

###A Light Source

Dot aims to be more than just another screen. It wants to be a light source for the home. It is dimmable via an app on the user’s smartphone and can run different programs of lighting, eg. a slow pulsing of random blocks of light could create a candle, or light on water effect. A user could set it up to dim as the night draws on, mirroring the sun’s setting as a way to prepare them for sleep.

![When not displaying any messaging Dot acts as a light source](/assets/images/blog/dot/light-source.png "When not displaying any messaging Dot acts as a light source")

###Multiplayer games

Using computers, tablets or smartphones, multiple users could use Dot to play simple games of the O&X’s and Hangman variety.

##Design

Dot is easily made using digital manufacturing techniques. Laser cutting forms the bulk of the production process, and the assembly process for the prototype is easy – apart from all the soldering. In this proposed display there are 51×11 pixels. That’s 561 individual LEDs!

##Structural

In the prototype I will lasercut an array of holes in a sheet of 3mm HIPS (High Impact Polystyrene) tight enough to hold the LEDs securely. I will then stand these LEDs slightly off from the 3mm final white acrylic fascia as to defuse the LED slightly. The defused LED is what will ultimately form the pixel that the viewer sees.

To stop light bleeding out of the side I will use a beading of some description (yet to be confirmed… just humour me!)

The LED array assembly could be optimised by using strips that are individually addressable or by creating PCBs of LEDs that chain together.

##Power Requirements

As I have found with previous projects that involve LEDs, power requirements can soon mount up. I once helped out on a project that demanded around 10 Amps! You don’t want an ambient display that causes a not-so ambient increase in electricity usage in your home, so what is the solution?

Persistence of vision. By exploiting the relatively slow ‘refresh rate’ of our eyes we can cycle an LED on and off very quickly and have it appear consistently on, saving power usage.

##Connectivity

Dot might gain its connectivity by a Bluetooth Low-energy connection to a phone. This would allow it to sense a user’s presence and even distance directly rather than relying on a mediating cloud-based GPS sensing app (such as Google Maps) running on the user’s phone. The downside to this is that the user must run Bluetooth on their phone and although the battery usage of Bluetooth has improved recently it still does make a noticeable difference.
To be investigated.

##LED Control

The prototype would be controlled via a BLE connected Arduino.
The ability to individually control each LED will require shift-registering chips. There will be some speed issues with the Arduino not being fast enough to write to each LED at the required rate so some sort of driver will need to be investigated.

##Modularity

Dot will be powered by a software system with an API that allows developers to produce new applications that users can install via the Dot configuration.

##When will it be built?

Someday. Let me know if you want to collaborate.