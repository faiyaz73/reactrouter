import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Lodding from './Lodding';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';

export default function ProductAPI() {
    let [categoryData, setCategory] = useState([])
    let [brandData, setbrand] = useState([])
    let [productData, setProductData] = useState([])
    let [Loadding,setLodding] = useState(false)
    let [sorting,setsorting] = useState('')
    let [category,setcategory] = useState([])
    let [brandFilter,setbrandFilter] = useState([])
    let [priceFilter, setpriceFilter] = useState({
    from: '',
    to: ''
})
    let [discountFilter, setdiscountFilter] = useState('')
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages,setTotalpage] = useState('');
      const [limit,setlimit] = useState('')

   

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
  
//  Category filter 

    let categoryFiler = (e)=>{
        let value =  e.target.value
        let checked = e.target.checked;
        setCurrentPage(1)
        if(checked){
         setcategory(pre => [...pre, value]);
        }
        else{
          setcategory(pre => pre.filter(item => item !== value));
        } 
    }


    // Brand filter 

    let brandeHandleFilter = (e)=>{
        let value =  e.target.value
       let checked = e.target.checked;
       setCurrentPage(1)
        if(checked){
            setbrandFilter (pre=> [...pre,value])
        }else{
            setbrandFilter(pre => pre.filter(item => item !== value));
        }
    } 

    // price filter 

   let PriceHandleFilter = (e) => {
    let value = e.target.value;
    setCurrentPage(1)

    if (value === '1') {
        setpriceFilter({
            from: 10,
            to: 250
        })
    }

    if (value === '2') {
        setpriceFilter({
            from: 250,
            to: 500
        })
    }

    if (value === '3') {
        setpriceFilter({
            from: 500,
            to: 1000
        })
    }

    if (value === '4') {
        setpriceFilter({
            from: 1000,
            to: ''
        })
    }
}
   
    //   Discoun filter 

    let DiscountHandleFilter = (e) => {
    let value = e.target.value;
    setCurrentPage(1)
    setdiscountFilter(value);
    }
    
    let getProduct = ()=>{
        setLodding(true)
        axios.get('https://www.wscubetech.co/ecommerce-api/products.php', {
    params: {
        page:currentPage,
        // limit:8,
        sorting: sorting,
        price_from: priceFilter.from,
        price_to: priceFilter.to,
        discount_from: discountFilter,
        discount_to: '',
        name: null,
        rating: null,
        brands: brandFilter.join(','),
        categories: category.join(',')
    }
    })
   .then((resdata) => {
    console.log("FULL API RESPONSE:", resdata.data);
    setProductData(resdata.data.data);
    setTotalpage(resdata.data.total_pages);
    setlimit(resdata.data.limit);
    setLodding(false);
   
    
    });   
    }
    
    

    useEffect(()=>{
        getProduct()
    },[sorting,category,brandFilter,priceFilter,currentPage,discountFilter])


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
                                <input 
                                  type="radio" 
                                  name="price" 
                                  value="1"
                                  onChange={PriceHandleFilter}
                                  id="price1" />
                                <label htmlFor="price1">Rs. 10 to Rs. 250</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                type="radio" 
                                  name="price" 
                                  value="2"
                                  onChange={PriceHandleFilter}
                                  id="price2"
                                   />
                                <label htmlFor="price2 ">Rs. 250 to Rs. 500</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                 type="radio" 
                                  name="price" 
                                  value="3"
                                  onChange={PriceHandleFilter}
                                  id="price3"
                                    />
                                <label htmlFor="price3">Rs. 500 to Rs. 1000</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                 type="radio" 
                                  name="price" 
                                  value="4"
                                  onChange={PriceHandleFilter}
                                  id="price4"
                                   />
                                <label htmlFor="price4">Rs. 1000 and above </label>
                            </li>


                        </ul>
                    </div>
                    <div className=' p-2 h-[190px] py-4 t-[-60px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>DISCOUNT RANGE</h1>
                        <ul className='flex flex-col gap-2 mt-2 text-[15px]'>
                            <li className='flex items-center gap-2'>
                                <input 
                                 type="radio"
                                 name="discount"
                                 value="5"
                                 onChange={DiscountHandleFilter}
                                 id="discount1" />
                                <label htmlFor="discount1">5% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                 type="radio"
                                 name="discount"
                                 value="10"
                                 onChange={DiscountHandleFilter}
                                id="discount2" />
                                <label htmlFor="discount2 ">10% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                type="radio"
                                name="discount"
                                value="15"
                                onChange={DiscountHandleFilter}
                                id="discount3" />
                                <label htmlFor="discount3">15% and above</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input 
                                 type="radio"
                                 name="discount"
                                 value="20"
                                 onChange={DiscountHandleFilter}
                                id="discount4" />
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
                <div className='shadow-md shadow-red-400/30 me-6 pb-5'>
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
                 <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-2 pb-3">
               
               
                 {
                    productData.map((obj,index)=>{
                        return(
                             <ProductCard product = {obj} key={index} />

                        )
                    })
                 }
                 
                
                 
                </div>
                }
                
                <ResponsivePagination
                 current={currentPage}
                 total={totalPages}
                 onPageChange={setCurrentPage}
                />
                
                </div>
               

            </section>
        </>
    )
}



let ProductCard=({product})=>{

     

    let {name,image,price,description,rating,discount_percentage,id,qty}  = product

      let addtocart = ()=>{
        let carddata = {
            "id":id,
            "name":name,
            "price":price,
            "images":image,
            "description":description,
            "rating":rating,
            "discount_percentage":discount_percentage,
            qty:1
        }
        console.log("cart data colect : ",carddata)
    
   } 
      return(
        <>
        
        <div className='border-1 border-[#2d2d2d] m-2 rounded-md shadow-md shadow-gray-400/30'>
            
            <figure>
                <img className="w-full h-full object-cover" src={product.image}
                 alt="" />
                <div className='p-4'>
                <h2 className='font-bold'>{product.name}</h2>
                <p className='first-letter:uppercase'>{product.description}</p>
                
                 <p className="font-bold pt-3">{product.price}<span className='font-normal text-[12px] text-gray-600'> Rs. 350 (5) </span>  <span className="ml-2 inline-flex items-center gap-1   px-1.5 py-0.5 rounded">
    ⭐           {rating}</span></p>
                  <p className="font-bold pt-3 text-[12px] text-gray-600">Discount : {product.discount_percentage}</p>
                  
                  

                <button className="bg-amber-300 w-full mt-4 font-bold p-1 hover:cursor-pointer hover:bg-amber-600"
                onClick={addtocart}
                >Add to Cart</button>
                </div>
               
            </figure>
        </div>
        </>
      )
}