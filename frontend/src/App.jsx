import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateChampionship from './pages/CreateChampionship'
import CreateTeam from './pages/CreateTeam'
import Ranking from './pages/Ranking'
import TeamDetails from './pages/TeamDetails'
import AdminDetails from './pages/AdminDetails'
import Bracket from './pages/Bracket'
import EnterChampionship from './pages/EnterChampionship'
import Draw from './pages/Draw'
import { useAuth } from './state/AuthContext'

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/admin/:id" element={<PrivateRoute><AdminDetails /></PrivateRoute>} />
          <Route path="/draw/:id" element={<PrivateRoute><Draw /></PrivateRoute>} />
          <Route path="/bracket/:id" element={<Bracket />} />
          <Route path="/enter/:id" element={<EnterChampionship />} />
          <Route path="/create/championship" element={<PrivateRoute><CreateChampionship /></PrivateRoute>} />
          <Route path="/create/team" element={<PrivateRoute><CreateTeam /></PrivateRoute>} />
        </Routes>
      </main>
    </div>
  )
}
