import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1572040917409-60ca0cfcc2df?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>

        <Avatar hasBorder src="https://github.com/renatovcs.png"/>

        <strong>Renato</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href='#'>
            <PencilLine size={20} />
            Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}