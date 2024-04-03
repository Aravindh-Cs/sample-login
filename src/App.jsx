// App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import Games from './components/card';
import Form from './components/form';
import './index.css';
import { Route,Routes} from 'react-router-dom';
import Profilepic from './images/profile-pic.png'

const App = () => {
  
const [img,setimg] = useState();
const [name,setuname] = useState();
const [email,setemail] = useState();
const [age,setage] = useState();
const [phone,setphone] = useState();
const [err,seterr] = useState(null)

const imgsrc = localStorage.getItem('image');
const getname = localStorage.getItem('name');
const getmail = localStorage.getItem('email');
const getage = localStorage.getItem('age');
const getmobile = localStorage.getItem('phone');

useEffect(()=>
{

  if(imgsrc === ''||getname === ''||getmail === ''||age === ''|| mobile === '')
  {
    localStorage.setItem('value',1);
    seterr(false);
  }
  else
  {
    setimg(imgsrc);
    setuname(getname);
    setage(getage);
    setemail(getmail);
    setphone(getmobile);
    localStorage.setItem('value',0);
    seterr(true)
  }
  if(imgsrc === '')
  {
    setimg(Profilepic);
    localStorage.setItem('image',Profilepic)
  }
  console.log('app',localStorage.getItem('value'))
})

  return (
    <>
      <div>
      <Form/>
      </div>
      {err===true?<>
      <Header img={img} name={name} email={email} age={age} phone={phone}/>
      <div className='main'>
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/games' Component={Games}></Route>
        <Route path='/link' Component={Home}></Route>
      </Routes>
    </div></>:''}
    </>
  );
};

export default App;