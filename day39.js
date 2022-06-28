// Design database for Zen class programme

// inserting documents inside the users collection
db.users.insertMany([
  {
    "user-id": 1,
    "name": "user1",
    "email": "user1@gmail.com",
    "mentor-id": 1,
  },
  {
    "user-id": 2,
    "name": "user2",
    "email": "user2@gmail.com",
    "mentor-id": 1,
  },
  {
    "user-id": 3,
    "name": "user3",
    "email": "user3@gmail.com",
   " mentor-id": 1,
  },
  {
    "user-id": 4,
    "name": "user4",
    "email": "user4@gmail.com",
    "mentor-id": 2,
  },
  {
    "user-id": 5,
    "name": "user5",
    "email": "user5@gmail.com",
    "mentor-id": 2,
  },
]);
// inserting documents inside the codekata collection
db.codekata.insertMany([
  {
    "user-id": 1,
    "no_of_problems_solved": 10,
  },
  {
    "user-id": 2,
    "no_of_problems_solved": 20,
  },
  {
    "user-id": 3,
    "no_of_problems_solved": 30,
  },
  {
    "user-id": 4,
    "no_of_problems_solved": 40,
  },
  {
    "user-id": 5,
    "no_of_problems_solved": 50,
  },
]);

// inserting documents inside the attendance collection

db.attendance.insertMany([
  {
    "user-id": 1,
    "topic_id": 1,
    "present": true,
  },
  {
    "user-id": 2,
    "topic_id": 2,
   "present": true,
  },
  {
    "user-id": 3,
    "topic_id": 3,
    "present": false,
  },
  {
    "user-id": 4,
    "topic_id": 4,
    "present": false,
  },
  {
    "user-id": 5,
    "topic_id": 5,
    "present": false,
  },
]);

// inserting documents inside the topics collection
db.topics.insertMany([
  {
    "topic_id": 1,
    "topic": "HTML",
    "topic_date": new Date("2021-10-01"),
  },
  {
    "topic_id": 2,
    "topic": "CSS",
    "topic_date": new Date("2021-10-10"),
  },
  {
    "topic_id": 3,
    "topic": "Javascript",
    "topic_date": new Date("2021-10-15"),
  },
  {
    "topic_id": 4,
    "topic": "React",
    "topic_date": new Date("2021-10-20"),
  },
  {
    "topic_id": 5,
    "topic": "NodeJs",
    "topic_date": new Date("2021-10-25"),
  },
]);

// inserting documents inside the tasks collection
db.tasks.insertMany([
  {
    "task_id": 1,
    'topic_id': 1,
    "user-id": 1,
    "task": "HTML task",
    "due_date": new Date("2021-10-05"),
    "submitted": true,
  },
  {
    "task_id": 2,
    'topic_id': 2,
    "user-id": 2,
    "task": "CSS task",
    "due_date": new Date("2021-10-15"),
    "submitted": true,
  },
  {
    "task_id": 3,
    "topic_id": 3,
    "user-id": 3,
    "task": "Javascript task",
    "due_date": new Date("2021-10-20"),
    "submitted": false,
  },
  {
    "task_id": 4,
    "topic_id": 4,
    "user-id": 4,
    "task": "React task",
    "due_date": new Date("2021-10-25"),
    "submitted": false,
  },
  {
    "task_id": 5,
    "topic_id": 5,
    "user-id": 5,
    "task": "Node task",
    "due_date": new Date("2021-10-30"),
    'submitted': false,
  },
]);

// inserting documents inside the companydrives collection
db.company_drives.insertMany([
  {
    "user-id": 1,
    "drive_date": new Date("2021-10-05"),
    "company_name": "Google",
  },
  {
    "user-id": 1,
    "drive_date": new Date("2021-10-10"),
    "company_name": "Amazon",
  },
  {
    "user-id": 2,
    "drive_date": new Date("2021-10-20"),
    "company_name": "Walmart",
  },
  {
    "user-id": 3,
    "drive_date": new Date("2021-10-15"),
    "company_name": "Zoho",
  },
  {
    "user-id": 4,
    "drive_date": new Date("2021-10-30"),
    "company_name": "Dell",
  },
]);

// inserting documents inside the mentors collection
db.mentors.insertMany([
  {
    "mentor-id": 1,
    "mentor_name": "mentor1",
    "mentor_email": "mentor1@gmail.com",
  },
  {
    "mentor-id": 2,
    "mentor_name": "mentor2",
    "mentor_email": "mentor2@gmail.com",
  },
  {
    "mentor-id": 3,
    "mentor_name": "mentor3",
    "mentor_email": "mentor3@gmail.com",
  },
  {
    "mentor-id": 4,
    "mentor_name": "mentor4",
    "mentor_email": "mentor4@gmail.com",
  },
  {
    "mentor-id": 5,
    "mentor_name": "mentor5",
    "mentor_email": "mentor5@gmail.com",
  },
]);

//1. Find all the topics and tasks which are thought in the month of Octobernl;0-0Zdfghjk;

db.topics
  .find({
    $and: [
      { topic_date: { $gte: new Date("2021-10-01") } },
      { topic_date: { $lte: new Date("2021-10-31") } },
    ],
  })
  .pretty();

db.tasks
  .find({
    $and: [
      { due_date: { $gte: new Date("2021-10-01") } },
      { due_date: { $lte: new Date("2021-10-31") } },
    ],
  })
  .pretty();

//2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives
  .find({
    $and: [
      { drive_date: { $lte: new Date("2021-10-31") } },
      { drive_date: { $gte: new Date("2021-10-15") } },
    ],
  })
  .pretty();

//3. Find all the company drives and students who are appeared for the placement.

db.users
  .aggregate([
    {
      $lookup: {
        from: "company_drives",
        localField: "user-id",
        foreignField: "user-id",
        as: "company_drives",
      },
    },
    { $project: { "company_drives.drive_date": 1 } },
  ])
  .pretty();

//4. Find the number of problems solved by the user in codekata

db.codekata.find({}).pretty();

//5. Find all the mentors with who has the mentee's count more than 15

db.users
  .aggregate([
    {
      $lookup: {
        from: "mentors",
        localField: "mentor-id",
        foreignField: "mentor-id",
        as: "mentors",
      },
    },
    { $group: { _id: "$mentor-id", mentor_count: { $count: {} } } },
    { $project: { mentor_count: 1, _id: 0 } },
    { $match: { mentor_count: { $gt: 15 } } },
  ])
  .pretty();

//6. Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.tasks
  .aggregate([
    {
      $lookup: {
        from: "attendance",
        localField: "userid",
        foreignField: "userid",
        as: "attendance",
      },
    },
    {
      $match: {
        $and: [{ submitted: false }, { "attendance.attended": false }],
      },
    },
  ])
  .pretty();
