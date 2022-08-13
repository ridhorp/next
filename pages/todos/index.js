import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function TodoList({ todos }) {
  return (
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