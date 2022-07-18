import Head from 'next/head'
import Image from 'next/image'
import styles from '../Home.module.css'

export default function Home(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Gerado por Lúcio Hermano"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Bem vindo a <a href="http://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Começar editando{' '}
                    <code className={styles.code}>pages/index.jsx</code>
                </p>

            </main>





        </div>
    )
}