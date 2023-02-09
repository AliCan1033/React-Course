import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader';
import { useState } from 'react';
import Bloglist from './Bloglist';

function App() {
  const couse = "React js"
  const [blogdate,change]=useState([
    { 'id': '1', 'title': 'Angular', 'desc': 'this content described about angular', 'author': 'jhon' },
    { 'id': '2', 'title': 'reactjs', 'desc': 'this content described about reactjs', 'author': 'rishan' },
    { 'id': '3', 'title': 'dot net core', 'desc': 'this content described about dot net core', 'author': 'jhon' },
    { 'id': '4', 'title': 'jQuery', 'desc': 'this content described about jQuery', 'author': 'rishan' },
    { 'id': '5', 'title': 'sql', 'desc': 'this content described about Sql', 'author': 'rishan' }
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader title= "Welcome to react" course={couse}></AppHeader>
        <Bloglist blog={blogdate.filter(item=>item.author=="rishan")} author="Author is rishan"/>
        <Bloglist blog={blogdate.filter(item=>item.author=="jhon")} author="Author is jhon"/>
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
