import getJoke from "@/utils/getJoke";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic"


export async function GET() {
    const jokes = await getJoke()
  
    return NextResponse.json(jokes)
}