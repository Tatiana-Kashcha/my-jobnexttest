import Image from "next/image";
import Link from "next/link";
import { CandidatesSkillsList } from "../CandidatesSkillsList/CandidatesSkillsList";
import { CandidatesAdditionalInformation } from "../CandidatesAdditionalInformation/CandidatesAdditionalInformation";
import styles from "./CandidatesListItems.module.css";

type Candidate = {
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

type CandidatesListItemsProps = {
  candidate: Candidate;
  querySkillsArray: string[];
};

export const CandidatesListItems = ({
  candidate,
  querySkillsArray,
}: CandidatesListItemsProps) => {
  const slugPosition = candidate.name
    .toLowerCase()
    .replace(/\s*\/\s*/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

  return (
    <div className={styles.candidates_div}>
      <div className={styles.descriptions_div}>
        <div className={styles.thumb}>
          <Image
            src={candidate.avatar}
            alt="photo"
            className={styles.photo}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Link href={`/candidates/${slugPosition}-${candidate.id}`}>
            <h3 className={styles.title}>{candidate.name}</h3>
          </Link>
          <div className={styles.descriptions}>
            <p>
              Category •{" "}
              <span className={styles.descriptions_span}>
                {candidate.category}
              </span>
            </p>
            <p>
              Experience •{" "}
              <span className={styles.descriptions_span}>
                {candidate.experience}
              </span>
            </p>
            <p>
              English •{" "}
              <span className={styles.descriptions_span}>
                {candidate.englishLevel}
              </span>
            </p>
          </div>
        </div>
        <p className={styles.salary}>{candidate.price}</p>
      </div>
      <CandidatesSkillsList
        skillsArr={candidate.skills}
        querySkillsArray={querySkillsArray}
      />
      <CandidatesAdditionalInformation info={candidate.description} />
    </div>
  );
};
