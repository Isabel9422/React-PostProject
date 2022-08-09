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

function App() {

  // const value= localStorage.getItem(token);

  return (
    <div className="App min-h-screen flex justify-center from-black via-sky-900 to-black flex-wrap gap-7">
      {/* <Tags/> */}
  <Router>
    {/* <NavBar/> */}
    <Route path="/login" component={Login}/>
    {/* <Context.Provider value={value}> */}
    <Route path="/register" component={Register}/>
    <Route path="/home" component={home}/>
    <Route path="/posts/create" component={CreatePosts}/>
    {/* </Context.Provider> */}
  </Router>
      {/* <CreatePosts/> */}
    </div>
  )
}

export default App
