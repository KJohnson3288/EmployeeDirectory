import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from "./components/jumbotron";
import Table from "./components/Table"


function App() {
  fetch("https://randomuser.me/api/?results=100&nat=us")
    .then(res => res.json())
    .then(data => console.log(data))

  return (
    <div className="App">
      <Jumbotron />
      <Table />
    </div>
  );
}

export default App;
