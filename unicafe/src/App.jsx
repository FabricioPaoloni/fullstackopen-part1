import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.statistic}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, all }) => {
  return (
    <>
      <h2>Session statistics:</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" statistic={good} />
          <StatisticLine text="Neutral" statistic={neutral} />
          <StatisticLine text="Bad" statistic={bad} />
          <StatisticLine text="All" statistic={good + neutral + bad} />
          <StatisticLine text="Average" statistic={all === 0 ? 0 : (good - bad)/all} />
          <StatisticLine text="Percentage" statistic={good / (all === 0 ? 1 : all) * 100 + "%"} />{/*we avoid dividing by all = 0 using an if statement*/}
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const handleClick = {
    //and object composed of 3 functions: good, neutral and bad used to change each of those states 
    good: () => {
      let aux = good + 1
      setGood(aux)
    },
    neutral: () => {
      let aux = neutral + 1
      setNeutral(aux)
    },
    bad: () => {
      let aux = bad + 1
      setBad(aux)
    }
  }

  return (
    <>
      <h2>Give us feedback:</h2>
      <Button onClick={handleClick.good} text="good" />
      <Button onClick={handleClick.neutral} text="neutral" />
      <Button onClick={handleClick.bad} text="bad" />
      {
        all === 0 ?
          <p>No feedback given</p> :
          <Statistics good={good} neutral={neutral} bad={bad} all={all} />
      }
    </>
  )
}

export default App
