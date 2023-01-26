const Score = (props) => {
  return (
    <>
    <h2>Student Scores</h2>
    <h2>Date: {props.scores.score}</h2>
    <h3>Score: {props.scores.date}</h3>
    </>
  )
}

export default Score