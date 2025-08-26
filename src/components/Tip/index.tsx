import styles from "./styles.module.css"
import tipIcon from "../../assets/tip.svg"

type Props = {
    tip:string
}

export function Tip({ tip }: Props) {
    return <div  className={styles.tip}>
        <img src={tipIcon} alt="Ícone de dica" />

        <div>
            <h3>Dica</h3>
            <p>{tip}</p>
        </div>
    </div>
} 