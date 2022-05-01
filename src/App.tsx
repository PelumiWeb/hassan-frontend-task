import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import HomePage from "./screens/HomePage"
import LoginPage from "./screens/LoginPage"
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./app/hooks"
import {selectUser,} from "./features/user/userSlice"
import {getAdditionalUserInfo, getAuth} from "firebase/auth"
 

export interface PrivateRouteParams {
  element: any;
  path: string;
}

function App() {
  const {user} = useAppSelector(selectUser)
  const [authenticated, setAuthenticated] = useState(false)
  
 
 useEffect(() => {
   if (user) {
    setAuthenticated(true)
   }
 }, [user])

 const  PrivateRoute = () => {
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
  }



  // useEffect(() => {

  //   const fetchData = async () => {
  //     //Get current user
  //     // axios.get("https://api.github.com/users/PelumiWeb").then(res => console.log(res)).catch(e => console.log(e))

  //     //Det Repository
  //   //  axios.get("https://api.github.com/users/PelumiWeb/repos").then(res => console.log(res)).catch(e => console.log(e))
  //   // dispatch(fetchUserAsync("PelumiWeb"))
  //   }
  //   fetchData()

  // }, [])

  return (
    <Router >
      <Routes> 
      <Route  path='/' element={<PrivateRoute/>}>
          <Route  path='/' element={<HomePage/>}/>
      </Route>
      <Route path="/login"  element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
