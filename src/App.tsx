import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Header/Form"
import MainContent from "./components/MainContent"


function App() {

  const [activitiesList, setActivitiesList]=useState<Array<any>>([])
  

  return (
    <>
     <Header />
     <Form setActivitiesList={setActivitiesList} />
     {console.log(activitiesList)}
     <MainContent activitiesList={activitiesList}/>
    </>
  )
}

export default App
