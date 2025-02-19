---
date: "2023-12-29"
excerpt: A computer processor is an essential piece of the computer system. This intricate component has many interesting parts that will be examined here.
image: computer-chip.jpeg
readTime: 10 min
runme:
  id: 01HN8GB3THS327MMW6PB2EJPQP
  version: v2.2
title: What is a Computer Processor?
topic: computer-architecture
updatedDate: ""
---

## Introduction

Imagine you are in the kitchen with your family and it is your task to cook a **enormous** meal. Here are your tasks:

- cook a turkey
- mash your potatoes
- bake a pie
- slice bread
- set the table
- pray
- eat all the food
- cleanup all the dishes

Now if you are alone, you must go through each task one by one. Consider creating mashed potatoes:

1. skin the potatoes
2. cut the potatoes
3. boil the water for the potatoes
4. place potatoes in boiling water
5. mash the potatoes

But how will your workflow change if you have your grandma helping you? It will change drastically.

After skinning each potato, you could pass it to your grandma who can start cutting the potatoes while you begin skinning the next potato. In processing, this is called _pipelining_. All modern processors push instructions through different stages of the pipeline. The main stages that instructions pass through are fetch, decode, math operations, memory operations, and write results.

Next, while you and your grandma are preparing the mashed potatoes, your grandpa could be cooking the turkey. This introduces another concept in computing known as _parallelism_, tasks that can be performed independently of one another. Many modern processors support parallelism via multiple cores.

Of course, prior to making mashed potatoes you must get the potatoes from the store. As intuitive as this appears to us, a processor needs to keep this in mind when ordering instructions as some instructions must be performed prior to others. These are known as _data dependencies_.

Prior to serving the food, you are seasoning the food with spices. To get spices, you must walk outside of the kitchen and into the pantry. Instead of walking back and forth each time you want to add some pepper, you bring the pepper shaker with you into the kitchen because you will be using it frequently. This introduces the concept of _locality_, tasks that are performed have a high likelihood of being performed again. In processing, this is similar to how data currently being used is cached or saved nearby as it is likely to be used again.

But how do you know how much food to make? Since you are unable to know the future with perfect certainty, you must make a prediction. Similarly, the processor _predicts_ the future by learning patterns which allows it to begin fetching 'spices' or data prior to the 'recipe' or instruction needing them.

As you can see, the tasks can be divided amongst the people helping out. Here are a few key principles:

- some steps require others to occur before them
- some steps can be performed at the same time (in parllel)

## Breaking Down a Processor

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

```bash {"id":"01HN8GB3THS327MMW6PAB0TKA9"}
1 + 2 = 3
```

We won't examine the details here, but different electrical components are wired together to perform the operation above. The number one and two can be represented as a number of wires with different charges, these charges are then manipulated to be added together and then the output wires are set to represent the number three.

---

Before examining the processor, we need to discuss what kind of inputs the processor handles.

The processor can handle machine instructions. These instructions are tailored to the specific capabilities of the computer and its computer chips. Most computer chips support addition and subtraction, but not all support multiplication and division. Therefore, some machine languages have a **word** for divide (DIV) while others do not.

Example of MIPs machine instructions:

```mips {"id":"01HN8GB3THS327MMW6PADJ9YR4"}
ADD R3 R2 R1
SUB R6 R5 R3
```

Where do these machine instructions come from?

The device you are using right now to read these words should seem like an intuitive device to use. You have different applications: a web browser, YouTube, Instagram, a camera. 

For those non-photographers out there, here is how to take a picture:

1. you press the camera application
2. the screen shows what your camera sees
3. you press the 'capture' button

Have you ever stopped to ask, how does that work?

Each high level action you perform on your phone triggers 10s, 100s, 1,000s, 10,000s, 100,000s, 1,000,000s, and potentially even more machine instructions.

**Takeaway:** Every action that you perform on your phone/computer must be distilled into simple instructions that the hardware can perform.

## Conclusion

As we have just seen, a processor is a piece of hardware that produces an output for an input.

In relation to our Thanksgiving dinner, the processor is the entire family partaking in cooking. The dinner receipe is decomposed into small steps that one person can perform. The ingredients are the inputs that must be gathered (fetched), prepared (decoded), cooked and combined (math operations), put aside for a later step (memory operations), and finally presented to be eaten (written). All of these steps come together to yield a specific output - a delicious meal.

Thank you for reading.
