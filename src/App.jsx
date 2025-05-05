import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Opening from './opening'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='divoverall'>
    <Card/>
    <Opening/>
    </div>
    </>
  )
}

export default App
