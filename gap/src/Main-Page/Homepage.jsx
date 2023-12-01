import Header from '../Components/Header'
import './Homepage.css'
import Footer from '../Components/Footer'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../Helper/AxiosConfig';

const Homepage = () => {
  const router = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await api.get('/products/get-all-product');

        if (data.success) {
          setProducts(data.products)
        }
      } catch (error) {
        toast.error(error.data.message)
      }
    }
    getProducts()
  }, [])
  return (
    <div className='Homepage-container'>
      <Header />
      <div className='Homepage-body'>
        <div className='body-first'>
          <p>Black Friday Sale</p>
          <p>40% OFF EVERYTHING</p>
          <p>Because it's treat everyone season.</p>
          <div>
            <button>WOMEN</button>
            <button>MATERNITY</button>
            <button>MEN</button>
            <button>GIRLS</button>
            <button>BOYS</button>
            <button>TODDLER GIRL</button>
            <button>TODDLER BOY</button>
            <button>BABY GIRL</button>
            <button>BABY BOY</button>
          </div>
        </div>
        <div className='body-second'>
          <p>60% Off Really Big Deals</p>
          <p>For wrapping & keeping.</p>
          {products?.length ? <div className='dealproduct'>
            {products.map((pro) => (
              <div>
                <div>
                  <img src={pro.image} alt="" />
                </div>
                <div className='dealpro-title'>
                  <div>
                    <p>{pro.name} from ${pro.price}</p>
                    <p>{pro.category} from $15</p>
                  </div>
                  <button>SHOP NOW +</button>
                </div>
              </div>
            ))}
          </div>
            :
            <div></div>}
        </div>

        <div className='body-third'>
          <p>Black Friday Deals You'll Love</p>
          <div>
            <div className='bodythird-img'>
              <div>
                <img src="https://www.gap.com/webcontent/0027/627/901/cn27627901.jpg" alt="" />
              </div>
              <p>High Rise Cheeky Straight Jeans</p>

            </div>
            <div className='bodythird-img'>
              <div>
                <img src="https://www.gap.com/webcontent/0054/497/919/cn54497919.jpg" alt="" />
              </div>
              <p>Modern Khakis in Straight Fit with GapFlex</p>
            </div>
            <div className='bodythird-img'>
              <div>
                <img src="https://www.gap.com/webcontent/0054/327/580/cn54327580.jpg" alt="" />
              </div>
              <p>Vintage Soft Hoodie</p>
            </div>
            <div className='bodythird-img'>
              <div>
                <img src="https://www.gap.com/webcontent/0051/605/077/cn51605077.jpg" alt="" />
              </div>
              <p>Organic Cotton Vintage V-Neck T-Shirt</p>
            </div>
            <div className='bodythird-img'>
              <div>
                <img src="https://www.gap.com/webcontent/0020/698/908/cn20698908.jpg" alt="" />
              </div>
              <p>Vintage Soft Joggers</p>
            </div>
          </div>
        </div>

        {/* 4th */}

        <div className='body-forth'>
          <p>Shop by Division</p>
          <div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_Women_DESK" alt="" />
              </div>
              <p>WOMEN +</p>

            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_Men_DESK" alt="" />
              </div>
              <p>MEN</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_Girls_DESK" alt="" />
              </div>
              <p>GIRLS</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_Boys_DESK" alt="" />
              </div>
              <p>BOYS</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerGirl_DESK" alt="" />
              </div>
              <p>TODDLER GIRL</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_ToddlerBoy_DESK" alt="" />
              </div>
              <p>TODDLER BOY</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyGirl_DESK" alt="" />
              </div>
              <p>BABY GIRL</p>
            </div>
            <div className='bodyforth-img'>
              <div>
                <img src="https://gapprod.a.bigcontent.io/v1/static/HOL235662_BabyBoy_DESK" alt="" />
              </div>
              <p>BABY BOY</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Homepage