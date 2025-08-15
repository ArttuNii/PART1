import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const otsikko = 'Give feedback'

const Header = ({otsikko}) => {
  return (
    <div>
      <h1>{otsikko}</h1>
    </div>
  )
}

const valiotsikko = 'Statistics'

const Valiotsikko = ({valiotsikko}) => {
  return (
    <div>
      <h2>{valiotsikko}</h2>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total === 0)
    return (
    <div>
      <h2>No feedback given</h2>
    </div>
  )
  return(
    <table>
      <tbody>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="All" value={total} />
      <StatisticLine text="Average" value={average} />
      <StatisticLine text="Positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [divider, setDivider] = useState(0)
  const addDivider = divider + 1
  const reduceDivider = divider - 1
  const average = divider / total
  const positive = (good / total) * 100
  const roundedpositive = positive.toFixed(1)
  const roundedaverage = average.toFixed(1)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)
    setDivider(addDivider)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    setDivider(reduceDivider)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
  }

  return (
    <div>
      <Header otsikko={otsikko}/>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad'/>
      <Valiotsikko valiotsikko={valiotsikko}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={roundedaverage} positive={roundedpositive} />
    </div>
  )
}

export default App