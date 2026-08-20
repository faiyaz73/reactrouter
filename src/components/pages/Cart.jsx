import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { datalist } from '../../data/datavalue';
import {
    FiArrowRight,
    FiCheck,
    FiChevronLeft,
    FiHeart,
    FiMinus,
    FiPlus,
    FiShoppingBag,
    FiShield,
    FiTag,
    FiTrash2,
    FiTruck,
} from 'react-icons/fi';

const Cart = () => {
    const [cartItems, setCartItems] = useState(() =>
        datalist
            .filter(({ id }) => [1, 3, 4].includes(id))
            .map((product, index) => ({ ...product, quantity: index + 1 }))
    );
    const [promoCode, setPromoCode] = useState('');
    const [appliedPromo, setAppliedPromo] = useState(false);
    const [promoMessage, setPromoMessage] = useState('');

    const updateQuantity = (id, change) => {
        setCartItems((items) => items.map((item) => (
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + change) }
                : item
        )));
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const applyPromo = (event) => {
        event.preventDefault();
        const code = promoCode.trim().toUpperCase();
        if (code === 'WELCOME10' || code === 'KADRI10') {
            setAppliedPromo(true);
            setPromoMessage('10% welcome saving applied.');
        } else {
            setAppliedPromo(false);
            setPromoMessage(code ? 'Try WELCOME10 for 10% off.' : 'Enter a promo code to apply it.');
        }
    };

    const totals = useMemo(() => {
        const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discount = appliedPromo ? subtotal * 0.1 : 0;
        const shipping = subtotal - discount >= 75 || subtotal === 0 ? 0 : 6.99;
        return { subtotal, discount, shipping, total: subtotal - discount + shipping };
    }, [appliedPromo, cartItems]);

    const formatPrice = (amount) => `₹${amount.toFixed(2)}`;

    return (
        <main className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#f6f1e8] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
            <div className="pointer-events-none absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#e8c9a0]/35 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#c45c26]/10 blur-3xl" />

            <div className="relative mx-auto max-w-[1180px]">
                <Link to="/product" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6049] transition hover:text-[#c45c26]">
                    <FiChevronLeft /> Continue shopping
                </Link>

                <header className="mt-8 flex flex-col justify-between gap-3 border-b border-[#dfd2c1] pb-8 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.35em] text-[#c45c26]">Your edit</p>
                        <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#1c1915] sm:text-5xl">Shopping cart</h1>
                    </div>
                    <p className="text-sm text-[#6b6358]">{cartItems.length} {cartItems.length === 1 ? 'piece' : 'pieces'} selected</p>
                </header>

                {cartItems.length === 0 ? (
                    <section className="flex flex-col items-center justify-center py-24 text-center">
                        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#eadbc8] text-[#c45c26]"><FiShoppingBag className="text-3xl" /></span>
                        <h2 className="mt-6 font-serif text-3xl font-semibold text-[#1c1915]">Your cart is taking a quiet moment.</h2>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6b6358]">Find something considered, useful, or simply lovely to bring home.</p>
                        <Link to="/product" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1c1915] px-5 py-3 text-sm font-semibold text-[#fffaf3] transition hover:bg-[#c45c26]">
                            Browse the collection <FiArrowRight />
                        </Link>
                    </section>
                ) : (
                    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px] lg:items-start">
                        <section aria-label="Cart items" className="space-y-4">
                            {cartItems.map((item) => (
                                <article key={item.id} className="group flex gap-4 border-b border-[#dfd2c1] pb-5 sm:gap-6">
                                    <Link to={`/product/${item.id}`} className="h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-[#eee3d4] sm:h-36 sm:w-32">
                                        <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                    </Link>
                                    <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                                        <div className="flex justify-between gap-3">
                                            <div className="min-w-0">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a08b70]">{item.brand || item.category}</p>
                                                <Link to={`/product/${item.id}`} className="mt-1 block font-serif text-lg leading-snug text-[#1c1915] transition hover:text-[#c45c26] sm:text-xl">{item.title}</Link>
                                            </div>
                                            <p className="shrink-0 text-base font-bold text-[#1c1915]">{formatPrice(item.price * item.quantity)}</p>
                                        </div>
                                        <div className="flex items-end justify-between gap-3">
                                            <div className="flex items-center rounded-full border border-[#d7c8b6] bg-[#fffaf3] p-1">
                                                <button type="button" aria-label={`Decrease ${item.title} quantity`} onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1} className="flex h-7 w-7 items-center justify-center rounded-full text-[#6b6358] transition hover:bg-[#eadbc8] disabled:cursor-not-allowed disabled:opacity-35"><FiMinus /></button>
                                                <span className="w-7 text-center text-sm font-semibold text-[#1c1915]">{item.quantity}</span>
                                                <button type="button" aria-label={`Increase ${item.title} quantity`} onClick={() => updateQuantity(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-full text-[#6b6358] transition hover:bg-[#eadbc8]"><FiPlus /></button>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs text-[#8d8174]">
                                                <button type="button" className="hidden items-center gap-1 transition hover:text-[#c45c26] sm:inline-flex"><FiHeart /> Save</button>
                                                <button type="button" aria-label={`Remove ${item.title}`} onClick={() => removeItem(item.id)} className="inline-flex items-center gap-1 transition hover:text-[#c45c26]"><FiTrash2 /> Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                            <div className="flex items-center gap-3 pt-3 text-xs text-[#6b6358]"><FiTruck className="text-[#c45c26]" /><span><strong className="text-[#3f3a33]">Complimentary shipping</strong> on orders over ₹75</span></div>
                        </section>

                        <aside className="rounded-[1.4rem] border border-[#e4d9c8] bg-[#fffaf3] p-6 shadow-[0_20px_45px_-32px_rgba(28,25,21,0.5)] sm:p-7">
                            <h2 className="font-serif text-2xl font-semibold text-[#1c1915]">Order summary</h2>
                            <form onSubmit={applyPromo} className="mt-6">
                                <label htmlFor="promo-code" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#8d8174]">Have a code?</label>
                                <div className="flex gap-2">
                                    <div className="relative min-w-0 flex-1"><FiTag className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a08b70]" /><input id="promo-code" value={promoCode} onChange={(event) => setPromoCode(event.target.value)} placeholder="WELCOME10" className="h-11 w-full rounded-xl border border-[#d7c8b6] bg-[#fdf8f0] pl-9 pr-3 text-sm text-[#1c1915] outline-none transition placeholder:text-[#b2a495] focus:border-[#c45c26]" /></div>
                                    <button type="submit" className="rounded-xl bg-[#eadbc8] px-4 text-xs font-bold text-[#5c4639] transition hover:bg-[#e0c7aa]">Apply</button>
                                </div>
                                {promoMessage ? <p className={`mt-2 flex items-center gap-1 text-xs ${appliedPromo ? 'text-[#63734e]' : 'text-[#a05d43]'}`}>{appliedPromo && <FiCheck />}{promoMessage}</p> : null}
                            </form>
                            <div className="mt-7 space-y-3 border-b border-[#e4d9c8] pb-6 text-sm">
                                <div className="flex justify-between text-[#6b6358]"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
                                {appliedPromo ? <div className="flex justify-between text-[#63734e]"><span>Welcome saving</span><span>-{formatPrice(totals.discount)}</span></div> : null}
                                <div className="flex justify-between text-[#6b6358]"><span>Shipping</span><span>{totals.shipping === 0 ? 'Free' : formatPrice(totals.shipping)}</span></div>
                            </div>
                            <div className="flex items-end justify-between py-6"><span className="font-serif text-xl text-[#1c1915]">Total</span><span className="text-2xl font-bold text-[#1c1915]">{formatPrice(totals.total)}</span></div>
                            <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c45c26] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1c1915]">Secure checkout <FiArrowRight /></button>
                            <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#8d8174]"><FiShield className="text-[#63734e]" /> Secure payment, always.</p>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Cart;
