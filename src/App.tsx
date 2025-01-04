import styles from './App.module.css'
import { About } from './component/About/About'
import { Hero } from './component/Hero/Hero'
import { Navbar } from './component/Navbar/Navbar'

function App() {

  return (
  <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About/>
  </div>    
  )
}

export default App
