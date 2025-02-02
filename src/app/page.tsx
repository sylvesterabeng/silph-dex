import Image from 'next/image'
import styles from './page.module.css'
import { fetchPokedex } from './api/pokedex'
import { fetchLatestGeneration } from './api/generation'

// TODO: Create components & add designs
const Home = async () => {
  const generation = await fetchLatestGeneration()
  // const latestGeneration = generation[generation.length - 1].id
  const pokemons = await fetchPokedex()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>National Pokedex</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No.</th>
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
                      <span>#{String(pokemon.id).padStart(4, '0')}</span>
                      <img
                        src={
                          pokemon.sprites[0].sprites['official-artwork']
                            .front_default
                        }
                      ></img>
                    </div>
                  </td>
                  <td>{pokemon.specy.names[0].name}</td>
                  <td>
                    <div className="table-row">
                      {pokemon.types.map((t: any) => (
                        <div
                          key={`${pokemon.id}-${t.type.name}`}
                          className={`type-wrapper type-${t.type.name}`}
                        >
                          {t.type.name}
                        </div>
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
      </main>
    </div>
  )
}

export default Home
