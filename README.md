# Famepick Coding Challenge

## Introduction

Thanks for your interest in Famepick! Before we proceed to on-site interviews, we ask the candidates to submit a coding assignment. The coding challenge is
a foundational piece of our process and it's referenced later in our process during the technical 
interviews.

For an experienced web developer, the coding challenge should take around 2 hours to 
complete.

If at any point you have questions concerning the coding challenge and/or interview process, please
do not hesitate to email dev@famepick.com.

## Coding Challenge

The coding challenge revolves around building a todo list. Tasks belong to groups and can have
dependencies on one another (i.e. if task X depends on task Y & Z, task X cannot be completed until
task Y & Task Z are completed). The challenge includes 2 components:

* Build frontend logic and React-based UI 
* Design data model for the database

### Build React UI

The UI consists of 2 screens:

* **Overview Screen**: Displays a list of all the task groups along with their completion status. Clicking on 
  a group should render the detail screen. Please add a RESET button at the bottom of the view, so everyone can test the app without reloading

* **Detail Screen**: Displays a list of all the tasks in the selected group and allows the user to Toggle 
  the completion status of unlocked tasks.

The screens should look like this:

![screen design](https://user-images.githubusercontent.com/314351/56453206-d1ec2580-62f3-11e9-83d7-67aff2e1deef.png)

The data you need is available at _public/data.json_ and can 
be loaded from http://localhost:3000/data.json. SVG assets for the icons used in the design 
also live in _public/_ and can be loaded similarly.

Some things to keep in mind:

* Locked tasks cannot have their completion status toggled
* Tasks remain locked until all of their dependencies have been completed
* Your implementation should resemble the above UI designs and have high UI fidelity.
* **Please don't introduce any new dependencies**, React and javaScript should have everything you need natively to complete
  the challenge
* We value well structured code and clean coding style that follows best practices

### Design Database Model

* Design the schema of data model in noSQL DB to store the task data and the task dependency data. 
* The data model should be in favor of the following operations: Create Task, Get Task List, Update Task Status... 
* Please see the *dbSchemaExample.json* as 
example, and do not hesitate to create one or more table if you think it is necessary, you can create another json file name *{tableName}.json*.

## Getting Started

To get started, install the dependencies and fire up the app:

```
npm install
npm start
```

At this point, the app should be running in development mode and any local modifications you make
will be automatically detected and result in the app to reload.

You should only need to add/modify code in the _src/_ directory.

## Submission

To submit your coding challenge, remove the node_modules and zip the whole directory, then name the zip file to your first and last name.


Email the zip file to jay@famepick.com. We will do our 
best to review and respond to submissions within 1-2 business days.

Happy Coding!
