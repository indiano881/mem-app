import { useEffect, useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App() {

  const [activitiesList, setActivitiesList]=useState<string[]>([])
  
  
  {/*CHECK FROM HERE */}
  useEffect(()=> {
    localStorage.setItem("UserSavedActivities", JSON.stringify(activitiesList))
  },[])

  useEffect(()=> {
    localStorage.setItem("UserSavedActivities", JSON.stringify(activitiesList))
  },[activitiesList])


  return (
    <>
     <Header />
     <Form setActivitiesList={setActivitiesList} />
     {console.log(activitiesList)}
     <MainContent activitiesList={activitiesList} setActivitiesList={setActivitiesList}/>
     <Footer />
    </>
  )
}

export default App
