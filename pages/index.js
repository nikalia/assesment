import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Customer Information Main Page
        </h1>

        <p className={styles.description}>
          Customer Information Main Page
        </p>

        <div className={styles.grid}>
          <Link href="/posts/register/register-customer" className={styles.card}>
            <a>
            <h3>New Customer &rarr;</h3>
            <p>Register new customer here</p>
            </a>
          </Link>

          <Link href="/posts/update/update-customer" className={styles.card}>
            <a>
            <h3>Update customer details&rarr;</h3>
            <p>Update customer details here</p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        Domus
      </footer>
    </div>
  )
}