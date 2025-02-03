import { TypeBadge } from '@components'
import { Avatar, Box, Heading } from '@radix-ui/themes'
import React from 'react'

interface Props {
  label: string
  pokemons: any
}

const Index: React.FC<Props> = ({ label, pokemons }) => {
  return (
    <Box>
      <Heading
        size={{
          initial: '6',
          md: '8',
        }}
      >
        {label}
      </Heading>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Abilities</th>
            </tr>
          </thead>
          <tbody>
            {pokemons.map((pokemon: any, idx: any) => (
              <tr key={idx}>
                <td>
                  <div className="table-row">
                    <Box>#{String(pokemon.id).padStart(4, '0')}</Box>
                  </div>
                </td>
                <td>
                  <Avatar
                    src={
                      pokemon.sprites[0].sprites['official-artwork']
                        .front_default
                    }
                    fallback=""
                    color="gray"
                  ></Avatar>
                </td>
                <td>{pokemon.specy.names[0].name}</td>
                <td>
                  <div className="table-row">
                    {pokemon.types.map((t: any) => (
                      <TypeBadge
                        type={t.type.name}
                        key={`${pokemon.id}-${t.type.name}`}
                      ></TypeBadge>
                    ))}
                  </div>
                </td>
                <td>
                  {pokemon.abilities.map((a: any) => (
                    <div
                      key={`${pokemon.id}-${a.ability.abilityNames[0].name}`}
                    >
                      {a.ability.abilityNames[0].name}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  )
}

export default Index
