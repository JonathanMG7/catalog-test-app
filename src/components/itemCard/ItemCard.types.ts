export type ItemCardProps = {
  onClick: (id: string) => void
  name?: string,
  pokemon?: Pokemon
}

export type Pokemon = {
  types: PokemonType[]
  name: string
  id: number
  image: string,
  height: number,
  moves: [{
    move: any
  }]
  weight: number
}

type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}