import Head from 'next/head'
import Container from '../Container'
import styles from './Layout.module.css'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
      </Head>

      <Container>
        <h1 className='title'>
          Todo <span className='rad-color'>TaskApp</span>
        </h1>

        <main className={styles.main}>{children}</main>
      </Container>
    </>
  )
}

export default Layout
