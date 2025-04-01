import { Suspense } from "react";

import { FilterButtonsList } from "../FilterButtonsList/FilterButtonsList";
import { FilterSkills } from "../FilterSkills/FilterSkills";
import { salaryArr } from "../../data/salaryArr";
import { filterCategoryArr } from "../../data/filterCategoryArr";
import styles from "./FilterBox.module.css";

export const FilterBox = () => {
  return (
    <div className={styles.box}>
      <Suspense>
        <FilterButtonsList title={"Category"} dataArr={filterCategoryArr} />
        <FilterSkills />
        <FilterButtonsList title={"Salary"} dataArr={salaryArr} />
      </Suspense>
    </div>
  );
};
