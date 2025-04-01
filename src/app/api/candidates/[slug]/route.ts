import { NextResponse, NextRequest } from "next/server";

import { candidatesArr } from "@/app/ui/data/candidatesArr";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;

  const candidateId = Number(slug?.split("-").pop());

  try {
    const candidateData = candidatesArr.filter(
      (candidate) => candidate.id === candidateId
    )[0];

    return NextResponse.json(candidateData, { status: 200 });
  } catch (error) {
    console.error("Catch block error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
