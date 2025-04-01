import { NextResponse, NextRequest } from "next/server";
import { parseQueryString } from "@/app/ui/utils/parseQueryString";

import { candidatesArr } from "@/app/ui/data/candidatesArr";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.toString();
  const queryParams = parseQueryString(query) as Record<string, string[]>;

  const querySearchPosition = queryParams.search?.[0] || "";
  const queryCategoryArr = queryParams.category || [];
  const querySkillsArray = queryParams.skills || [];
  const querySalaryArr = queryParams.salary || [];

  try {
    const searchNormalised = querySearchPosition?.toLowerCase();
    const filteredCandidates = candidatesArr.filter((candidate) => {
      const candidatePosition = candidate.name
        ?.toLowerCase()
        .includes(searchNormalised);
      const candidateCategory = queryCategoryArr?.length
        ? queryCategoryArr.some(
            (queryCategory: string) => candidate.category === queryCategory
          )
        : true;
      const candidateSalary = querySalaryArr?.length
        ? querySalaryArr.some(
            (querySalary: string) => candidate.price === querySalary
          )
        : true;
      const candidateSkills = querySkillsArray?.length
        ? querySkillsArray.some((querySkills: string) =>
            candidate.skills.some((skill) => skill === querySkills)
          )
        : true;

      return (
        candidatePosition &&
        candidateCategory &&
        candidateSalary &&
        candidateSkills
      );
    });

    const quantityCandidates = filteredCandidates.length;

    return NextResponse.json(
      { filteredCandidates, quantityCandidates },
      { status: 200 }
    );
  } catch (error) {
    console.error("Catch block error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
