// components/cards/card.tsx:

import Image from 'next/image'

/*
 * This file should contain the Card component which represents a single card.
 * It would also include the CardProps interface
 * that defines the shape of the props for this component.
 */
export interface CardProps {
  id: string
  name: string
  image: { original: string }
  kind: string
  attack: number
  defense: number
  summon: number
}

interface Props {
  card: CardProps
  index: number
}

export const Card = ({
  id,
  name,
  image,
  kind,
  attack,
  defense,
  summon,
}: CardProps) => {
  return (
    <div
      key={id}
      className="flex w-full h-auto flex-col items-center cursor-default
       border-black border-8 rounded text-xl bg-red-400/5"
    >
      <header className="px-2 flex w-full flex-row items-center justify-between shadow-inner shadow-gray-200/50 bg-gray-900/70">
        <div className="p-1">{name}</div>
        <div
          className="flex items-center justify-center w-6 h-6 text-sm border rounded-full"
          title="summon"
        >
          <strong>{summon}</strong>
        </div>
      </header>

      <Image
        sizes="100vw"
        className="w-full h-auto border border-black"
        alt={name}
        src={image.original}
        width={500}
        height={500}
      />

      <footer className="flex w-full flex-row items-center justify-between shadow-inner shadow-gray-200/50 bg-gray-900/70">
        <div className="p-1" title="attack">
          <strong className=" text-cyan-500 p-1 shadow shadow-gray-200/50">
            ⚔
          </strong>{' '}
          {attack}
        </div>
        <div className="p-1" title="defense">
          {defense}{' '}
          <strong className="text-amber-500 p-1 shadow shadow-gray-200/50">
            🛡
          </strong>
        </div>
      </footer>
    </div>
  )
}
