// components/cards/card-wrapper.tsx:
/*
 * This file would contain a component that accepts an array of cards as props
 * and maps over the array, rendering a Card component for each item.
 * This is where you would handle the layout of the card list.
 */

import { Card, CardProps } from '@/components/cards/card'

interface CardWrapperProps {
  cards: CardProps[]
}

export const CardWrapper = ({ cards }: CardWrapperProps) => {
  return (
    <div className="w-full grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-8 py-10 rounded-xl border-4 border-black bg-cyan-400/10">
      {cards.map((card, index) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  )
}
