import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function about() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>ini adalah halaman detail post : {id}</h1>
    </div>
  );
}
