import { useParams } from 'react-router-dom'
import { api } from '../services/api'

function Match({ a = 'Nome da equipe', b = 'Nome da equipe' }){
  return (
    <div className="match">
      <div>{a}</div>
      <div>{b}</div>
    </div>
  )
}

export default function Bracket(){
  const { id } = useParams()
  const c = api.getChampionship(id)
  const teams = (c?.teams || []).map(tid => api.getTeam(tid)?.name || 'Equipe')
  const padded = [...teams]
  while(padded.length < 8) padded.push('Nome da equipe')

  return (
    <div>
      <h2 className="title">{c?.name || 'Nome do Campeonato'}</h2>
      <div className="bracket">
        <div>
          <Match a={padded[0]} b={padded[1]} />
          <Match a={padded[2]} b={padded[3]} />
          <Match a={padded[4]} b={padded[5]} />
          <Match a={padded[6]} b={padded[7]} />
        </div>
        <div>
          <Match />
          <Match />
        </div>
        <div>
          <Match />
        </div>
        <div>
          <div className="match"><strong>FINAL</strong></div>
        </div>
      </div>
    </div>
  )
}

