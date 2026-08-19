import React from 'react';
import { Link } from 'react-router-dom';

const Registor = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#f4f5f7] px-4 py-12 sm:px-6">
            <div className="w-full max-w-[520px]">
                <div className="rounded-sm border border-[#d9d9d9] bg-white">
                    <h1 className="border-b border-[#e5e5e5] px-6 py-5 text-[22px] font-bold text-black sm:px-8">
                        Register For A Free Account
                    </h1>

                    <form className="space-y-6 px-6 py-7 sm:px-8 sm:py-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-[15px] font-bold text-black">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email address"
                                required
                                className="w-full rounded-md border border-[#d0d0d0] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="mb-2 block text-[15px] font-bold text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your secure password"
                                minLength={6}
                                required
                                className="w-full rounded-md border border-[#d0d0d0] px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20"
                            />
                            <p className="mt-2 text-sm text-[#555]">At least 6 characters</p>
                        </div>

                        <button
                            type="submit"
                            className="rounded-full bg-[#4a90e2] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3b7fd1]"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

                <p className="mt-8 text-center text-[15px] text-[#333]">
                    <Link to="/login" className="hover:underline">
                        I already have an account
                    </Link>
                </p>
                <p className="mt-3 text-center text-[15px] text-[#333]">
                    This is a product of <span className="font-bold">KadriBazar</span>
                </p>
            </div>
        </section>
    );
};

export default Registor;
