import React, { useState } from 'react';
import './App.css';
import Registration from './component/ragistration';
import './component/style.css';
import Login from "./component/login"

function App() {
  const [auth, setauth] = useState("true")
  const [logRagis, setlogRagis] = useState("Registration")

  const ragistration = () => {
    setauth("true")
    setlogRagis("Registration")

  }

  const login = () => {
    setauth("false")
    setlogRagis("Login")
  }
  return (
    <>
      <div className='container'>
        <div className='containerbox'>
          <div className='circle_div'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3H7XGLJTc4ujZQUm1wGuu0BkRk8jLWoaRw&s" alt="Description of image" />
          </div>
          <div className='auth'>
            <button onClick={() => ragistration()}>ragistration</button>
            <button onClick={() => login()}>login</button>
          </div>

          <div>
            {auth ? <Registration  data = {logRagis}/> : <Login data = {logRagis}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
