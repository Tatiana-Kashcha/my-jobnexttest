"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import qs from "qs";
import { parseQueryString } from "../../utils/parseQueryString";
import styles from "./Search.module.css";
import iconSearch from "../../icons/icon search.svg";

export const Search: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryParams = parseQueryString(String(searchParams)) as Record<
    string,
    string[]
  >;
  const querySearch = queryParams?.search;
  const [inputValue, setInputValue] = useState<string[]>(querySearch || []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue([e.target.value.trim()]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue[0]) {
      const updatedQueryParams = {
        search: inputValue,
      };

      const queryString = qs.stringify(updatedQueryParams, {
        arrayFormat: "brackets",
        encode: false,
      });
      router.push(`/candidates?${queryString}`);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Search <Image src={iconSearch} alt="icon search" />
      </button>
    </form>
  );
};
