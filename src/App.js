import { useState, useEffect } from 'react'
import clapping from './clap-icon.svg'
import './App.css'

function App() {
  const [claps, setClaps] = useState(0)
  const [clicking, setClicking] = useState(false)

  useEffect(async () => {
    const response = await fetch(
      'https://606368200133350017fd3345.mockapi.io/api/v0/claps?id=27'
    )
    const data = await response.json()
    const [item] = data
    setClaps(item.claps)
  }, [])

  return (
    <div className="ClapContainer">
      <button
        className="ClapButton"
        onClick={() => setClaps(claps + 1)}
        onMouseDown={() => setClicking(true)}
        onMouseLeave={() => setClicking(false)}
      >
        <img
          className={`ClapIcon ${clicking ? 'spinning' : 'no'}`}
          src={clapping}
        />
      </button>
      <p className="ClapCount">{claps}</p>
    </div>
  )
}

export default App
