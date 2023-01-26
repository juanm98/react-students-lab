import Student from "./Student"

const StudentData = (props) => {
  return (
    <>
    <h2>Student list</h2>
    {props.students.map(student =>
      <Student key={student.name} student={student} />
      )}
    </>
  )
}

export default StudentData