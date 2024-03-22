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
  
const [img,setimg] = useState(Profilepic);
const [name,setuname] = useState();
const [email,setemail] = useState();
const [age,setage] = useState();
const [phone,setphone] = useState();
const [err,seterr] = useState();
const [login,setlogin] = useState(false);

const uimg = (data)=>
{
  const imgsrc = localStorage.getItem('image');
  if(imgsrc)
  {
    setimg(imgsrc)
  } else if(imgsrc === '')
  {
   setimg(data);
   setlogin(true)
  }
  }
const uname =(data)=>
{
  const name = localStorage.getItem('name');
  if(name)
  {
    setuname(name);
  }else if(name === '')
  {
    setuname(data);
    setlogin(true)
  }
}
const uemail =(data)=>
{
  const mail = localStorage.getItem('email');
  if(mail)
  {
    setemail(mail);
  }else if(mail === '')
  {
    setemail(data)
    setlogin(true)
  }
}
const uage =(data)=>
{
const age = localStorage.getItem('age');
  if(age)
  {
   setage(age);
  }else if(age === '')
  {
    setage(data);
    setlogin(true)
  }
}
const uphoneno = (data) =>
{
const mobile = localStorage.getItem('phone');
  if(mobile)
  {
   setphone(mobile);
  }else if(mobile === '')
  {
    setphone(data);
    setlogin(true)
   }  
}
useEffect(()=>
{
  const imgsrc = localStorage.getItem('image');
  setimg(imgsrc);
  const name = localStorage.getItem('name');
  setuname(name);
  const mail = localStorage.getItem('email');
  setemail(mail);
  const age = localStorage.getItem('age');
  setage(age);
  const mobile = localStorage.getItem('phone');
  setphone(mobile);

  if(imgsrc === ''||name === ''||mail === ''||age === ''|| mobile === '')
  {
    seterr(1);
    localStorage.setItem('value',err);
  }
  else
  {
    seterr(0)
    localStorage.setItem('value',err);
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
      <div className={localStorage.getItem('value')===1?'display':'hide'}>
      <Form imageSrc={uimg} Name={uname} Email={uemail} Age={uage} Phone={uphoneno}/>
      </div>
      <Header img={img} name={name} email={email} age={age} phone={phone}/>
      <div className='main'>
        <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/games' Component={Games}></Route>
        <Route path='/link' Component={Home}></Route>
      </Routes>
    </div>
    </>
  );
};

export default App;