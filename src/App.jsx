import Posts from './components/Posts'
import './App.css'
import Login from './components/forms/Login'
import Cards from './components/Cards'
import Tags from './components/Tags'
import Register from './components/forms/Register'
import CreatePosts from './components/forms/CreatePosts'
import NavBar from './components/NavBar'
import { Router, Route } from "wouter";
import home from './components/pages/home'
import { useContext, createContext } from 'react';
const TokenContext = createContext();

function App() {

  const token= localStorage.getItem("token");

  return (
    <div className="App min-h-screen flex justify-center from-black via-sky-900 to-black flex-wrap gap-7">
  <Router>
    {/* <NavBar/> */}
    <TokenContext.Provider value={token}>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/home" component={home}/>
    <Route path="/posts/create" component={CreatePosts}/>
    </TokenContext.Provider>
  </Router>
    </div>
  )
}

export default App
