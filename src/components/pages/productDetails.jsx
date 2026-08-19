import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { datalist } from '../../data/datavalue';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { HiOutlineShoppingBag, HiOutlineArrowLeft } from 'react-icons/hi';

const StarRating = ({ rating = 0, size = 'text-[13px]' }) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const value = i + 1;
        if (rating >= value) return <FaStar key={i} />;
        if (rating >= value - 0.5) return <FaStarHalfAlt key={i} />;
        return <FaRegStar key={i} />;
    });

    return (
        <div className="flex items-center gap-1.5">
            <span className={`flex text-[#d4a017] ${size}`}>{stars}</span>
            <span className="text-sm font-medium text-[#6b6358]">{Number(rating).toFixed(1)}</span>
        </div>
    );
};

const ProductDetails = () => {
    let { id } = useParams();
    let dataValue = datalist.find((obj) => obj.id == id);
    const [activeImage, setActiveImage] = useState(null);

    if (!dataValue) {
        return (
            <section className="bg-[#f6f1e8] px-4 py-20 text-center">
                <h1 className="font-serif text-3xl text-[#1c1915]">Product not found</h1>
                <Link to="/product" className="mt-4 inline-block text-sm font-semibold text-[#c45c26] underline">
                    Back to products
                </Link>
            </section>
        );
    }

    const gallery = [dataValue.thumbnail, ...(dataValue.images || [])].filter(Boolean);
    const mainImage = gallery.includes(activeImage) ? activeImage : gallery[0];
    const oldPrice = dataValue.discountPercentage
        ? (dataValue.price / (1 - dataValue.discountPercentage / 100)).toFixed(2)
        : null;

    return (
        <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-10 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#e8c9a0]/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#c45c26]/10 blur-3xl" />

            <div className="relative mx-auto max-w-[1320px]">
                <Link
                    to="/product"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#6b6358] transition hover:text-[#c45c26]"
                >
                    <HiOutlineArrowLeft />
                    Back to shelf
                </Link>

                {dataValue && (
                    <div>
                        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                            <div className="rounded-[1.6rem] border border-[#e4d9c8] bg-[#fffaf3] p-4 shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)]">
                                <figure className="relative overflow-hidden rounded-[1.2rem] bg-[#efe6d8]">
                                    {dataValue.discountPercentage ? (
                                        <span className="absolute left-4 top-4 z-10 rounded-full bg-[#c45c26] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                                            -{Math.round(dataValue.discountPercentage)}%
                                        </span>
                                    ) : null}
                                    <img
                                        src={mainImage}
                                        alt={dataValue.title}
                                        className="h-[420px] w-full object-cover"
                                    />
                                </figure>

                                {gallery.length > 1 ? (
                                    <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                                        {gallery.map((src) => (
                                            <button
                                                key={src}
                                                type="button"
                                                onClick={() => setActiveImage(src)}
                                                className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 ${
                                                    mainImage === src
                                                        ? 'border-[#c45c26]'
                                                        : 'border-transparent opacity-80 hover:opacity-100'
                                                }`}
                                            >
                                                <img src={src} alt="" className="h-full w-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                ) : null}
                            </div>

                            <div className="rounded-[1.6rem] border border-[#e4d9c8] bg-[#fffaf3] p-6 sm:p-8 shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)]">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c45c26]">
                                    {dataValue.brand || dataValue.category}
                                </p>
                                <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#1c1915] sm:text-4xl">
                                    {dataValue.title}
                                </h1>

                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <StarRating rating={dataValue.rating} size="text-base" />
                                    <span className="text-xs text-[#9a9084]">
                                        {dataValue.reviews?.length || 0} reviews
                                    </span>
                                    {dataValue.availabilityStatus ? (
                                        <span className="rounded-full bg-[#e8f3e4] px-2.5 py-1 text-[11px] font-semibold text-[#3d6b32]">
                                            {dataValue.availabilityStatus}
                                        </span>
                                    ) : null}
                                </div>

                                <p className="mt-5 text-sm leading-relaxed text-[#6b6358]">{dataValue.description}</p>

                                <div className="mt-6 flex items-end gap-3">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-[#9a9084]">Price</p>
                                        <p className="text-3xl font-bold text-[#1c1915]">₹ {dataValue.price}</p>
                                    </div>
                                    {oldPrice ? (
                                        <p className="mb-1 text-sm text-[#9a9084] line-through">₹ {oldPrice}</p>
                                    ) : null}
                                </div>

                                {dataValue.tags?.length ? (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {dataValue.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-[#efe6d8] px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-[#5c5348]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                <button
                                    type="button"
                                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1c1915] px-6 py-3 text-sm font-semibold text-[#fffaf3] transition hover:bg-[#c45c26] sm:w-auto"
                                >
                                    <HiOutlineShoppingBag className="text-base" />
                                    Add to cart
                                </button>

                                <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <Spec label="SKU" value={dataValue.sku} />
                                    <Spec label="Stock" value={dataValue.stock} />
                                    <Spec label="Shipping" value={dataValue.shippingInformation} />
                                    <Spec label="Warranty" value={dataValue.warrantyInformation} />
                                    <Spec label="Return" value={dataValue.returnPolicy} />
                                    <Spec label="Min. order" value={dataValue.minimumOrderQuantity} />
                                </dl>
                            </div>
                        </div>

                        {dataValue.reviews?.length ? (
                            <div className="mt-10">
                                <h2 className="mb-5 font-serif text-2xl text-[#1c1915]">Customer reviews</h2>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {dataValue.reviews.map((review, index) => (
                                        <article
                                            key={`${review.reviewerEmail}-${index}`}
                                            className="rounded-[1.3rem] border border-[#e4d9c8] bg-[#fffaf3] p-5"
                                        >
                                            <StarRating rating={review.rating} />
                                            <p className="mt-3 text-sm leading-relaxed text-[#3f3a33]">
                                                “{review.comment}”
                                            </p>
                                            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#a08b70]">
                                                {review.reviewerName}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </section>
    );
};

const Spec = ({ label, value }) => {
    if (value == null || value === '') return null;
    return (
        <div className="rounded-2xl bg-[#efe6d8]/70 px-4 py-3">
            <dt className="text-[10px] uppercase tracking-widest text-[#9a9084]">{label}</dt>
            <dd className="mt-1 text-sm font-medium text-[#1c1915]">{value}</dd>
        </div>
    );
};

export default ProductDetails;
