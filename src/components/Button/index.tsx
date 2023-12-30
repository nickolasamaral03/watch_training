import { ReactNode } from 'react'
import styles from './Botao.module.css'

interface BotaoProps{
    children?: ReactNode,
    type?: "button" | "submit" | "reset" |  undefined, onClick?: () => void
}

export default function Button({children, onClick, type}:BotaoProps){
    return(
        <button className={styles.button} type={type} onClick={onClick} >
            {children}
        </button>
    )
}