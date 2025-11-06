import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../state/AuthContext'

export default function Register(){
  const [form, setForm] = useState({ username:'', email:'', nickname:'', password:'' })
  const { login } = useAuth()
  const nav = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo: directly login after "register"
    login(form.username, form.password)
    nav('/')
  }

  const bind = (k) => ({ value:form[k], onChange:e=>setForm(f=>({...f,[k]:e.target.value})) })

  return (
    <div className="center" style={{minHeight:'70vh'}}>
      <div className="panel" style={{minWidth:420}}>
        <h2 className="title">Cadastro</h2>
        <form onSubmit={onSubmit}>
          <div className="row" style={{gridTemplateColumns:'1fr'}}>
            <div><label>Usuário</label><input {...bind('username')} required/></div>
            <div><label>Senha</label><input type="password" {...bind('password')} required/></div>
            <div><label>E-mail</label><input type="email" {...bind('email')} required/></div>
            <div><label>Nick name</label><input {...bind('nickname')} /></div>
          </div>
          <div style={{marginTop:16, textAlign:'right'}}>
            <button className="btn primary" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

