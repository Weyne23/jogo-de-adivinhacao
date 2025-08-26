import styles from './app.module.css'
import { Header } from './components/Header'

export function App() {
  function handleRestartGame() {
    alert("Reiniciar jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        {/* "current", "max" e "onRestart" são os parametros do meu componente */}
        <Header current={5} max={10} onRestart={handleRestartGame}/> 
      </main>
    </div>
  )
}
