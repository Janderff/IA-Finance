import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  ArrowDown,
  Bookmark,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  NotebookPen,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function Movimentacoes() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen flex flex-col items-center bg-zinc-900'>
      <div className='w-[700px] h-screen text-2xl text-white mt-10 flex-col gp-10'>
        <div className='flex flex-col  mt-10 justify-between'>
          <Header
            buttonLabel='Voltar'
            onButtonClick={() => {
              navigate('/')
            }}
          />
        </div>
        <div className='flex w-full gap-4 mt-10 bg-[#252526] border-[#2E2E30] h-[65px] rounded-xl p-4'>
          <Input
            placeholder='Busque pelo nome da movimentação'
            className='placeholder:text-white border-0 bg-[#252526] 
          text-2xl placeholder:text-2xl text-white outline-none'
          />
        </div>
        <div className='flex w-full gap-4 mt-5 bg-[#252526] border-[#2E2E30] h-[65px] rounded-xl p-4'>
          <Input
            placeholder='Busque pela categoria'
            className='placeholder:text-white border-0 bg-[#252526] 
          text-2xl placeholder:text-2xl text-white outline-none'
          />
        </div>
        <div className='flex w-full gap-4 mt-5'>
          <Button className='bg-[#ff8a00] w-[49%] text-white font-medium rounded-lg ] h-[48px]'>
            Filtrar
          </Button>
          <Button className='bg-[#252526]  w-[49%] text-white font-medium rounded-lg ] h-[48px]'>
            Limpar
          </Button>
        </div>
        <div className='flex text-wihte text-xl text-white mt-10'>
          <h6>Todas as movimentações</h6>
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
        <div className='w-full flex justify-between mt-5 text-zinc-400 '>
          <div className='flex justify-between w-[70%] text-[20px]'>
            <span>200 Movimentações</span>
            <span>Página 1 de 10</span>
          </div>
          <div className='space-x-2 '>
            <Button className='bg-[#252526] border-[#2E2E30]' size='sm'>
              <ChevronsLeft />
            </Button>
            <Button className='bg-[#252526] border-[#2E2E30]' size='sm'>
              <ChevronLeft />
            </Button>
            <Button className='bg-[#252526] border-[#2E2E30]' size='sm'>
              <ChevronRight />
            </Button>
            <Button className='bg-[#252526] border-[#2E2E30]' size='sm'>
              <ChevronsRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
