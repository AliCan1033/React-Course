import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import Company from './Company';

function App() {
  const couse = "React js"
  const [blogdate, change] = useState([
    { 'id': '1', 'title': 'Angular', 'desc': 'this content described about angular', 'author': 'jhon' },
    { 'id': '2', 'title': 'reactjs', 'desc': 'this content described about reactjs', 'author': 'rishan' },
    { 'id': '3', 'title': 'dot net core', 'desc': 'this content described about dot net core', 'author': 'jhon' },
    { 'id': '4', 'title': 'jQuery', 'desc': 'this content described about jQuery', 'author': 'rishan' },
    { 'id': '5', 'title': 'sql', 'desc': 'this content described about Sql', 'author': 'rishan' }
  ]);

  const [header, headchange] = useState("React class");
  const [compantdate, campanychange] = useState(null);
  const [isloaded, changeload] = useState(true);

  const FunctionDelete = (id) => {

    headchange("React");
    console.log(header);
  }
  useEffect(() => {

    fetch("http://localhost:8000/company").then(res => {
      return res.json();

    }).then(result => {
           //setTimeout(() => {
           campanychange(result);
           changeload(false);
      // }, 3000);

    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader title="Welcome to react" course={couse}></AppHeader>
        {isloaded && <div>Please Wait .....</div>}
        {compantdate && <Company companydata={compantdate}></Company>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
