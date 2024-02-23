import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Renato Curvelo" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente labore corporis iure expedita repudiandae molestias dolorum quo a. Possimus, fugiat sit amet nisi quis enim ipsa voluptas aperiam ipsum!" 
          />
          <Post 
            author="Celeste López" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sapiente labore corporis iure expedita repudiandae molestias dolorum quo a. Possimus, fugiat sit amet nisi quis enim ipsa voluptas aperiam ipsum!" 
          />      
        </main>
      </div>
    </div>
  )
}


