import Image from "next/image";
import { parseQueryString } from "../../utils/parseQueryString";

import decorations from "../../icons/decorations.svg";
import { CandidatesListItems } from "../CandidatesListItems/CandidatesListItems";
import styles from "./CandidatesList.module.css";

type CandidateItems = {
  id: number;
  name: string;
  avatar: string;
  price: string;
  category: string;
  experience: string;
  englishLevel: string;
  skills: string[];
  description: string;
};

type CandidatesListProps = {
  searchCandidateArr: CandidateItems[];
  quantityCandidates: number;
  queryString: string;
};

export const CandidatesList = ({
  searchCandidateArr,
  quantityCandidates,
  queryString,
}: CandidatesListProps) => {
  const queryParams = parseQueryString(queryString) as Record<string, string[]>;
  const querySkillsArray = queryParams.skills || [];

  return (
    <div className={styles.candidates_div}>
      <div className={styles.candidates_div_title}>
        <h1 className={styles.title}>
          Candidates <Image src={decorations} alt="decorations text" />
        </h1>
        <p className={styles.quantyti}>{quantityCandidates}</p>
      </div>
      <ul className={styles.list}>
        {searchCandidateArr?.map((item: CandidateItems) => (
          <li key={item.id}>
            <CandidatesListItems
              candidate={item}
              querySkillsArray={querySkillsArray}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
