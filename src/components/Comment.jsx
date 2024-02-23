import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/renatovcs.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
                <strong>Renato Curvelo</strong>
                <time title="22 de fevereiro às 15:00" dateTime="2023-02-22 15:00:00">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
                <Trash size={20} />
            </button>

          </header>
          <p>Muito bom</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>    
        </footer>
      </div>
    </div>  
  )
}