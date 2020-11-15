import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import TopBar from '../components/global/TopBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Freedom Evenden</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TopBar />
    </div>
  );
}
