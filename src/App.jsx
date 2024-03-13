import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppRouter from './BOOTCAMP/zustand_recipies/routes'
import State_eg1 from './OPBC/hooks/State_eg1'
import ComponenteContexto from './OPBC/hooks/ContextHook_eg2'
import Props_eg3 from './OPBC/hooks/Props_eg3'
import FormHook from './BOOTCAMP/usehookform/components/Form'
import ContactForm from './BOOTCAMP/usehookform/components/ContactForm'
import Form from './BC_Project/components/Form'


function App() {
  return (
      <div className='App'>
        <Form />
      </div>
  )
}

export default App