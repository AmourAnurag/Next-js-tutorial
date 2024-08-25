import Link from "next/link";
import "./login.css"
export default function layout({ children }) {
  return (
    <div>
      
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
      
      {children}
    </div>
  );
}
