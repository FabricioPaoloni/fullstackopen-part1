import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdotes[props.show]}</p>
      <p>has {props.votes[props.show]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotedPosition, setMostVotedPosition] = useState(0)

  const handleRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randomNumber)
  }

  const handleVote = () => {
    let copyArray = [...votes]
    copyArray[selected] += 1
    setVotes(copyArray)

    let mostVoted = Math.max(...copyArray)
    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === mostVoted) {
        setMostVotedPosition(i)
        break
      }
    }
  }


  return (
    <>
      <h2>Anecdote of the day:</h2>
      <Anecdote anecdotes={anecdotes} votes={votes} show={selected} />
      <Button onClick={handleRandomNumber} text="next anecdote" />
      <Button onClick={handleVote} text="vote" />
      <h2>Most voted anecdote</h2>
      <Anecdote anecdotes={anecdotes} votes={votes} show={mostVotedPosition} />
    </>
  )
}

export default App