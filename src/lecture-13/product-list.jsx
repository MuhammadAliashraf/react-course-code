import React, { useEffect, useState } from 'react'
import ProductCard from './product-card'
import axios from 'axios'

const ProductList = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
       try {
         const response = await axios.get('https://dummyjson.com/products');
        setData(response.data.products);
       } catch (error) {
        console.error("Error fetching data:", error);
        
       }
    }

    useEffect(() => {
      fetchData()
    }, [])
    

  return (
    <div>
      <ProductCard data={data} />
    </div>
  )
}

export default ProductList
