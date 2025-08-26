import styles from "./app.module.css"
import { useEffect, useState } from "react"

import { WORDS } from "./utils/words"
import type { Challenge } from "./utils/words"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed, type lettersUsedProps } from "./components/LettersUsed"

export function App() {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [letter, setLetter] = useState("");
  const [lettersUsed, setLettersUsed] = useState<lettersUsedProps[]>([]);
  //Caso meu estado tenha um tipo especifico precisa indicar qual vai ser o tipo dele.
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  
  function handleRestartGame() {
    alert("Reiniciar jogo!");
  }

  function startGame() {
    //"Math.random()" gera um numero de 0 a 1 de forma randomica 
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setLetter("");
    setAttempts(0);
  }

  function handlerConfirm() {
    if(!challenge)
      return;

    if(!letter.trim()) {
      return alert("Digite uma letra!")
    }

    const value = letter.toUpperCase();
    const exists = lettersUsed.find((used) => used.value === value);

    if(exists)
      return alert("Você ja tentou essa letra!");

    const hits = challenge.word.toUpperCase().split("").filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;
    //Aqui esse preventState é o array que ja esta no lettersUsed, então esta pegando todo o array antes e adicionando a letra nova, se não fizer assim, colocar so o {value, correct: true}, ele sempre vai ficar substituindo o valor de vez adicionar
    setLettersUsed((preventState) => [...preventState, {value, correct}]);
    setScore(currentScore);
    setLetter("");
  }

  useEffect(() => {
    startGame();
  }, [])

  if(!challenge)
    return;

  return (
    <div className={styles.container}>
      <main>
        {/* "current", "max" e "onRestart" são os parametros do meu componente */}
        <Header current={attempts} max={10} onRestart={handleRestartGame}/> 
        <Tip tip={challenge.tip}/>

        <div className={styles.word}>
          {
            challenge.word.split("").map((wordSelected) => (
              <Letter value={wordSelected} />
            ))
          }
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          {/* "autoFocus" serve para toda vez que recarregar a pagina ele foca no componente 
              "maxLength" é o tamanho maximo de caracteres do input*/}
          <Input autoFocus maxLength={1} placeholder="?" value={letter} onChange={(e) => setLetter(e.target.value)}/>
          <Button title="Confirmar" onClick={handlerConfirm}/>
        </div>

        <LettersUsed data={lettersUsed}/>
      </main>
    </div>
  )
}
