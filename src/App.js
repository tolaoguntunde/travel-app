// import './App.css';
import React from 'react'
import Travel from './components/Travel'
import data from './components/data'
import Header from "./components/Header"
import './App.css'


export default function App() {
  const info = data.map(data=>{
    return <Travel 
            key = {data.title}
            infoData = {data}
    />
  })
  return (
<div className="App">
<Header/>
      {info}
    </div>
  )
}
