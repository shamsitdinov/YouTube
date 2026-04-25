import React, { useState } from 'react'
import Main from './components/Main'
import Register from './components/Register'
import { FaLeaf } from 'react-icons/fa6'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='bg-[#0f0f0f] min-h-[100vh]'>
      {open ?
        <Main />
        :
        <SignUp open={open} setOpen={setOpen}/>
      }


    </div>
  )
}

export default App