import { Link, useNavigate, useParams } from 'react-router-dom'
import { api } from '../services/api'

export default function AdminDetails(){
  const { id } = useParams()
  const nav = useNavigate()
  const c = api.getChampionship(id)
  if(!c) return <p className="muted">Campeonato não encontrado</p>

  return (
    <div className="panel">
      <h2 className="title">Detalhes ADMIN</h2>
      <div className="center" style={{gap:24}}>
        <Link to={`/draw/${id}`} onClick={(e)=>{ e.preventDefault(); nav(`/draw/${id}`)}} className="btn">Sortear</Link>
        <Link to={`/bracket/${id}`} className="btn primary">Chaves</Link>
      </div>
    </div>
  )
}

