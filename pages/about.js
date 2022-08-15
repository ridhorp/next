import MainLayout from "../components/MainLayout";
import styles from "../styles/Home.module.css";

export default function about() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>ini adalah halaman about us</h1>
      </div>
    </MainLayout>
  );
}
