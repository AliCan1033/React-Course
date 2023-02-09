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
  const [companydata, campanychange] = useState(null);
  const [isloaded, changeload] = useState(true);
  const [errorinfo, SetError] = useState(null);


  const FunctionDelete = (id) => {

    headchange("React");
    console.log(header);
  }
  useEffect(() => {

    fetch("http://localhost:8000/company1").then(res => { //burada urlden bir silinirse veriler gösterilir yoksa fail olur
      console.log(res);
      if (!res.ok) {
        throw Error('Failed to fatch the data');
      }
      return res.json();
    }).then(result => {
      setTimeout(() => {
        campanychange(result);
        changeload(false);
      }, 3000);
    }).catch(res => {
      SetError(res.message);
      changeload(false);
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader title="Welcome to react" course={couse}></AppHeader>

        {errorinfo && <div className='errormessage'>{errorinfo}</div>}
        {isloaded && <div>Please Wait .....</div>}
        {companydata && <Company companydata={companydata}></Company>}


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
