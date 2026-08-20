import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#1c1915]] px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]">
                <aside className="relative hidden w-[42%] flex-col items-center justify-between bg-[#1c1915] px-8 py-12 text-center text-white md:flex">
                    <h1 className="text-4xl font-extrabold tracking-wide">K-WD</h1>

                    <p className="max-w-xs text-sm leading-relaxed text-white/95">
                        With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
                    </p>

                    <div className="space-y-10">
                        <p className="text-sm">
                            Don&apos;t have an account?{' '}
                            <Link to="/registor" className="font-semibold underline underline-offset-2">
                                Get Started!
                            </Link>
                        </p>
                        <p className="text-xs text-white/90">
                            Read our{' '}
                            <a href="#" className="underline underline-offset-2">
                                terms
                            </a>{' '}
                            and{' '}
                            <a href="#" className="underline underline-offset-2">
                                conditions
                            </a>
                        </p>
                    </div>
                </aside>

                <div className="w-[300px] px-6 py-10 sm:px-10 md:w-[58%] lg:px-14 lg:py-12">
                    <h2 className="mb-8 text-3xl font-bold text-[#1f2a44]">Account Login</h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm text-gray-500">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#4c8dff] focus:ring-2 focus:ring-[#4c8dff]/20"
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label htmlFor="password" className="text-sm text-gray-500">
                                    Password
                                </label>
                                <a href="#" className="text-sm font-medium text-[#4c8dff] hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="block w-full rounded-md border border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-[#4c8dff] focus:ring-2 focus:ring-[#4c8dff]/20"
                            />
                        </div>

                        <label className="flex items-center gap-2 text-sm text-gray-500">
                            <input
                                type="checkbox"
                                name="remember"
                                className="h-4 w-4 rounded border-gray-300 text-[#4c8dff] focus:ring-[#4c8dff]"
                            />
                            Remember me
                        </label>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-[#1c1915] py-2.5 text-sm font-semibold text-white transition hover:bg-[#3b7af0]"
                        >
                            Log in
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-500 md:hidden">
                        Don&apos;t have an account?{' '}
                        <Link to="/registor" className="font-semibold text-[#4c8dff] underline">
                            Get Started!
                        </Link>
                    </p>

                    <div className="my-7 flex items-center gap-3">
                        <span className="h-px flex-1 bg-gray-200" />
                        <span className="text-sm text-gray-400">or login with</span>
                        <span className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div className="space-y-3">
                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
                                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
                                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13.2 24 13.2c3.1 0 5.8 1.2 8 3.1l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                                <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.8-6.6 7.2l6.2 5.2C38.2 37.3 44 32 44 24c0-1.2-.1-2.3-.4-3.5z" />
                            </svg>
                            Login with Google
                        </button>

                        <button
                            type="button"
                            className="flex w-full items-center justify-center gap-3 rounded-md border border-[#1877F2] py-2.5 text-sm font-medium text-[#1877F2] transition hover:bg-blue-50"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
                                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
                            </svg>
                            Login with Facebook
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
