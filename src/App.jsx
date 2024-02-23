import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/renatovcs.png',
      name: 'Renato Curvelo',
      role: 'CTO @renatovcs',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋', },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: 'jane.design/doctorcare' }, 
    ],
    publishedAt: new Date('2024-02-23 05:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1590086782974-e6e7b85e738e?q=50&w=90&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Dúvida',
      role: 'Usuário',
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Fala galeraa 👋', },
      { id: 2, type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: 3, type: 'link', content: 'jane.design/doctorcare' }, 
    ],
    publishedAt: new Date('2024-02-22 05:00:00'),
  }  
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


