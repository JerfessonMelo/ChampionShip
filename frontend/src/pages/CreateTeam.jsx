import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export default function CreateTeam(){
  const [form, setForm] = useState({ name:'', members:5, coach:'', category:'A' })
  const nav = useNavigate()
  const bind = (k) => ({ value: form[k], onChange: e => setForm(s => ({...s,[k]: e.target.value})) })

  const submit = (e) => {
    e.preventDefault()
    const t = api.createTeam(form)
    nav(`/team/${t.id}`)
  }

  return (
    <div className="panel">
      <h2 className="title">Criar Equipe</h2>
      <form onSubmit={submit}>
        <div className="row">
          <div>
            <label>Nome da Equipe</label>
            <input required {...bind('name')} />
          </div>
          <div>
            <label>Quantidade de membros</label>
            <input type="number" min="1" {...bind('members')} />
          </div>
        </div>
        <div className="row">
          <div>
            <label>Coach</label>
            <input {...bind('coach')} />
          </div>
          <div>
            <label>Categoria</label>
            <input {...bind('category')} />
          </div>
        </div>
        <div style={{marginTop:16, textAlign:'center'}}>
          <button className="btn primary" type="submit">Criar</button>
        </div>
      </form>
    </div>
  )
}

