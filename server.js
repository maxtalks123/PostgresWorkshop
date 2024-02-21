import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());

import pg from "pg";
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

const allRowResult = await db.query(`SELECT * FROM postgresexampletable`);

const singleRowResult = await db.query("SELECT * FROM posts WHERE id = $1", [
  id,
]);

const newRowResult = await db.query(
  "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
  [username, description]
);

const updateRowResult = await db.query(
  "UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *",
  [title, content, id]
);

const deleteResult = await db.query("DELETE FROM rows WHERE id = $1", [id]);
