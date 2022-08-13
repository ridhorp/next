import styles from "../../styles/Home.module.css";

export default function user({ data }) {
  return (
    <div className={styles.container}>
      <h1>ini adalah halaman list post</h1>
      <ul>
        {data.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
