
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);

  const[user,setUser]=useState(null)
  const[loggedInUserData,setloggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem("loggedInUser")

    if(loggedInUser){
     const userData=JSON.parse(loggedInUser)

     setUser(userData.role)
     setloggedInUserData(userData.data)

    }
  },[])


  //who is logged in?
  // useEffect(()=>{
  //   if (authData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])


const handleLogin=(email,password)=>{
  if(email=='admin@me.com'&&password =='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
  }else if(userData) {
    const employee= userData.find((e)=>email==e.email && e.password ==password)
    if(employee){
    setUser('employee')
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
    }
  }
  else{
    alert("Invalid credentials")
  }
}

  const data=useContext(AuthContext)
  console.log(data)


  return (
    <>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
