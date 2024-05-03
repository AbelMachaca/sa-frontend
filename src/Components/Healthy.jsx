import React from 'react'
import HProduct from './HProduct'
import Turnip from '../assets/Images/turnip.png'
import Celery from '../assets/Images/Celery.png'
import Amaranth  from '../assets/Images/Amaranth.png'
import Veg1  from '../assets/Images/veg1.jpg'
import Veg2  from '../assets/Images/veg2.jpg'
import Veg3  from '../assets/Images/veg3.jpg'

const Healthy = () => {
  return (
    <div className="container-fluid px-4 py-5 healthy">
        <h2 className='text-center display-4 mt-4 fw-bold'>
            It's Healthy Eating Made Easy
        </h2>
        <div className='container mt-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <HProduct 
                Image = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700695/Sabzi/vuhbdnfktq3tqezsu0eb.jpg"}
                Image2 = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700694/Sabzi/quilucrtcfvnka59vpz5.png"}
                Title = "Delicious"
                Description = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
            />
            <HProduct 
                Image = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700695/Sabzi/zavqneuvtrbrav4hs5dq.jpg"}
                Image2 = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700692/Sabzi/qrq2pje75p8gsodbaqct.png"}
                Title = "Delicious"
                Description = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
            />
            <HProduct 
                Image = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700695/Sabzi/wghwn9sxiisr3omzeckj.jpg"}
                Image2 = {"https://res.cloudinary.com/dsuuinvqp/image/upload/v1714700692/Sabzi/ghaaiuovz4z2nu2zlyiu.png"}
                Title = "Delicious"
                Description = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce"
            />
        </div>
        </div>
    </div>
  )
}

export default Healthy