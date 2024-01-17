import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS FOR SINGLE POST
export const GET = async (req) => {
  const {searchParams} = new URL(req.url)
  const postSlug = searchParams.get("postSlug")

  const query = {
    where: {
      ...(postSlug && {postSlug})
    },
    include: {
      user: true
    }
  };
  try {
    const comments = await prisma.comment.findMany(query)

    return new NextResponse(JSON.stringify({ comments }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// POST SINGLE COMMENT
export const POST = async (req) => {
  const session = await getAuthSession(); 

  if(!session){
    return new NextResponse(JSON.stringify({ message: "Not Authenticated"}, { status: 401 }));
  }
  try {
    const body = await req.json()
    const comment = await prisma.comment.create({
      data:{...body,userEmail:session.user.email}
    })

    return new NextResponse(JSON.stringify({ comment }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};