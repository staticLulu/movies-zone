import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    trendings: [
      {
        id: 1,
        name: "Godzilla x kong: the new empire"
      }
    ]
  })
}
