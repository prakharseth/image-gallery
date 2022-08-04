import Head from 'next/head'
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';

export default function index() {
  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar/>
      
      <Hero/>

    </div>
  )
}


