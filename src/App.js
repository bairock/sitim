import { Routes, Route } from 'react-router-dom'
import { View } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Crew from './pages/Crew'
import About from './pages/About'
import Open from './pages/Open'
import Network from './pages/Network'

function App() {
  return (
    <View>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='crew' element={<Crew />} />
        <Route path='open' element={<Open />} />
        <Route path='network' element={<Network />} />
      </Routes>
      <Footer />
    </View>
  )
}

export default App
