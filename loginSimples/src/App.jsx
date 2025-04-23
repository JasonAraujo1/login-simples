import { Route, Routes } from 'react-router'
import './App.css'
import Home from './home'
import Login from './login'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
