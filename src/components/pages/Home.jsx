import { Link } from 'react-router-dom';
import { datalist } from '../../data/datavalue';
import { ProductCart } from './Product';

const featuredBanners = [
    {
        id: datalist[0]?.id ?? 1,
        title: 'Beauty picks',
        label: 'Shop now',
        image: datalist[0]?.images?.[0] || datalist[0]?.thumbnail,
        tall: true,
    },
    {
        id: datalist[1]?.id ?? 2,
        title: 'New arrivals',
        label: 'Explore',
        image: datalist[1]?.images?.[0] || datalist[1]?.thumbnail,
        tall: false,
    },
    {
        id: datalist[2]?.id ?? 3,
        title: 'Daily deals',
        label: 'View offer',
        image: datalist[2]?.images?.[0] || datalist[2]?.thumbnail,
        tall: false,
    },
    {
        id: datalist[3]?.id ?? 4,
        title: 'Top rated',
        label: 'Shop now',
        image: datalist[3]?.images?.[0] || datalist[3]?.thumbnail,
        tall: true,
    },
];

const BannerCard = ({ item, className = '' }) => (
    <article className={`group relative overflow-hidden rounded-2xl ${className}`}>
        <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        
            <p className="mb-2 text-sm font-semibold text-white sm:text-base">{item.title}</p>
            <Link
                to={`/product/${item.id}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1c1915] transition hover:bg-[#c45c26] hover:text-white sm:text-sm"
            >
                {item.label}
            </Link>
        </div>
    </article>
);

const Home = () => {
    return (
        <>
            <section className="bg-[#1c1915] text-[#fffaf3]">
                <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
                    <div className="mr-auto place-self-center lg:col-span-7 lg:order-1">
                        <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
                            The experience makes all the difference.
                        </h1>
                        <p className="mb-6 max-w-2xl text-base font-light text-gray-400 sm:text-lg md:text-xl lg:mb-8">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                to="/product"
                                className="inline-flex items-center justify-center rounded-lg bg-[#EF4444] px-5 py-3 text-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
                            >
                                Get started
                                <svg
                                    className="ml-2 h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-800"
                            >
                                Offer
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:col-span-5 lg:order-2 lg:mt-0">
                        <img
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                            alt="Phone mockup"
                            className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#f6f1e8] px-4 py-10 sm:px-6 lg:px-10">
                <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px]">
                    <BannerCard item={featuredBanners[0]} className="h-72 sm:h-80 lg:row-span-2 lg:h-full" />
                    <BannerCard item={featuredBanners[1]} className="h-52 sm:h-64 lg:h-full" />
                    <BannerCard
                        item={featuredBanners[3]}
                        className="h-72 sm:h-80 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:h-full"
                    />
                    <BannerCard item={featuredBanners[2]} className="h-52 sm:h-64 lg:h-full" />
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-10 sm:px-6 lg:px-8">
                <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#e8c9a0]/40 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#c45c26]/10 blur-3xl" />

                <div className="relative mx-auto max-w-[1320px]">
                    <header className="mb-10 text-center">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c45c26]">
                            Curated shelf
                        </p>
                        <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#1c1915] sm:text-5xl">
                            Featured products
                        </h2>
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#6b6358]">
                            Hand-picked pieces with honest ratings, real reviews, and prices that stay on the tag.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {datalist.map((product) => (
                            <ProductCart product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
