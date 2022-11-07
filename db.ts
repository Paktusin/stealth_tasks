import { MongoClient } from "mongodb";
let client: MongoClient;
export let connection: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGOURL);
    global._mongoClientPromise = client.connect();
  }
  connection = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.MONGOURL);
  connection = client.connect();
}
