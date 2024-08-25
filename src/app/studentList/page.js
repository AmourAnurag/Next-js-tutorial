import Link from "next/link";

const StudentList=()=>{
    return(
        <div>
            <h2>Student List</h2>
        <ul>
            <li><Link href="/studentList/anil">Anil</Link></li>
            <li><Link href="/studentList/aman">Aman</Link></li>
            <li><Link href="/studentList/karan">Karan</Link></li>
            <li><Link href="/studentList/geeta">Geeta</Link></li>
        </ul>
        </div>
    )
}
export default StudentList;