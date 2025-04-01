"use client";

import { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import qs from "qs";
import { parseQueryString } from "../../utils/parseQueryString";
import { skillsArr } from "../../data/skillsArr";
import { SkillsCheckboxList } from "../SkillsCheckboxList/SkillsCheckboxList";
import styles from "./FilterSkills.module.css";

export const FilterSkills = () => {
  const [inputValueSearch, setInputValueSearch] = useState<string>("");

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const queryParams = parseQueryString(String(searchParams)) as Record<
    string,
    string[]
  >;

  const querySkillsArray = queryParams?.skills;
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    querySkillsArray || []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValueSearch(e.target.value);
  };

  const searchSkills = () => {
    const normalised = inputValueSearch.toLowerCase();
    return skillsArr
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((skill) => skill.name.toLowerCase().includes(normalised));
  };

  const searchSkillsArr = searchSkills();

  const handleCheckboxChange = (skillsName: string) => {
    let updatedSkillsArr;

    if (selectedSkills.includes(skillsName)) {
      updatedSkillsArr = selectedSkills.filter((item) => item !== skillsName);
    } else {
      updatedSkillsArr = [...selectedSkills, skillsName];
    }
    setSelectedSkills(updatedSkillsArr);

    const updatedQueryParams = {
      ...queryParams,
      skills: updatedSkillsArr,
    };

    const queryString = qs.stringify(updatedQueryParams, {
      arrayFormat: "brackets",
      encode: false,
    });

    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <div>
      <h2 className={styles.title}>Skills</h2>
      <input
        type="text"
        name="search-skills"
        placeholder="Search"
        className={styles.search_skills}
        value={inputValueSearch}
        onChange={handleInputChange}
      />
      <SkillsCheckboxList
        searchSkillsArr={searchSkillsArr}
        handleCheckboxChange={handleCheckboxChange}
        querySkillsArray={querySkillsArray}
      />
    </div>
  );
};
