import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  ArrowDown,
  ArrowRight,
  Bookmark,
  Calendar,
  NotebookPen,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Card, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex flex-col items-center bg-zinc-900'>
      <div className='w-[700px] h-screen text-2xl text-white mt-10 flex-col gp-10'>
        <div className='flex flex-col justify-between'>
          <Header
            buttonLabel='Movimentações'
            onButtonClick={() => navigate('/movimentacoes')}
          />
        </div>

        <form action=''>
          <div className='flex justify-between items-center gap-4 mt-10 bg-[#252526] border-[#2E2E30] h-[65px] rounded-xl p-4'>
            <Input
              placeholder='Descreva sua movimentação'
              className='placeholder:text-white border-0 bg-[#252526] 
          text-2xl placeholder:text-2xl text-white outline-none'
            />
            <Button className='bg-[#ff8a00] text-white font-medium rounded-lg w-[100px] h-[48px]'>
              Gerar
              <ArrowRight />
            </Button>
          </div>
        </form>
        <div className='flex text-wihte text-xl text-white mt-10'>
          <span className=''>Últimas 4 moviomentações</span>
        </div>
        <div className='mt-10'>
          <Card className='bg-[#252526] border-[#2E2E30] p-6'>
            <CardTitle className='flex justify-between'>
              <div className='flex-col items-center'>
                <Label className='text-xl text-neutral-400'>
                  <ArrowDown color='red' />
                  Tipo: <span className='text-red-700'>Despesa</span>
                </Label>
                <Label className='text-xl text-neutral-400'>
                  <Bookmark color='#58c6fd' />
                  Categoria: <span className='text-white'>Alimentação</span>
                </Label>
              </div>
              <div className='flex-col items-center'>
                <Label className='text-xl text-neutral-400'>
                  <Calendar />
                  Data: <span className='text-red-700'>01/01/2023</span>
                </Label>
                <Label className='text-xl text-neutral-400'>
                  Valor: <span className='text-red-700'>R$50,00</span>
                </Label>
              </div>
            </CardTitle>
            <Separator />
            <div className='flex-col items-center'>
              <Label className='text-xl text-neutral-400'>
                <NotebookPen />
                Descrição:
                <span className='text-white'>Compra de um lanche</span>
              </Label>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
