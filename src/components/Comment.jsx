import { Handshake, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import PropTypes from 'prop-types'
import { useState } from 'react'

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func,
}

export function Comment({ comment, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(comment)
  }

  function handleLikeComment(){
    setLikeCount((state)=>{
      return state + 1
    });
  }

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={20} />
            </button>

          </header>
          <p>{comment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <Handshake size={20} />
            Obrigado <span>{likeCount}</span>
          </button>    
        </footer>
      </div>
    </div>  
  )
}