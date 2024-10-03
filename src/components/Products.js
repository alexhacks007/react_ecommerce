import { useState , useEffect } from "react"
import {Link} from 'react-router-dom'
import './products.css'
import axios from 'axios';

export function Products(){
    const [products ,setProduct] = useState([]);
    useEffect(() =>{
      axios.get('https://dummyjson.com/products')
  .then(res  => setProduct(res.data.products));
  },[]);

    return (
        <div>
        <p>All Products</p>
        <div className="contain mx-auto">
          {products.map((product) => (
            
            <div id= {product.id} className="divs col-md-3 " style={{width:'18rem'}}>
              <Link to={`/product/${product.id}`} className="link">
              <img src={product.images[0] } className="img" alt="loading"></img>
             <div>
              <p>
                <h5>{product.title}</h5>
              </p>
              <p>
                {product.description};
              </p>
              <h5 className='offer'><span className='off1'>65% off</span>  <span className='off'>999</span> <h3> ${product.price}</h3></h5>
              <p>
               Free delivery
              </p>
              <p>
                {product.rating} rating and {product.reviews[0].rating} reviews
              </p>
              </div>
              </Link>
              </div>
            
            
          ))}
          </div>
      </div>
    )
}


//<pre>{JSON.stringify(product, null, 2)}</pre>
//<h1>{JSON.stringify(products[0])}</h1>
