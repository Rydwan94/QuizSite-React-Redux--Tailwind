import { Routes, Route, Navigate } from "react-router-dom"
import LandginPage from './Layouts/LandingPage'
import HomePage from './Layouts/HomePage'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandginPage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="*" element={<Navigate to="/" replace/>} />
    </Routes>
  )
}

export default App