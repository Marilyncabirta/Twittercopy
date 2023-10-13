import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'luzutvok',
    name: 'LUZU TV',
    isFollowing: true
  },
  {
    userName: 'EdNeutrinos',
    name: 'Ediciones Neutrinos',
    isFollowing: false
  },
  {
    userName: 'EdSigilo',
    name: 'Editorial Sigilo',
    isFollowing: true
  },
  {
    userName: 'ocio_libros',
    name: 'Ocio Casa de Libros',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}