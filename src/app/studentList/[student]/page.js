"use client"; // Make this a client component

import { usePathname } from "next/navigation";

const Student = () => {
  const pathname = usePathname();
  console.log(pathname)
  
  
  const id = pathname.split("/").pop(); 

  console.log(id)
  return (
    <div>
      <h3>Details of the student with ID: {id}</h3>
      {/* You can add more details here based on the student ID */}
    </div>
  );
};

export default Student;

