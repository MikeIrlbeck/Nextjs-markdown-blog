---
title: 'What is a Computer Processor?'
date: '2023-12-29'
updatedDate: ''
image: computer-chip.jpeg
excerpt: A computer processor is an essential piece of the computer system. This intricate component has many interesting parts that will be examined here.
topic: 'computer-architecture'
readTime: '10 min'
---

## Introduction

Imagine a you are in with your family in the kitchen. It is your task to cook a **enormous** Thanksgiving meal. Here are your tasks:

- cook a turkey
- mash your potatoes
- bake a pie
- slice bread
- set the table
- pray
- eat all the food
- cleanup all the dishes

Now if you are alone, you must go through each task one by one and in a sensible sequence.

But how wil your workflow change if you have multiple people helping you?
It will change drastically.

Consider the following order
person 1: drives to the store
person 2: warms up the oven

person 1: buys the ingredients
person 2: starts melting the butter

person 1:

As you can see, the tasks can be divided amongst the people helping out. Here are a few key principles:

- some steps require others to occur before them
- some steps can be performed at the same time (in parllel)

## Processor Analogy

A processor is a piece of hardware that produces an output for an input.

What is hardware?
Hardware is the physical computer chip.

What is a computer chip?
A chip is an electrical component that produces an output for an input.

What is an input?
A physical input could be a single wire carrying 5 volts and 1 amp (5 Watts of power).

What is an output?
Similar to the input, the output wire could 'carry' a certain charge.

Let's jump back up to a computer chip.
One example of a computer chip is the ALU (arthimetic logic unit) chip. One function that this chip can perform is adding such as

```bash
1 + 2 = 3
```

We won't examine the details here, but different electrical components are wired together to perform the operation above. The number one and two can be represented as a number of wires with different charges, these charges are then manipulated to be added together and then the output wires are set to represent the number three.

---

Before examining the processor, we need to discuss what kind of inputs the processor handles.

The processor can handle machine instructions. These are instructions are tailored to the specific capabilities of the computer and its computer chips. Most computer chips support addition and subtraction, but not all support multiplication and division. Therefore, some machine languages have a **word** for divide (DIV) while others do not.

Example of MIPs machine instructions:

```mips
ADD R3 R2 R1
SUB R6 R5 R3
```

Where do these machine instructions come from?
The device you are using right now to read these words should seem like an intuitive device to use. You have different applications, a web browser, YouTube, Instagram, a camera. When you want to take a picture, have you ever stopped to ask, how does that work?
Here is my high-level understanding of how your phone takes a picture.

1. you press the camera application
2. the screen shows what your camera sees
3. you press the 'capture' button

But how does that work?
Each high level action you perform on your phone triggers 10s, 100s, 1,000s, 10,000s, 100,000s, 1,000,000s, and potentially even more machine instructions.
Every action that you perform on your phone/computer must be distilled into simple instructions that the hardware can perform.

---

Now we are ready to talk about the processor, which is a piece of hardware that produces an output for an input.

And we are now ready to tie this back into our Thanksgiving Dinner.

The processor is like the chef of the kitchen, which needs to organize all the people, and all the ingredients, and the equipment (stove, microwave, etc.).
The chef needs to ensure that the turkey is purchased from the store and brought into the kitchen prior to the cooking of the turkey.

While the turkey is being dealt with, the mashed potatoes can be chopped and mashing and cooked at the same time.

This is analogous to how the processor deals with thousands of machine instructions and prioritizes them.

Let me know your thoughts, **@Mya**
