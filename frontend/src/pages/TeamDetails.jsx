import { useParams } from 'react-router-dom'
import { api } from '../services/api'

export default function TeamDetails(){
  const { id } = useParams()
  const team = api.getTeam(id)
  if(!team) return <p className="muted">Equipe não encontrada</p>

  return (
    <div className="panel">
      <h2 className="title">{team.name}</h2>
      <div className="center" style={{flexDirection:'column', gap:10}}>
        <div>Vitórias</div>
        <div className="stars" style={{fontSize:24}}>{'★'.repeat(team.rating || 0)}</div>
        <div style={{fontSize:28, marginTop:4}}>{team.wins}</div>
      </div>
      <div style={{marginTop:28}}>
        <h3>Histórico</h3>
        <div className="list">
          {(team.history?.length ? team.history : Array.from({length:6},(_,i)=>({ name:`Nome do campeonato`, date:'Data', result: i<4?'Campeão':'Derrota', score:'0x0'}))).map((h,idx) => (
            <div className="list-item" key={idx}>
              <div><strong>{h.name}</strong></div>
              <div className="subtle">{h.date}</div>
              <div>{h.result}</div>
              <div className="subtle">{h.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

