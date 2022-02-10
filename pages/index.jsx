import styles from '../styles/Home.module.css'
import Header from '../layouts/Header'
import Hero from "../components/Hero";
import Activities from '../components/Activities';
import CitiesGrid from '../components/CitiesGrid';
import Footer from '../layouts/Footer'


export default function Home() {
  return (
    <>   
      <Header />
      <Hero />     
      <Activities />
      <CitiesGrid />
      <Footer />
    </>
  )
}