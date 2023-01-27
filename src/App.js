import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Data } from "./Data";
import './App.css'

function App() {
  const renderCards = Data.map(Data => {
    return(
      <Card
        data ={Data}
      />
    )
  })
  
  return (
    <div>
      <Header/>
      <main>
        {renderCards}
      </main>
    </div>
  );
}

export default App;
