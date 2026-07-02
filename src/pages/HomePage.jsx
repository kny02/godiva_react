import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Brand from '../sections/Brand.jsx'
import Recommendation from '../sections/Recommendation.jsx'
import Product from '../sections/Product.jsx'
import Beyond from '../sections/Beyond.jsx'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brand />
        <Recommendation />
        <Product />
        <Beyond />
      </main>
      <Footer />
    </>
  )
}
