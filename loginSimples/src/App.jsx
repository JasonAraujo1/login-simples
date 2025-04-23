import { Route, Routes } from 'react-router'
import './App.css'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}
