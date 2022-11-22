import React, { useRef } from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Network from './components/Network'
import About from './components/About'
import Open from './components/Open'
import Team from './components/Team'

const App = () => {
  const main = useRef(null)
  const network = useRef(null)
  const about = useRef(null)
  const open = useRef(null)
  const team = useRef(null)

  const onScrollTo = (name) => {
    switch (name) {
      case 'main':
        main.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'network':
        network.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'about':
        about.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'open':
        open.current.scrollIntoView({ behavior: 'smooth' })
        return
      case 'team':
        team.current.scrollIntoView({ behavior: 'smooth' })
        return
      default:
        return
    }
  }


  return (
    <View>
      <Header onScrollTo={onScrollTo} />
      <Main main={main} />
      <Network network={network} />
      <About about={about} />
      <Open open={open} />
      <Team team={team} />
      <Footer onScrollTo={onScrollTo} />
    </View>
  )
}

export default App
