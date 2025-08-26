import styles from "./styles.module.css"

import {Letter} from "../Letter"

export type lettersUsedProps = {
    value: string,
    correct: boolean
}

type Props = {
    data: lettersUsedProps[]
}

export function LettersUsed({ data }: Props) {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras utilizadas</h5>

            <div>
                {
                    data.map(({ value, correct })=> (
                        <Letter value={value} size="small" color={correct ? "correct" : "wrong"}/>
                    ))
                }
            </div>
        </div>
    )
}