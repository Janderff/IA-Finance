import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard'
import { Movimentacoes } from '@/Pages/Movimentacoes'

export function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/movimentacoes' element={<Movimentacoes />} />
      </Routes>
    </BrowserRouter>
  )
}
