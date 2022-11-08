const { MongoClient } = require("mongodb");
const config = require("dotenv").config({ path: ".env.local" }).parsed;

const statuses = ["active", "new", "closed", "resolved"];
users = [
  {
    email: "Rick@mail.com",
    name: "Rick",
    image: "https://avatarfiles.alphacoders.com/128/thumb-128984.png",
  },
  {
    email: "morty@mail.com",
    name: "Morty",
    image: "https://avatarfiles.alphacoders.com/160/thumb-160477.png",
  },
];

function rndEl() {
  return this[Math.floor(Math.random() * this.length)];
}

tasks = Array(100)
  .fill(null)
  .map((_, index) => ({
    assignee: [rndEl.call(users).email],
    title: "Test task",
    description: "",
    related: [],
    status: rndEl.call(statuses),
    createdAt: new Date().valueOf() + index * 60 * 36000,
  }));

async function main() {
  const connection = await new MongoClient(config.MONGOURL).connect();
  await connection.db("test").collection("users").insertMany(users);
  await connection.db("test").collection("tasks").insertMany(tasks);
  console.log("done");
}

main();
