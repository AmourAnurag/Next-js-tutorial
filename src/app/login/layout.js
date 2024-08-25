"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";
export default function layout({ children }) {
  const path = usePathname();
  return (
    <div>
      {console.log(path)}
      {path !== "/login/loginTeacher" ? (
        <ul className="login-menu">
          <h3>Navbar</h3>
          <li className="login-li">
            <Link href="/login">Main Login</Link>
          </li>

          <li className="login-li">
            <Link href="/login/loginStudent">Student Login</Link>
          </li>

          <li className="login-li">
            <Link href="/login/loginTeacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href="/">go to home page</Link>
      )}

      {children}
    </div>
  );
}
