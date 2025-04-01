import { Suspense } from "react";
import qs from "qs";

import { fetchCandidates } from "../actions/fetchCandidates";
import { Search } from "../ui/components/Search/Search";
import { CategoryList } from "../ui/components/CategoryList/CategoryList";
import { CandidatesQuantyti } from "../ui/components/CandidatesQuantyti/CandidatesQuantyti";

import styles from "./page.module.css";

type HomeProps = {
  searchParams: Record<string, string>;
};

export default async function Home({ searchParams }: HomeProps) {
  const queryString = qs.stringify(searchParams, {
    arrayFormat: "brackets",
    encode: false,
  });

  const { quantityCandidates } = await fetchCandidates(queryString);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Suspense>
          <Search />
        </Suspense>
        <CandidatesQuantyti quantyti={quantityCandidates} />
        <CategoryList />
      </div>
    </section>
  );
}
