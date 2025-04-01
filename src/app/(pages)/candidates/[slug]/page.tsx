import { fetchCandidate } from "@/app/actions/fetchCandidate";
import { CandidateCard } from "@/app/ui/components/CandidateCard/CandidateCard";
import styles from "./page.module.css";

type CandidateProps = {
  params: Record<string, string>;
};

export default async function Candidate({ params }: CandidateProps) {
  const candidate = await fetchCandidate(params.slug);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <CandidateCard candidate={candidate} />
        </div>
      </div>
    </section>
  );
}
