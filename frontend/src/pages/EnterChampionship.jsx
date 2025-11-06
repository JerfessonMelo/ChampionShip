import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'

export default function EnterChampionship(){
  const { id } = useParams()
  const nav = useNavigate()
  const c = api.getChampionship(id)
  const [teamId, setTeamId] = useState('')
  const teams = api.listTeams()

  const submit = (e) => {
    e.preventDefault()
    if(!teamId) return
    api.enterTeamInChampionship({teamId, championshipId: id})
    nav(`/bracket/${id}`)
  }

  if(!c) return <p className="muted">Campeonato não encontrado</p>

  return (
    <div className="panel">
      <h2 className="title">ENTRE NO CAMPEONATO</h2>
      <div className="center" style={{flexDirection:'column', gap:12}}>
        <div className="subtle">{c.name}</div>
        <div className="subtle">{new Date(c.date || Date.now()).toLocaleDateString('pt-BR')}</div>
        <div className="subtle">{c.prize}</div>
      </div>
      <form onSubmit={submit} style={{marginTop:20}}>
        <label>Equipe</label>
        <select value={teamId} onChange={e=>setTeamId(e.target.value)} required>
          <option value="" disabled>Selecione a equipe</option>
          {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
        <div style={{textAlign:'center', marginTop:16}}>
          <button className="btn primary" type="submit">Entrar no Campeonato</button>
        </div>
      </form>
    </div>
  )
}

