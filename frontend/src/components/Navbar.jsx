import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  return (
    <header className="navbar">
      <Link to="/" className="brand">NVC</Link>
      <nav>
        <NavLink to="/" end>Campeonatos</NavLink>
        <NavLink to="/create/championship">Criar Campeonato</NavLink>
        <NavLink to="/create/team">Criar equipe</NavLink>
        <NavLink to="/ranking">Ranking</NavLink>
      </nav>
      <div className="auth">
        {isAuthenticated ? (
          <>
            <span className="welcome">Olá, {user?.username}</span>
            <button className="btn small" onClick={logout}>Sair</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Cadastro</NavLink>
          </>
        )}
      </div>
    </header>
  )
}

