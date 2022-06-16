import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./Components/Post"

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
            author="Estevão Gabriel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta placeat praesentium reiciendis fugiat veniam, provident quo, iure minima, vitae inventore officia aut cum voluptate! Vero dolorem itaque provident in!"
          />
          <Post
            author="Gabriel Buzzi"
            content="Novo post"
          />
        </main>
      </div>
    </div>
  )
}