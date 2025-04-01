import qs from "qs";
import { fetchCandidates } from "@/app/actions/fetchCandidates";

import { CandidatesList } from "@/app/ui/components/CandidatesList/CandidatesList";
import { FilterBox } from "@/app/ui/components/FilterBox/FilterBox";
import styles from "./page.module.css";

type CandidatesProps = {
  searchParams: Record<string, string>;
};

export default async function Candidates({ searchParams }: CandidatesProps) {
  const queryString = qs.stringify(searchParams, {
    arrayFormat: "brackets",
    encode: false,
  });

  const { filteredCandidates, quantityCandidates } = await fetchCandidates(
    queryString
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p>HELLO</p>
        <CandidatesList
          searchCandidateArr={filteredCandidates}
          quantityCandidates={quantityCandidates}
          queryString={queryString}
        />
        <FilterBox />
      </div>
    </section>
  );
}
