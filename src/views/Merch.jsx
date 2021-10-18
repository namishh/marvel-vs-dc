import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import MerchProduct from '../components/MerchProduct'
import {HashLoader} from 'react-spinners'

const Merch = () => {
  const [load, setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 3000);
  const css = `
  position : absolute;
  top : 50%;
  left : 50%;
  transform : translate(-50%, -50%)
`
  return (
    <div className="">
      {load ? <HashLoader css={css} size={72} color="blue"/> : <div>
      <title>Our Brand New Merch!</title>
      <Navbar icon="blue" background="blue"/>
      <div className="merch">
        <h1 className="merch-title">Buy Our Merchandise</h1>
        <div className="merch-products">
          <MerchProduct
            img="https://rlv.zcache.com/svc/view?rlvnet=1&realview=113562383382757001&design=c6e7831c-d342-4c10-91dd-7f6298c6a82d&style=hanes_mens_crew_tshirt_5250&size=a_s&color=white&max_dim=704"
            name="Spider Man T-Shirt"
            price="20.00"
            link="https://www.shopdisney.com/spider-man-t-shirt-for-men-customizable-7200002257ZES.html?isProductSearch=0&plpPosition=25"
          />
          <MerchProduct
            img="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720106271870?fmt=webp&qlt=70&wid=652&hei=652"
            name="Hulk Holiday T-Shirt"
            price="24.99"
            link="https://www.shopdisney.com/hulk-holiday-t-shirt-for-adults-6720106271870M.html?isProductSearch=0&plpPosition=1&guestFacing=Franchises-Marvel-Clothing"
          />
         <MerchProduct
            img="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720106271871?fmt=webp&qlt=70&wid=652&hei=652"
            name="Avengers Cartoon T-Shirt"
            price="24.99"
            link="https://www.shopdisney.com/avengers-holiday-t-shirt-for-adults-6720106271871M.html?isProductSearch=0&plpPosition=3&guestFacing=Franchises-Marvel-Clothing"
          />
          <MerchProduct
            img="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6720106271873?fmt=webp&qlt=70&wid=652&hei=652"
            name="Avengers Sweatshirt"
            price="35.00"
            link="https://www.shopdisney.com/avengers-ugly-holiday-sweatshirt-for-adults-6720106271873M.html?isProductSearch=0&plpPosition=2&guestFacing=Franchises-Marvel-Clothing"
          />
          {/* DC MERCH */}
          <MerchProduct
            img="https://www.redwolf.in/image/cache/catalog/mens-t-shirts/justice-league-t-shirt-1-700x700.jpg"
            name="Justice League T-Shirt"
            price="15.00"
            link="https://www.redwolf.in/justice-league-icon-t-shirt-india"
          />
          <MerchProduct
            img="https://www.redwolf.in/image/cache/catalog/mens-t-shirts/i-chase-bad-boys-t-shirt-india-700x700.jpg"
            name="Wonder Woman T-Shirt"
            price="20.00"
            link="https://www.redwolf.in/i-chase-bad-boys-t-shirt-india"
          />
          <MerchProduct
            img="https://www.redwolf.in/image/cache/catalog/sweatshirts/batman-emblem-hoodie-india-700x700.jpg"
            name="Batman Hoodie"
            price="35.50"
            link="https://www.redwolf.in/batman-emblem-hoodie-india"
          />
          <MerchProduct
            img="https://www.redwolf.in/image/cache/catalog/sweatshirts/superman-logo-hoodie-india-1-700x700.jpg"
            name="SuperMan Hoodie"
            price="35.00"
            link="https://www.redwolf.in/dc-comics-superman-logo-sweatshirt-india"
          />
        </div>
      </div>
    </div>}
    </div>
  )
}

export default Merch
