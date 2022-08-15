import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import MainLayout from "../../components/MainLayout";

export default function TodoList({ todos }) {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    const user = localStorage.getItem("user");
    const router = useRouter();

    if (!user) {
      router.push("/");
    }
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>This is Todo list</h1>
        <ul>
          {todos.map((todo) => (
            <li>
              <Link href={`/todos/${todo.id}`}>
                <a>{todo.id}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
}
