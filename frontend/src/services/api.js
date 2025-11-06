// Simple localStorage-based mock API to demo UI flows

const DB_KEY = 'nvc_db_v1'

function load(){
  const raw = localStorage.getItem(DB_KEY)
  if(!raw) return { championships: [], teams: [] }
  try { return JSON.parse(raw) } catch { return { championships: [], teams: [] } }
}
function save(db){ localStorage.setItem(DB_KEY, JSON.stringify(db)) }

export const api = {
  listChampionships(){ return load().championships },
  listTeams(){ return load().teams },
  getTeam(id){ return load().teams.find(t=>t.id===id) },
  getChampionship(id){ return load().championships.find(c=>c.id===id) },
  createChampionship(payload){
    const db = load()
    const item = { id: crypto.randomUUID(), status:'aberto', ...payload, teams: [], createdAt: new Date().toISOString() }
    db.championships.unshift(item)
    save(db)
    return item
  },
  createTeam(payload){
    const db = load()
    const item = { id: crypto.randomUUID(), rating: 0, wins:0, history:[], ...payload }
    db.teams.unshift(item)
    save(db)
    return item
  },
  enterTeamInChampionship({ teamId, championshipId }){
    const db = load()
    const c = db.championships.find(x=>x.id===championshipId)
    if(!c) throw new Error('Campeonato não encontrado')
    if(!c.teams.includes(teamId)) c.teams.push(teamId)
    save(db)
    return c
  },
  seed(){
    const db = load()
    if(db.championships.length || db.teams.length) return
    const teams = Array.from({length: 8}, (_,i)=>({ id: crypto.randomUUID(), name:`Equipe #${i+1}`, coach:`Coach ${i+1}`, members:5, category:'A', rating: Math.floor(Math.random()*5)+1, wins: Math.floor(Math.random()*10), history: [] }))
    const champ = { id: crypto.randomUUID(), name:'Nome do Campeonato', prize:'Prêmio', teams: teams.slice(0,6).map(t=>t.id), teamLimit: 12, memberLimit:5, category:'A', date: new Date().toISOString(), status:'aberto', createdAt: new Date().toISOString() }
    db.teams = teams
    db.championships = [champ]
    save(db)
  }
}

