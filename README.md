# Node.js Express API Curriculum

> Node.js is a trademark of Joyent, Inc. and is used with its permission. Mongo and MongoDB, are registered trademarks of MongoDB, Inc and are used in accordance to its [Trademark Usage Guidelines](https://www.mongodb.com/legal/trademark-usage-guidelines). This curriculum not endorsed by or affiliated with Joyent or MongoDB.

## Topics Covered

This course is designed to give a very cursory overview of Node.js and building a simple API server that can Create, Read, Update, and Delete different entries via the [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architectural pattern. The curriculum is designed around MongoDB, a [document-oriented database](https://en.wikipedia.org/wiki/Document-oriented_database) platform that stores unstructured, schemaless data in [BSON](http://bsonspec.org/) format. This course does *not* cover JavaScript syntax, style, or architectural patterns and assumes that you already have a basic understanding of basic UNIX-like commands such as `cd` and `ls`.

This course is written in [ECMAScript 6](http://es6-features.org) compliant JavaScript and uses modern features such as arrow functions, object destructuring and template literals.

## Prerequisites

In order to run the exercieses written in this course, please install the following software:

- [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript Engine (at the time of writing, this course is built against v11.10.0)
- [Git](https://git-scm.com/downloads) - Version control software for cloning this repository to run examples
- [Postman](https://www.getpostman.com) - An API development tool for quickly testing HTTP requests and responses
- Optional: [Visual Studio Code](https://code.visualstudio.com) - Free, open source code editing software with built-in terminal and GIT controls

## Directory Structure

This course is split up into chapters that will cover the different topics. Here is an overview of how the course materials are laid out:

```
.
├── ...
├── Chapter 1       # Chapter directory
│   ├── examples    # Running examples of chapter materials
│   └── README.md   # Written materials
├── ...
```

## Getting Started

To get up and running with this course, please clone this repository by running `git clone https://github.com/savvy-coders/nodejs-express-api-curriculum.git`. Once cloned, `cd` into the root directory and install all the needed dependencies by running `npm install`.

## Table of Contents

* [Chapter 1: Hello world!](Chapter_1)
* [Chapter 2: Setting Up Mongoose & Connecting to MongoDB](Chapter_2)
