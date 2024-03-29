import { db, Todo, newTodo, todoTable } from "./../../lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {

  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`;
    const res = await db.select().from(todoTable);
    return NextResponse.json({ data: res });

  }
   catch (error) {
    return NextResponse.json({ error: error });
  }
};

export const POST = async (request: NextRequest) => {

  const req = await request.json();

  try {
    if (req.task) {
      const res = await db.insert(todoTable).values({ task: req.task }).returning();
      return NextResponse.json({
        success: "Task Added Successfully",
        data: res
      });
    } 
    else {
      return NextResponse.json({ error: "Task Field is Required" });
    }
  } 
  catch (error) {
    return NextResponse.json({ error: "Something Went Wrong" });
  }
};


export const PUT = async (request: NextRequest) => {

  const req = await request.json();

  try {
    if (req.id) {
      const res = await db.update(todoTable).set({task:req.task}).where(eq(todoTable.id, req.id)).returning({status:todoTable.task});
      return NextResponse.json({
        success: "Task Updated Successfully",
        data: res
      });
    } 
    else {
      return NextResponse.json({ error: "Task Field is Required" });
    }
  } 
  catch (error) {
    return NextResponse.json({ error: "Something Went Wrong" });
  }
};


// export const DELETE= async (request:NextRequest)=>{
//   const req =await request.json();
//   console.log(req +"OOOOOO")
//   try {
//     if (req.id) {
//     db.delete(todoTable).where(eq(req.id,todoTable.id)).returning({status:todoTable.task});
//     return NextResponse.json({ success: `Record of id:deleted successfully` });
//   }else
//     {
//       return NextResponse.json({ error: "Id Field is Required" });
//     }
//   } catch (error) {
//     return NextResponse.json({ error: "Something Went Wrong" });
//   }
// }
