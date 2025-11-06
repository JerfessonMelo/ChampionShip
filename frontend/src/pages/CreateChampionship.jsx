import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'

export default function CreateChampionship(){
  const [form, setForm] = useState({ name:'', teamLimit: 12, memberLimit:5, prize:'', category:'A', date:'' })
  const nav = useNavigate()
  const bind = (k) => ({ value: form[k], onChange: e => setForm(s => ({...s,[k]: e.target.value})) })

  const submit = (e) => {
    e.preventDefault()
    const c = api.createChampionship(form)
    nav(`/admin/${c.id}`)
  }

  return (
    <div className="panel">
      <h2 className="title">Criar Campeonato</h2>
      <form onSubmit={submit}>
        <div className="row">
          <div>
            <label>Nome</label>
            <input placeholder="Nome" required {...bind('name')} />
          </div>
          <div>
            <label>Quantidade de equipes</label>
            <input type="number" min="2" {...bind('teamLimit')} />
          </div>
        </div>
        <div className="row">
          <div>
            <label>Prêmio</label>
            <input placeholder="Prêmio" {...bind('prize')} />
          </div>
          <div>
            <label>Quantidade de membros</label>
            <input type="number" min="1" {...bind('memberLimit')}/>
          </div>
        </div>
        <div className="row">
          <div>
            <label>Categoria</label>
            <input placeholder="Categoria" {...bind('category')} />
          </div>
          <div>
            <label>Data</label>
            <input type="date" {...bind('date')} />
          </div>
        </div>
        <div style={{marginTop:16, textAlign:'center'}}>
          <button className="btn primary" type="submit">Criar</button>
        </div>
      </form>
    </div>
  )
}

