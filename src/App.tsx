import styles from "./app.module.css"
import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"

export function App() {
  function handleRestartGame() {
    alert("Reiniciar jogo!");
  }

  return (
    <div className={styles.container}>
      <main>
        {/* "current", "max" e "onRestart" são os parametros do meu componente */}
        <Header current={5} max={10} onRestart={handleRestartGame}/> 
        <Tip tip="Linguagem de programação dinâmica"/>

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          {/* "autoFocus" serve para toda vez que recarregar a pagina ele foca no componente 
              "maxLength" é o tamanho maximo de caracteres do input*/}
          <Input autoFocus maxLength={1} placeholder="?"/>
          <Button title="Confirmar" />
        </div>
      </main>
    </div>
  )
}
