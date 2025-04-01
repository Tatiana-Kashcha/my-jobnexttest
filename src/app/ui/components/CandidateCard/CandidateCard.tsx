import Image from "next/image";

import { CandidatesSkillsList } from "../CandidatesSkillsList/CandidatesSkillsList";
import { CandidatesAdditionalInformation } from "../CandidatesAdditionalInformation/CandidatesAdditionalInformation";
import styles from "./CandidateCard.module.css";

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

type CandidateCardProps = {
  candidate: CandidateItems;
};

export const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    <div className={styles.candidates_div}>
      <div className={styles.descriptions_div}>
        <div className={styles.thumb}>
          <Image
            src={
              candidate?.avatar ? candidate.avatar : "/images/defaultImg.png"
            }
            alt="photo"
            className={styles.photo}
            width={100}
            height={100}
            priority
          />
        </div>
        <div>
          <h3 className={styles.title}>{candidate?.name}</h3>

          <div className={styles.descriptions}>
            <p>
              Category •{" "}
              <span className={styles.descriptions_span}>
                {candidate?.category}
              </span>
            </p>
            <p>
              Experience •{" "}
              <span className={styles.descriptions_span}>
                {candidate?.experience}
              </span>
            </p>
            <p>
              English •{" "}
              <span className={styles.descriptions_span}>
                {candidate?.englishLevel}
              </span>
            </p>
          </div>
        </div>
        <p className={styles.salary}>{candidate?.price}</p>
      </div>
      <CandidatesSkillsList
        skillsArr={candidate?.skills || []}
        querySkillsArray={[]}
      />
      <CandidatesAdditionalInformation info={candidate?.description || ""} />
    </div>
  );
};
