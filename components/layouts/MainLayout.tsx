import { FC } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './MainLayout.module.css'
import { NavBar } from '../NavBar'

export const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <NavBar />

          <main className={styles.main}>
           
            { children }

          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      )
}