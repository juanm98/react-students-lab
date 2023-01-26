import Student from "./Student";

const StudentData = (props) => {
  return (
    <div>
    {props.students.map((student, idx) =>
    <Student student={student} key={idx}/>
    )}
  </div>
  )
}

export default StudentData;