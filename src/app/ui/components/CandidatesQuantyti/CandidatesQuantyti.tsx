import styles from "./CandidatesQuantyti.module.css";

type CandidatesQuantytiProps = {
  quantyti: number;
};

export const CandidatesQuantyti = ({ quantyti }: CandidatesQuantytiProps) => {
  return (
    <div className={styles.candidates_div}>
      <p className={styles.title}>Total number of candidates - {quantyti}</p>
    </div>
  );
};
