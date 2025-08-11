import { ArrowRight, Circle } from 'lucide-react'

import { Button } from './ui/button'
interface HeaderProps {
  buttonLabel: string
  onButtonClick: () => void
}
export function Header({ buttonLabel, onButtonClick }: HeaderProps) {
  return (
    <header
      className='justify-between  flex flex-row w-full items-center 
     border-zinc-100 pb-8'
    >
      <div className='flex flex-row items-center gap-2'>
        <Circle color='orange' fill='orange' />
        <span className='text-bold text-white text-2xl '>IA-Finance</span>
      </div>
      <Button variant={'secondary'} onClick={onButtonClick} type='button'>
        {buttonLabel}
        <ArrowRight />
      </Button>
    </header>
  )
}
