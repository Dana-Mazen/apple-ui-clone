import Hero from '../components/hero'
import Themes from '../components/themes'
import Products from '../components/Prroducts'

import products from "../data/products";

const watchProducts = products.filter((p) => p.category === "watch");
//filtering watches for home only
function Home() {
  return (
    <>
    
      <Hero />
      <Themes />
      <Products items={watchProducts} />
     
    </>
  )
}
export default Home
