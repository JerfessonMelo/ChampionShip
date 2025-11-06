import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

export default function Ranking(){
  const [teams, setTeams] = useState([])
  useEffect(()=>{ api.seed(); setTeams(api.listTeams()) }, [])

  return (
    <div>
      <h2 className="title">Ranking de Equipes</h2>
      <div className="list">
        {teams.map((t, i) => (
          <div key={t.id} className="list-item">
            <div>
              <strong>#{i+1} {t.name}</strong>
              <div className="stars">{'★'.repeat(t.rating || 0)}</div>
            </div>
            <Link to={`/team/${t.id}`} className="btn">Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

