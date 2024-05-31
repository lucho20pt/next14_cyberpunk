import { CardWrapper } from '@/components/cards'
import { data } from '@/app/lib/placeholder-data'

export default function Cards() {
  const cards = data.expansions[0].cards
  return (
    <main className="flex w-full h-auto flex-row items-center justify-between p-5 sm:p-16 bg-gray-400/5">
      <CardWrapper cards={cards} />
    </main>
  )
}
