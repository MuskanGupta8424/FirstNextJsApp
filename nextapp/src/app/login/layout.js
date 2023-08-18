import Link from "next/link"
import "./login.css"

export default function RootLayout({ children }) {
    return (
      <>
      <div>
        <ul>
        <li>
                <Link href="/login">login main</Link>
            </li>
            <li>
                <Link href="/login/loginstudent">login student page</Link>
            </li>
        </ul>
      </div>
        {children}
      </>
    )
  }