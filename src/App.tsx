import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './Layout/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminLayout/>}> 
          <Route index element={<AdminDashboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App