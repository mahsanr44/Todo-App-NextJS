import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const client = await db.connect();
  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`;
    const res = await client.sql`SELECT * FROM Todos`;
    return NextResponse.json({ result: res.rows });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" });
  }
};

export const POST = async (request: NextRequest) => {
  const client = await db.connect();
  const req = await request.json();

  try {
    if (req.task) {
      const res = await client.sql`INSERT INTO Todos(Task) VALUES(${req.task})`;
      return NextResponse.json({
        success: "Task Added Successfully",
        response: res,
      });
    } else {
      return NextResponse.json({ error: "Task Field is Required" });
    }
  } catch (error) {
    return NextResponse.json({ error: "Something Went Wrong" });
  }
};
