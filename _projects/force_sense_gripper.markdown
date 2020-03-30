---
layout: page
title: Force Sensing Gripper Design for Robotic Surgery
description:
img: /assets/img/RobotGripperForceSensing1.png
---
<strong>Motivation. </strong>Surgery has seen great technological advances through Robotic-assisted Minimally Invasive Surgery, which has improved surgeons performance and reduce learning curves by allowing them to operate in an ergonomic position with simplified hand coordination compared to laparoscopic surgery. Also, it allows surgeons to visualize the interior of the patient in an immersive stereoscopic viewer, use additional supporting tools like retractors, among many other benefits. However, a significant disadvantage of RMIS is that it does not allow the surgeon to directly interact with the patient, thus depriving the surgeon of both kinesthetic and tactile haptic feedback. The main challenge in providing haptic feedback in a RMIS system is placing force sensors at the end-effector since the space is very constrained. Without force feedback the user manipulating the robot would not know how much force it is being applied when gripped onto tissue, when pulling or pushing tissue around. My interest during my first year at Stanford was to see whether Fiber Bragg Gratings (FBG) could be a good sensing solution. FBGs are suitable for the job because they are very small (fibers of 80-150 um diameter), can sense very small mechanical strain changes and are sterilizable. These sensor would be embedded a the tip to have the most direct measurement of interaction forces with tissue.

<div class="img_row">
    <img class="col two left" src="{{ site.baseurl }}/assets/img/RobotGripperForceSensing1.png" alt="system overview of sensorized forceps for surgical robotcs" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/ForcepsCAD2-01.png" alt="attachedment points for sensors on forceps" title="example image"/>
</div>
<div class="img_row">
    <div class="col two left"> Figure 1. Sensorized gripper shown within the surgical robotic system. </div>
    <div class="col one left"> Figure 2. Forceps design and placement location of FBG sensors. </div>
</div>

You can also put regular text between your rows of images. Say you wanted to write a little bit about your project before you posted the rest of the images. You describe how you toiled, sweated, *bled* for your project, and then.... you reveal it's glory in the next row of images.


<div class="img_row">
    <img class="col two left" src="{{ site.baseurl }}/assets/img/6.jpg" alt="" title="example image"/>
    <img class="col one left" src="{{ site.baseurl }}/assets/img/11.jpg" alt="" title="example image"/>
</div>
<div class="col three caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


<br/><br/>


The code is simple. Just add a col class to your image, and another class specifying the width: one, two, or three columns wide. Here's the code for the last row of images above:

<div class="img_row">
    <img class="col two left" src="/img/6.jpg"/>
    <img class="col one left" src="/img/11.jpg"/>
</div>
