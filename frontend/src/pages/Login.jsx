import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export default function Login(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    login(username, password)
    nav('/')
  }

  return (
    <div className="center" style={{minHeight:'70vh'}}>
      <div className="panel" style={{minWidth:380}}>
        <h2 className="title">Login</h2>
        <form onSubmit={onSubmit}>
          <div className="row" style={{gridTemplateColumns:'1fr'}}>
            <div>
              <label>Usuário</label>
              <input value={username} onChange={e=>setUsername(e.target.value)} required />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
            </div>
          </div>
          <div style={{marginTop:16}} className="spaced">
            <Link className="muted" to="/register">Cadastre-se</Link>
            <button className="btn primary" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

