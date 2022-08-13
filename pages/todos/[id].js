import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function detailTodo() {
  const [todo, setTodo] = useState({});
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo = await res.json();

      setTodo(todo);
    }

    fetchData();
  });
  return (
    <div>
      <h3>
        {todo.title} - {todo.id}
      </h3>
      <p>completed {todo.completed}</p>
    </div>
  );
}
