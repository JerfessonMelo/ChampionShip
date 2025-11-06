import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../services/api'

export default function Home(){
  const [list, setList] = useState([])

  useEffect(() => { api.seed(); setList(api.listChampionships()) }, [])

  if(!list.length) return <p className="muted">Não há campeonatos ainda. Crie o primeiro!</p>

  return (
    <div>
      <h1 className="title">Campeonatos ativos</h1>
      <div className="grid cols-3">
        {list.map(c => (
          <div key={c.id} className="card">
            <div className="card-header">{c.name}</div>
            <div className="card-body">
              <div className="subtle">prêmio: {c.prize || '—'}</div>
              <h4>Equipes</h4>
              <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
                {c.teams.slice(0,12).map((tId, idx) => (
                  <span key={tId+idx} className="muted">Equipe #{idx+1}</span>
                ))}
              </div>
              <div style={{marginTop:12}} className="subtle">Andamento</div>
            </div>
            <div className="card-footer spaced">
              <Link className="btn" to={`/enter/${c.id}`}>Entrar</Link>
              <Link className="btn primary" to={`/admin/${c.id}`}>Detalhes</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

