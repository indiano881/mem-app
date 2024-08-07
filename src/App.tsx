import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Header/Form"


function App() {

  const [activitiesList, setActivitiesList]=useState<Array<string|null>>([])
  

  return (
    <>
     <Header />
     <Form />
    </>
  )
}

export default App
