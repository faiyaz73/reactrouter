import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Lodding from './Lodding';

export default function ProductAPI() {
    let [categoryData, setCategory] = useState([])
    let [brandData, setbrand] = useState([])
    let [productData, setProductData] = useState([])
    let [Loadding,setLodding] = useState(false)
    let [sorting,setsorting] = useState('')
    let [category,setcategory] = useState([])
    let [brandFilter,setbrandFilter] = useState([])

    console.log(category)

    //   this is a  cateory data api fetch 
    let getCategory = async()=>{
    let resdata = await axios.get('https://www.wscubetech.co/ecommerce-api/categories.php')
    let data = await resdata.data.data;
    setCategory(data);
    
    }


    //   this is a  brand data api fetch 
    let getbrand = async()=>{
    let resdata = await axios.get('https://www.wscubetech.co/ecommerce-api/brands.php')
    let data = await resdata.data.data;
    setbrand(data);
   
    }
  

    let categoryFiler = (e)=>{
        let value =  e.target.value
        setcategory(pre=>
        [...pre,value])
       

    }

    let brandeHandleFilter = (e)=>{
        let value =  e.target.value
        setbrandFilter (pre=>
        [...pre,value])
       

    }

    
    let getProduct = ()=>{
        setLodding(true)
        axios.get('https://www.wscubetech.co/ecommerce-api/products.php',{
          
        //   This is a params provied by backand developer  
          params: {
          page: 1,
          limit: 20,
          sorting: sorting,
          price_from: null,
          price_to: null,
          discount_from: null,
          discount_to: null,
          name: null,
          rating: null,
          brands: brandFilter.join(','),
          categories:category.join(',')
 
        }

        })
        .then((resdata)=>resdata.data.data)
        .then((finalRes)=>{
            setProductData(finalRes);
             setLodding(false)
            
        })
    }
    
    

    useEffect(()=>{
        getProduct()
    },[sorting,category,brandFilter])


    useEffect(() => {
        getCategory()
        getbrand()
    }, [])

    return (
        <>
            <section className="grid lg:grid-cols-[20%_auto] grid-cols-1 gap-5 my-10 items-start ">
                <aside className='shadow-md shadow-red-400/30 ms-4 p-1'>
                    <div className='flex justify-between items-center p-3 border-b-2'>
                        <h1 className='text-lg font-semibold text-[15px]'>FILTER</h1>
                        <button className='text-lg font-semibold text-[15px] text-[#FF607A] hover:text-[#d7c4a8]'>
                            CLEAR ALL
                        </button>
                    </div>
                    <div className='p-2 h-[230px] overflow-y-auto shadow-md shadow-gray-500/30'>
                        <h1 className='font-semibold text-[15px]'>CATEGORY</h1>
                        <ul className='flex flex-col gap-2 mt-2 text-[13px] '>
                            {
                                categoryData.map((obj,index)=>{
                                    return(
                                 <li className='flex items-center gap-2' key={index}>
                                <input type="checkbox" value={obj.slug} onChange={categoryFiler} key ={index.id}/>
                                 {obj.name}
                              </li>

                                    )
                                })
      
                            }
                             
                              <li className='flex items-center gap-2'>
                                <input type="checkbox" />
                                 Furniture
                              </li>
                             
                                   
                           
                            
                        </ul>
                    </div>
                    <div className='p-2 h-[230px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>BRAND</h1>
                        <ul className='flex flex-col gap-2 mt-2 '>


                           {
                                brandData.map((obj,index)=>{
                                    return(
                                 <li className='flex items-center gap-2 text-[13px]' key={index}>
                                <input type="checkbox" 
                                value={obj.slug}
                                onChange={brandeHandleFilter} key ={index.id}/>
                                 {obj.name}
                              </li>

                                    )
                                })
      
                            }
                            
                  
                            
                        </ul>
                    </div>
                    <div className=' p-2 h-[170px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>PRICE</h1>
                        <ul className='flex flex-col gap-2 mt-2 text-[15px]'>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="price" id="price1" />
                                <label htmlFor="price1">Rs. 10 to Rs. 250</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="price" id="price2" />
                                <label htmlFor="price2 ">Rs. 250 to Rs. 500</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="price" id="price3" />
                                <label htmlFor="price3">Rs. 500 to Rs. 1000</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="price" id="price4" />
                                <label htmlFor="price4">Rs. 1000 and above </label>
                            </li>


                        </ul>
                    </div>
                    <div className=' p-2 h-[190px] py-4 t-[-60px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>DISCOUNT RANGE</h1>
                        <ul className='flex flex-col gap-2 mt-2 text-[15px]'>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="discount" id="discount1" />
                                <label htmlFor="discount1">5% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="discount" id="discount2" />
                                <label htmlFor="discount2 ">10% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="discount" id="discount3" />
                                <label htmlFor="discount3">15% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="discount" id="discount4" />
                                <label htmlFor="discount4">20% and above </label>
                            </li>


                        </ul>
                    </div>
                    <div className='p-2 h-[190px] py-4 overflow-y-auto  shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>RATING</h1>
                        <ul className='flex flex-col gap-2 mt-2 text-[15px]'>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="rating" id="rating1" />
                                <label htmlFor="rating1">4★ & above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="rating" id="rating2" />
                                <label htmlFor="rating2">3★ & above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="rating" id="rating3" />
                                <label htmlFor="rating3">2★ & above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="radio" name="rating" id="rating4" />
                                <label htmlFor="rating4">1★ & above</label>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className='shadow-md shadow-red-400/30 me-6'>
                <div className="flex justify-end">
                 <select name="" onChange={(e)=>setsorting(e.target.value)} id="" className="border-1 border-[#2d2d2d] rounded-md p-2  m-2">
                    <option value="" className="p-2">Sort by : Recommended</option>
                    <option value="1" className="p-2">Name : A to Z</option>
                    <option value="2">Name : Z to A</option> 
                    <option value="3">Price : Low to High</option> 
                    <option value="4">Price : High to Low</option> 
                    <option value="5">Discounted Price : Low to High</option> 
                    <option value="6">Discounted Price : High to Low</option> 
                    <option value="7">Rating : Low to High</option> 
                    <option value="8">Rating : High to Low</option>
                 </select>
                </div>

                {
                 Loadding ?   <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                <Lodding/>
                <Lodding/>
                <Lodding/>
                <Lodding/>
                <Lodding/>
                <Lodding/>
                <Lodding/>
                <Lodding/>
                </div> 
                :
                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-1 gap-2">
               
               
                 {
                    productData.map((obj,index)=>{
                        return(
                             <ProductCard product = {obj} key={index} />

                        )
                    })
                 }
                 
                
                 
                </div>
                }
                
               
                
                </div>
               

            </section>
        </>
    )
}



let ProductCard=({product})=>{
    let {name,images,price,description}  = product
      return(
        <>
        
        <div className='border-1 border-[#2d2d2d] m-2 rounded-md shadow-md shadow-gray-400/30'>
            
            <figure>
                <img className="w-full h-full object-cover" src={product.image}
                 alt="" />
                <div className='p-4'>
                <h2 className='font-bold'>{product.name}</h2>
                <p className='first-letter:uppercase'>{product.description}</p>
                
                 <p className="font-bold pt-3">{product.price}<span className='font-normal text-[12px] text-gray-600'> Rs. 350 (5)</span> </p>
                <button className="bg-amber-300 w-full mt-4 font-bold p-1">Add to Cart</button>
                </div>
               
            </figure>
        </div>
        </>
      )
}