import Posts from './components/Posts'
import './App.css'
import Login from './components/Login'
import Cards from './components/Cards'
import Tags from './components/Tags'
import Register from './components/Register'
import CreatePosts from './components/CreatePosts'
import NavBar from './components/NavBar'


function App() {

  return (
    <div className="App min-h-screen flex justify-center from-black via-sky-900 to-black flex-wrap gap-7">
            <NavBar/>
      {/* <Login/> */}
      {/* <Posts/> */}
      {/* <Cards/> */}
      <Tags/>
      {/* <Register/> */}
      {/* <CreatePosts/> */}
    </div>
  )
}

export default App
