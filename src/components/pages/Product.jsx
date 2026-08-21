import React, { useEffect, useState } from 'react';
import { datalist } from '../../data/datavalue';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Product = () => {
    let [count,setcount] = useState(0)
//    function filter 
    let getproducts = ()=>{
        console.log("product item");
        
    }

    let getcategory =()=>{
        console.log("category");
        
    }
    
    let getbrands = ()=>{
        console.log("brands")
    
    }
     

 useEffect(() => {
    getproducts();
    getcategory();
    getbrands();    
  }, []);


    return (
        <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-12 sm:px-6 lg:px-8">
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>click</button>   
            <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#e8c9a0]/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#c45c26]/10 blur-3xl" />

            <div className="relative mx-auto max-w-[1320px]">
                <header className="mb-10 text-center">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c45c26]">
                        Curated shelf
                    </p>
                    <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#1c1915] sm:text-5xl">
                        Our Products
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6b6358]">
                        Hand-picked pieces with honest ratings, real reviews, and prices that stay on the tag.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {datalist.map((Object, index) => {
                        return <ProductCart product={Object} keys = {index} key={index.id} />;
                    })}
                </div>
            </div>
        </section>
    );
};

const StarRating = ({ rating = 0 }) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        if (rating >= value) return <FaStar key={i} />;
        if (rating >= value - 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
    });

    return (
        <div className="flex items-center gap-1.5">
            <span className="flex text-[13px] text-[#d4a017]">{stars}</span>
            <span className="text-xs font-medium text-[#6b6358]">{Number(rating).toFixed(1)}</span>
        </div>
    );
};



// cart components


export const ProductCart = ({ product }) => {
    let { title, thumbnail, rating, price, reviewerName, reviews, discountPercentage, category, brand,id} =
        product;
    const reviewer = reviewerName || reviews?.[0]?.reviewerName;

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[#e4d9c8] bg-[#fffaf3] shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-[#d7c4a8] hover:shadow-[0_28px_50px_-24px_rgba(28,25,21,0.4)]">
            <figure className="relative overflow-hidden bg-[#efe6d8]">
                {discountPercentage ? (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#c45c26] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        -{Math.round(discountPercentage)}%
                    </span>
                ) : null}
                {category ? (
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-[#fffaf3]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5c5348] backdrop-blur-sm">
                        {category}
                    </span>
                ) : null}
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </figure>

            <div className="flex flex-1 flex-col p-4">
                {brand ? (
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a08b70]">
                        {brand}
                    </p>
                ) : null}
                <h2 className="font-serif text-lg leading-snug text-[#1c1915] line-clamp-2">{title}</h2>

                <div className="mt-2">
                    <StarRating rating={rating} />
                </div>

                {reviewer ? (
                    <p className="mt-2 text-xs text-[#7a7166]">
                        Reviewed by <span className="font-medium text-[#3f3a33]">{reviewer}</span>
                    </p>
                ) : null}

                <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <div>
                        <p className="text-[10px] uppercase tracking-widest text-[#9a9084]">Price</p>
                        <h2 className="text-xl font-bold text-[#1c1915]">₹ {price}</h2>
                    </div>
                    <Link to={`/product/${id}`}>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-full bg-[#1c1915] px-3.5 py-2 text-xs font-semibold text-[#fffaf3] transition hover:bg-[#c45c26]"
                    >
                        <HiOutlineShoppingBag className="text-sm" />
                       Read More
                    </button>
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default Product;
