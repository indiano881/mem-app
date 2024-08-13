import { useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


Storage.prototype.getObj = function(key: string) {
  const value = this.getItem(key);
  return value ? JSON.parse(value) : null;
};

function App() {
  const [activitiesList, setActivitiesList] = useState<string[]>([]);
  const [markedItems, setMarkedItems] = useState<string[]>([]);
  
  useEffect(() => {
    const savedActivities = localStorage.getObj("UserSavedActivities");
    const markedActivities = localStorage.getObj("markedActivities");

    if (savedActivities) {
      setActivitiesList(savedActivities);
    }

    if (markedActivities) {
      setMarkedItems(markedActivities);
    }

  }, []);

  return (
    <>
      <Header />
      <Form setActivitiesList={setActivitiesList} activitiesList={activitiesList} />
      <MainContent activitiesList={activitiesList} setActivitiesList={setActivitiesList} markedItems={markedItems} setMarkedItems={setMarkedItems}/>
      <Footer />
    </>
  );
}

export default App;
