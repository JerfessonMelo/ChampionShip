import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const LS_KEY = 'nvc_auth'

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem(LS_KEY)
    if(raw){
      try { setUser(JSON.parse(raw)) } catch {}
    }
  }, [])

  const login = (username, password) => {
    // demo-only auth: any user works. store token-like payload
    const fake = { id: crypto.randomUUID(), username, token: 'demo.'+btoa(username)+'.token' }
    localStorage.setItem(LS_KEY, JSON.stringify(fake))
    setUser(fake)
  }

  const logout = () => { localStorage.removeItem(LS_KEY); setUser(null) }

  const value = useMemo(() => ({ user, isAuthenticated: !!user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

