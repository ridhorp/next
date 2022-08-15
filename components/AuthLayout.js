import AuthNavbar from "./AuthNavbar";

export default function AuthLayout({ children, title }) {
  return (
    <>
      <AuthNavbar />
      <div className="content">
        <h1>{title}</h1>

        {children}
      </div>
    </>
  );
}
