import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Extend the Storage prototype to include getObj
Storage.prototype.getObj = function(key: string) {
  const value = this.getItem(key);
  return value ? JSON.parse(value) : null;
};

function App() {
  const [activitiesList, setActivitiesList] = useState<string[]>([]);

  // Load saved activities from localStorage on component mount
  useEffect(() => {
    const savedActivities = localStorage.getObj("UserSavedActivities");
    if (savedActivities) {
      setActivitiesList(savedActivities);
    }
  }, []);

  return (
    <>
      <Header />
      <Form setActivitiesList={setActivitiesList} activitiesList={activitiesList} />
      {console.log(activitiesList)}
      <MainContent activitiesList={activitiesList} setActivitiesList={setActivitiesList} />
      <Footer />
    </>
  );
}

export default App;
