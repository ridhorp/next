import MainLayout from "../../components/MainLayout";
import styles from "../../styles/Home.module.css";

export default function user({ data }) {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>ini adalah halaman list user</h1>
        <ul>
          {data.map((post) => (
            <li>{post.name}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
