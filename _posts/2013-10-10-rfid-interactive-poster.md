---
layout: post
bodyclass: blogpost
title:  "RFID Interactive Poster"
date:   2013-10-10
categories: blog
blurb: "For the past few weeks I have been building an RFID driven interactive poster here at TMW."
image: /assets/images/blog/rfid-interactive-poster/rhino-cad-model.jpg
---

<iframe src="//instagram.com/p/fSmQNpnvLF/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

For the past few weeks I have been building an RFID driven interactive poster here at [TMW](http://www.tmw.co.uk/).

It is powered by an Arduino Ethernet and uses two [RFID-RC522](http://www.ebay.co.uk/sch/i.html?_trksid=p3872.m570.l1313.TR10.TRC0.A0.Xrc-522&_nkw=rc-522&_sacat=0&_from=R40) modules to read a user’s Oyster card tag. That tag, along with a timestamp and which option they selected are written via a LAN connection to a SQL database by a PHP script.

The chassis that holds the components is built with mostly 3D printed parts (I love our [Ultimaker](http://www.ultimaker.com/)) designed in Rhino 3D and then assembled using M3 screws.

![Rhino CAD model](/assets/images/blog/rfid-interactive-poster/rhino-cad-model.jpg "Rhino CAD model")


The unit provides feedback via a flash from a 5mm white LED and a ‘boodoop!’ from a small speaker when a ‘tap’ is registered.  A 3mm tri-colour LED indicates server connection status, and a successful database write.
For now, I intended the components to be exposed and visible as a way to encourage dialogue around Arduino and embedded electronics within the agency.

In my eyes the poster is essentially a platform, that can be skinned to perform a variety of functions in a range of contexts. The first application for us is to try and measure the moods of agency staff, generating a dataset that can be given to our Data department for analysis.


![RFID Interactive Poster](/assets/images/blog/rfid-interactive-poster/interactive-poster.jpg "RFID Interactive Poster")

 

##First Test

Today was the first time I was able to test it with users, in its intended scenario and it made for some compelling observations.

###The Interaction Issues

My thinking was basing the form of the RFID touch-points on the form of TFL’s Oyster touch-points would be a good place to start to prompt an RFID enabled interaction. Interestingly I watched as some people tried to push the RFID touch points like buttons. I then started to squint as the chassis flexed under the pressure.

Maybe it fell short of the desired interaction because of the lack of the Oyster card graphics or the fact that it is positioned vertically rather than the horizontal, slightly angled towards the approaching user orientation of a TFL turnstyle.

 
![Oyster Card Touchpoint](/assets/images/blog/rfid-interactive-poster/oyster-touchpoint.jpg "Oyster Card Touchpoint")

One user even thought that not smiling when they pressed the ‘button’ was the reason for receiving no feedback! Like a few other users they thought that the speaker was a camera. Even someone that has sat near me as I have built it thought the main white LED was a camera. Maybe that too is something to do with the orientation or the lack of a fascia to hide the electrical components.

I think a fascia that obscures the components would solve a few of the communication issues and help direct the users expectations; the LEDs would not be visible unless indicating. The speaker would not be visible except for a few holes for the sound to travel through (whose semiotics should connote the presence of a speaker, and therefore prepare the user to accept audible feedback).

 
![Speaker Grill](/assets/images/blog/rfid-interactive-poster/speaker-grill.jpg "Speaker Grill")

 

###The Technical Issues

There were also a few technical issues. The RFID modules are rated at 3.3v but they are both sharing the power from a USB phone charger which is about 5v. This is also being used to drive the Arduino Ethernet, LEDs and speaker; a sizeable power deficit so naturally there is some unpredictable behaviour and a decrease in RFID reading range.

There were some laughs as some users discovered they could only register a tap on the happy option (“It’s rigged!!”). I had not experienced any problems with my card but even I was only able to tap the happy option at one point, until doing a reset on the Arduino. Some users could only register a tap on the sad option :(

<iframe src="//instagram.com/p/fSusWZnvHW/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

Some users found that their Oyster wouldn’t work at all! Much to my dismay, I discovered that the Oyster card spec changed at the end of 2009, and a lot of people are still carrying the old cards. There may be a way to enable reading of the old type cards with my RFID module, so there is more research to be done.

##On Reflection

Essentially this is a prototype that has had a substantial portion of time the time spend on it invested in its construction, yet only today was the first test in the field and already I have witnessed a lot of problems.
These learnings remind me not get lost in the details.
Although what I have learned doesn’t negate the work already done, I realise that rather than spending time crafting a 3D printed chassis using CAD at this early stage of the project, I should focus on the main objective and use quickly cobbled together prototypes to test hypotheses and inform the solution as it develops.