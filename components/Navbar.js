import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
      <li>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </li>
      <li>
        <Link href="/todos">
          <a>Todolist</a>
        </Link>
      </li>
    </ul>
  );
}
