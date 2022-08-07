import Posts from './components/Posts'
import './App.css'
import Login from './components/forms/Login'
import Cards from './components/Cards'
import Tags from './components/Tags'
import Register from './components/forms/Register'
import CreatePosts from './components/forms/CreatePosts'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className="App min-h-screen flex justify-center from-black via-sky-900 to-black flex-wrap gap-7">
            <NavBar/>
      {/* <Login/> */}
      {/* <Posts/> */}
      {/* <Cards/> */}
      {/* <Tags/> */}
      {/* <Register/> */}
      <CreatePosts/>
    </div>
  )
}

export default App
