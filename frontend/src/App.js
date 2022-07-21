import React from 'react';
import './App.css';
import Home from './Component/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Register/Register';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';


function App() {
  const {user} = JSON.stringify(JSON.parse(localStorage.getItem("token")))
  console.log(user)
  return (
        <>
               <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
        <BrowserRouter>
    
        <Routes>
          {user && <Route path="/" exact element={<Home user={user}/>} />}
         
          {
            !user && <>
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<SignUp />} />
            </>
          }
          <Route path="/" element={<Navigate replace to="/login" />} />
		   </Routes>
            
        </BrowserRouter>
      </>
  );
}

export default App;
