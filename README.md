## Introduction
This repo allocates seats in a cinema.

## Key Features
The cinema consists of a total of 15 seats which comprise of three rows named A to C and consisting
of 5 seats per row.  The first seat in the first row starts from the bottom left of the seating plan 
and is called A1.  The seats are allocated left to right, starting from row A and ending on row C and 
seat C5. 

## Procedure

Each customer is allowed to purchase a limit of 1 to 3 seats. If the end of a row is encountered for 
a customer's seat purchase, then a new seat will be allocated from the next row starting at first seat 
on that row, eg. 3 tickets requested, A4, A5, B1 allocated.

If all seats requested cannot be fullfilled if the cinema reached a maximumcof 15 seats, then a message 
will be sent and the program will not allocate any seats for the customer. 

## Pre-Requisites

* Node installed(version 16.13.0 is the LTS version at the time of writing)

## Assumptions

1.  The cinema is empty when you start.
2.  Only a maximum of 3 tickets allowed.
3.  The seats are allocated from row A to Row C
4.  Seats allocated sequentially, i.e. A1, A2, A3 etc.

## How to Get Started

1. Fork this repo to your GitHub and then clone the forked version of this repo to your local machine.

## Running the unit tests

You can run the unit tests in your terminal by running the following:

`npm install`

Followed by:

`npm test`