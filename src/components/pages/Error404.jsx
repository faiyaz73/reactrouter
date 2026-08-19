import React from 'react';
import { Link } from 'react-router-dom';
import {
    HiOutlineHome,
    HiOutlineShoppingBag,
    HiOutlineMail,
    HiOutlineShoppingCart,
} from 'react-icons/hi';

const shortcuts = [
    { to: '/product', label: 'Product catalog', hint: 'Browse the full shelf', icon: HiOutlineShoppingBag },
    { to: '/cart', label: 'Shopping cart', hint: 'Review saved items', icon: HiOutlineShoppingCart },
    { to: '/contact', label: 'Contact desk', hint: 'Talk to our team', icon: HiOutlineMail },
];

const Error404 = () => {
    return (
        <section className="relative overflow-hidden bg-[#f3eee6] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage:
                        'linear-gradient(#d7cbb8 1px, transparent 1px), linear-gradient(90deg, #d7cbb8 1px, transparent 1px)',
                    backgroundSize: '72px 72px',
                }}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f3eee6] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f3eee6] to-transparent" />

            <div className="relative mx-auto grid max-w-[1180px] overflow-hidden rounded-[2rem] border border-[#e0d4c2] bg-[#fffaf3] shadow-[0_40px_80px_-48px_rgba(28,25,21,0.55)] lg:grid-cols-[1.15fr_0.85fr]">
                <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="rounded-full border border-[#e4d9c8] bg-[#efe6d8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a7166]">
                            HTTP 404
                        </span>
                        <span className="h-px flex-1 bg-[#eadfce]" />
                    </div>

                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#c45c26]">
                        Resource unavailable
                    </p>
                    <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#1c1915] sm:text-5xl">
                        This page is not in the catalog.
                    </h1>
                    <p className="mt-4 max-w-lg text-[15px] leading-7 text-[#6b6358]">
                        The address may be mistyped, removed, or never existed. Your session is fine — use a
                        destination below to continue shopping.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 rounded-full bg-[#1c1915] px-6 py-3 text-sm font-semibold text-[#fffaf3] shadow-sm transition hover:bg-[#c45c26]"
                        >
                            <HiOutlineHome className="text-base" />
                            Return home
                        </Link>
                        <Link
                            to="/product"
                            className="inline-flex items-center gap-2 rounded-full border border-[#d7c4a8] bg-white px-6 py-3 text-sm font-semibold text-[#1c1915] transition hover:border-[#c45c26] hover:text-[#c45c26]"
                        >
                            <HiOutlineShoppingBag className="text-base" />
                            Open catalog
                        </Link>
                    </div>

                    <div className="mt-10 border-t border-[#eadfce] pt-8">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a9084]">
                            Suggested routes
                        </p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {shortcuts.map(({ to, label, hint, icon: Icon }) => (
                                <Link
                                    key={to}
                                    to={to}
                                    className="group rounded-2xl border border-[#eadfce] bg-[#faf6ef] p-4 text-left transition hover:border-[#c45c26]/50 hover:bg-white"
                                >
                                    <Icon className="text-lg text-[#c45c26]" />
                                    <p className="mt-3 text-sm font-semibold text-[#1c1915] group-hover:text-[#c45c26]">
                                        {label}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-[#8a8175]">{hint}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#1c1915] px-8 py-14 text-[#fffaf3] lg:min-h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(196,92,38,0.35),transparent_55%)]" />
                    <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-white/10" />
                    <div className="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/10" />

                    <div className="relative text-center">
                        <p className="font-serif text-[6.5rem] leading-none font-semibold tracking-[-0.06em] sm:text-[8rem]">
                            404
                        </p>
                        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e8c9a0]">
                            Missing entry
                        </p>
                        <svg
                            className="mx-auto mt-8 h-28 w-28 text-[#e8c9a0]"
                            viewBox="0 0 120 120"
                            fill="none"
                            aria-hidden="true"
                        >
                            <rect x="22" y="18" width="76" height="92" rx="6" stroke="currentColor" strokeWidth="2" />
                            <path d="M38 42h44M38 56h32M38 70h38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <circle cx="86" cy="24" r="10" fill="#1c1915" stroke="currentColor" strokeWidth="2" />
                            <path d="M82 24h8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <p className="mx-auto mt-6 max-w-[220px] text-xs leading-5 text-[#cfc4b4]">
                            Catalog reference could not be resolved for this path.
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Error404;
