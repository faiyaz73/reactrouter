import React from 'react';

const Home = () => {
    return (
        <section className="bg-[#111827]">
            <div className="mx-auto grid max-w-screen-xl items-center  gap-8 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
                <div className="mr-auto place-self-center lg:col-span-7 order-1 lg:order-2">
                    <h1 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
                        The experience makes all the difference.
                    </h1>
                    <p className="mb-6 max-w-2xl text-base font-light text-gray-400 sm:text-lg md:text-xl lg:mb-8">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg bg-[#EF4444] px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-800"
                        >
                            Offer
                        </button>
                    </div>
                </div>
                <div className="flex justify-center lg:col-span-5 lg:mt-0 lg:order-2">
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        alt="Phone mockup"
                        className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
