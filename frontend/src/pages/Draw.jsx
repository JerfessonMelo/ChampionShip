import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../services/api'

function Pair({ a, b }){
  return (
    <div className="list-item" style={{justifyContent:'space-between'}}>
      <div>{a}</div>
      <div className="muted">vs</div>
      <div>{b}</div>
    </div>
  )
}

export default function Draw(){
  const { id } = useParams()
  const c = api.getChampionship(id)
  const teams = (c?.teams || []).map(tid => api.getTeam(tid)?.name || 'Equipe')
  const pairs = useMemo(()=> {
    const shuffled = [...teams]
    for(let i=shuffled.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    const ps = []
    for(let i=0;i<shuffled.length;i+=2){ ps.push([shuffled[i]||'—', shuffled[i+1]||'—']) }
    return ps
  },[id])

  if(!c) return <p className="muted">Campeonato não encontrado</p>

  return (
    <div>
      <h2 className="title">Sorteio do campeonato</h2>
      <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div className="list">
          {pairs.map((p, idx) => <Pair key={idx} a={p[0]} b={p[1]} />)}
        </div>
        <div className="panel" style={{minHeight:300}}>
          <div className="muted center" style={{height:'100%'}}>Chaves (placeholder)</div>
        </div>
      </div>
      <div className="center" style={{marginTop:20}}>
        <button className="btn primary">Sortear</button>
      </div>
    </div>
  )
}

