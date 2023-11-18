import { useState } from 'react'
import './App.css'
import { Gender } from './components/Gender'
import { getGender } from './services/getGender'

function App() {
  const [maleProbability, setMaleProbability] = useState(50)
  const [femaleProbability, setFemaleProbability] = useState(50)

  const handleClick = async(event) => {
    event.preventDefault()
    const res = await getGender(event)
    res.gender === "male"
      ? setProbabilities(res.probability*100, 100 - res.probability*100)
      : setProbabilities(100 - res.probability*100, res.probability*100)
  }

  const setProbabilities = (male, female) => {
    setMaleProbability(male)
    setFemaleProbability(female)
  }

  return (
    <div className="page">

      <header>
        <h1>Gender predictor</h1>
        <form onSubmit={handleClick}>
          <input type="text" name="name" id="name" placeholder='John, Stuart, Sheldon....' />
          <button type='submit'>Predict</button>
        </form>
      </header>

      <main>
        <Gender gender={"male"} probability={maleProbability}/>
        <Gender gender={"female"} probability={femaleProbability}/>
      </main>
    </div>
  )
}

export default App
