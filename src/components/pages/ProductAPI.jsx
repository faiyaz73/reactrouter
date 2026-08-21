import React from 'react'

export default function ProductAPI() {
    return (
        <>
            <section className="grid lg:grid-cols-[20%_auto] grid-cols-1 gap-10 my-10">
                <aside className=' shadow-md shadow-red-400/30 ms-6'>
                    <div className='flex justify-between items-center p-2'>
                        <h1 className='text-lg font-semibold text-[17px]'>FILTER</h1>
                        <button className='text-lg font-semibold text-[17px] text-[#FF607A] hover:text-[#d7c4a8]'>
                            CLEAR ALL
                        </button>
                    </div>
                    <div className='p-2 h-[230px] overflow-y-auto shadow-md shadow-gray-500/30'>
                        <h1 className='font-semibold text-[15px]'>CATEGORY</h1>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="electronics" />
                                <label htmlFor="electronics">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="clothing" />
                                <label htmlFor="clothing">Furniture</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                        </ul>
                    </div>
                    <div className='p-2 h-[230px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>BRAND</h1>
                        <ul className='flex flex-col gap-2 mt-2'>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="electronics" />
                                <label htmlFor="electronics">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="clothing" />
                                <label htmlFor="clothing">Furniture</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                            <li className='flex items-center gap-2'>
                                <input type="checkbox" id="home" />
                                <label htmlFor="home">Groceries</label>
                            </li>
                        </ul>
                    </div>
                    <div className=' p-2 h-[170px] overflow-y-auto shadow-md shadow-gray-400/30'>
                        <h1 className='text-lg font-semibold text-[15px]'>PRICE</h1>
                        <ul className='flex flex-col gap-2 mt-2'>
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
                        <ul className='flex flex-col gap-2 mt-2'>
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
                        <h1 className='text-lg font-semibold text-[15px]    '>RATING</h1>
                        <ul className='flex flex-col gap-2 mt-2'>
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
                <div className='shadow-md shadow-red-400/30 me-6 border-1'>
                <div className="flex justify-end">
                 <select name="" id="" className="border-1 border-[#2d2d2d] rounded-md p-2  m-2">
                    <option value="" className="p-2">Sort by : Recommended</option>
                    <option value="" className="p-2">Name : A to Z</option>
                    <option value="">Name : Z to A</option> 
                    <option value="">Price : Low to High</option> 
                    <option value="">Price : High to Low</option> 
                    <option value="">Discounted Price : Low to High</option> 
                    <option value="">Discounted Price : High to Low</option> 
                    <option value="">Rating : Low to High</option> 
                    <option value="">Rating : High to Low</option>
                 </select>
                </div>  
                <div clasName="border-3">
dfdsf
                </div>
                </div>

            </section>
        </>
    )
}
