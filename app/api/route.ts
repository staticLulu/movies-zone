import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hello: "helloworld"
  })
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    data,
  })
}