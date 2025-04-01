"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import qs from "qs";
import { parseQueryString } from "../../utils/parseQueryString";
import styles from "./FilterButtonsList.module.css";

type FilterButtonsListProps = {
  title: string;
  dataArr: string[];
};

export const FilterButtonsList = ({
  title,
  dataArr,
}: FilterButtonsListProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = parseQueryString(String(searchParams)) as Record<
    string,
    string[]
  >;

  const key = title.toLowerCase();
  const queryButtonsArray = queryParams?.[key] || [];

  const handleButtonChange = (buttonName: string) => {
    let updatedButtonsArr;

    if (queryButtonsArray?.includes(buttonName)) {
      updatedButtonsArr = queryButtonsArray.filter(
        (item) => item !== buttonName
      );
    } else {
      updatedButtonsArr = [...queryButtonsArray, buttonName];
    }

    const updatedQueryParams = {
      ...queryParams,
      [key]: updatedButtonsArr,
    };

    const queryString = qs.stringify(updatedQueryParams, {
      arrayFormat: "brackets",
      encode: false,
    });

    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {dataArr.map((item: string, idx: number) => (
          <li key={idx} className={styles.list_items}>
            <button
              type="button"
              className={`${styles.button} ${
                queryButtonsArray?.includes(item)
                  ? styles.selected
                  : styles.no_selected
              }`}
              onClick={() => {
                handleButtonChange(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
