import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaWhatsapp,
    FaInstagram,
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaBoxOpen,
    FaUndoAlt,
    FaTruck,
    FaCreditCard,
    FaQuestionCircle,
    FaChevronDown,
} from 'react-icons/fa';
import contactHero from '../../assets/kadribazar-contact-hero.png';

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
    { icon: FaMapMarkerAlt, title: 'Address', text: 'Kadri Bazar Road, Kadri, Mangaluru, Karnataka 575002' },
    { icon: FaPhoneAlt, title: 'Phone', text: '+91 824 221 4500' },
    { icon: FaEnvelope, title: 'Email', text: 'hello@kadribazar.com' },
    { icon: FaClock, title: 'Business Hours', text: 'Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 4:00 PM' },
    { icon: FaWhatsapp, title: 'WhatsApp', text: '+91 98765 43210' },
];

const supportItems = [
    { icon: FaBoxOpen, title: 'Order-related queries', text: 'Need help with your order? Contact our support team and we will get back to you as soon as possible.' },
    { icon: FaUndoAlt, title: 'Return & Refund', text: 'Start a return or check refund status for eligible products within 7 days of delivery.' },
    { icon: FaTruck, title: 'Shipping / Delivery', text: 'Track shipments, change delivery address, or ask about estimated arrival times.' },
    { icon: FaCreditCard, title: 'Payment issues', text: 'Failed payments, refunds to wallet, UPI, cards, and COD questions — we can help.' },
    { icon: FaQuestionCircle, title: 'Product questions', text: 'Need size, ingredients, or stock details? Our team will share what is on the shelf.' },
];

const faqs = [
    { q: 'Order kitne din me deliver hota hai?', a: 'Metro cities me 2–4 working days, aur baaki locations me 4–7 working days lagte hain. Order confirm hone ke baad tracking ID milti hai.' },
    { q: 'Return kaise karein?', a: 'Delivery ke 7 din ke andar account me jaake “My Orders” se return request raise karein. Product unused aur original packing me hona chahiye.' },
    { q: 'Refund kab milega?', a: 'Return pickup ke baad quality check 2–3 din me hota hai. Refund original payment method me 5–7 working days me credit ho jata hai.' },
    { q: 'Order track kaise karein?', a: 'Email/SMS wali tracking link use karein, ya Contact form me order ID likh kar “Order-related queries” subject select karein.' },
    { q: 'Payment methods kaunse hain?', a: 'UPI, debit/credit cards, net banking, wallets, aur selected pincodes par Cash on Delivery available hain.' },
    { q: 'WhatsApp par help milti hai?', a: 'Haan. +91 98765 43210 par message karein. Support team 9 AM – 8 PM (Mon–Sat) reply karti hai.' },
];

const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:bg-[#c45c26]' },
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:bg-[#0A66C2]' },
    { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com', color: 'hover:bg-[#FF0000]' },
];

const Contact = () => {
    const pageRef = useRef(null);
    const [openFaq, setOpenFaq] = useState(0);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-hero-copy', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });
            gsap.from('.contact-hero-image', {
                scale: 1.12,
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out',
            });

            gsap.from('.info-card', {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power2.out',
                scrollTrigger: { trigger: '.info-grid', start: 'top 80%' },
            });

            gsap.from('.form-panel', {
                x: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.form-section', start: 'top 75%' },
            });
            gsap.from('.form-side-image', {
                x: -60,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.form-section', start: 'top 75%' },
            });

            gsap.from('.support-card', {
                y: 36,
                opacity: 0,
                duration: 0.55,
                stagger: 0.1,
                ease: 'power2.out',
                scrollTrigger: { trigger: '.support-grid', start: 'top 80%' },
            });

            gsap.from('.map-panel', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                scrollTrigger: { trigger: '.map-panel', start: 'top 82%' },
            });

            gsap.from('.social-btn', {
                scale: 0.6,
                opacity: 0,
                duration: 0.45,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: { trigger: '.social-row', start: 'top 85%' },
            });

            gsap.from('.faq-item', {
                x: -30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                scrollTrigger: { trigger: '.faq-list', start: 'top 80%' },
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
        event.currentTarget.reset();
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <div ref={pageRef} className="overflow-hidden bg-[#f6f1e8]">
            <section className="relative min-h-[420px] sm:min-h-[520px]">
                <img
                    src={contactHero}
                    alt="KadriBazar storefront"
                    className="contact-hero-image absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1c1915]/55" />
                <div className="contact-hero-copy relative mx-auto flex min-h-[420px] max-w-[1320px] flex-col justify-end px-4 py-16 sm:min-h-[520px] sm:px-6 lg:px-8">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e8c9a0]">Get in touch</p>
                    <h1 className="font-serif text-4xl font-semibold text-white sm:text-6xl">Contact Us</h1>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                        Orders, returns, delivery, ya store visit — KadriBazar team yahin hai.
                    </p>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1320px]">
                    <header className="mb-8 text-center">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c45c26]">Reach us</p>
                        <h2 className="font-serif text-3xl text-[#1c1915] sm:text-4xl">Contact Information</h2>
                    </header>
                    <div className="info-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {infoItems.map((item) => (
                            <article
                                key={item.title}
                                className="info-card rounded-[1.4rem] border border-[#e4d9c8] bg-[#fffaf3] p-5 shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)]"
                            >
                                <item.icon className="mb-3 text-xl text-[#c45c26]" />
                                <h3 className="text-sm font-semibold text-[#1c1915]">{item.title}</h3>
                                <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-[#6b6358]">{item.text}</p>
                                {item.title === 'WhatsApp' ? (
                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-3 inline-block text-xs font-semibold text-[#25D366] hover:underline"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="form-section px-4 py-6 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-[1320px] items-stretch gap-6 lg:grid-cols-2">
                    <figure className="form-side-image overflow-hidden rounded-[1.6rem] border border-[#e4d9c8]">
                        <img src={contactHero} alt="KadriBazar" className="h-full min-h-[320px] w-full object-cover" />
                    </figure>

                    <form
                        onSubmit={handleSubmit}
                        className="form-panel rounded-[1.6rem] border border-[#e4d9c8] bg-[#fffaf3] p-6 shadow-[0_18px_40px_-28px_rgba(28,25,21,0.45)] sm:p-8"
                    >
                        <h2 className="font-serif text-3xl text-[#1c1915]">Send a message</h2>
                        <p className="mt-1 mb-6 text-sm text-[#6b6358]">Hum 24 hours ke andar reply karte hain.</p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Field label="Full Name" name="name" type="text" required />
                            <Field label="Email" name="email" type="email" required />
                            <Field label="Phone Number" name="phone" type="tel" />
                            <div>
                                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#3f3a33]">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full rounded-xl border border-[#e4d9c8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/20"
                                >
                                    <option value="">Select a topic</option>
                                    <option>Order-related queries</option>
                                    <option>Return & Refund</option>
                                    <option>Shipping / Delivery</option>
                                    <option>Payment issues</option>
                                    <option>Product-related questions</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#3f3a33]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                                className="w-full rounded-xl border border-[#e4d9c8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/20"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-5 rounded-full bg-[#1c1915] px-6 py-3 text-sm font-semibold text-[#fffaf3] transition hover:bg-[#c45c26]"
                        >
                            Send Message
                        </button>
                        {sent ? (
                            <p className="mt-3 text-sm font-medium text-[#3d6b32]">Message sent. We will get back to you soon.</p>
                        ) : null}
                    </form>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1320px]">
                    <header className="mb-8 text-center">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c45c26]">Help desk</p>
                        <h2 className="font-serif text-3xl text-[#1c1915] sm:text-4xl">Customer Support</h2>
                    </header>
                    <div className="support-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {supportItems.map((item) => (
                            <article
                                key={item.title}
                                className="support-card rounded-[1.4rem] border border-[#e4d9c8] bg-[#fffaf3] p-6"
                            >
                                <item.icon className="mb-3 text-2xl text-[#c45c26]" />
                                <h3 className="font-serif text-xl text-[#1c1915]">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#6b6358]">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="map-panel mx-auto max-w-[1320px] overflow-hidden rounded-[1.6rem] border border-[#e4d9c8] bg-[#fffaf3]">
                    <div className="px-6 py-5">
                        <h2 className="font-serif text-2xl text-[#1c1915]">Find our store</h2>
                        <p className="text-sm text-[#6b6358]">Kadri, Mangaluru — visit us or pick up in store.</p>
                    </div>
                    <iframe
                        title="KadriBazar location"
                        src="https://maps.google.com/maps?q=Kadri%20Mangaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="h-[320px] w-full border-0 sm:h-[420px]"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            <section className="px-4 pb-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[1320px] rounded-[1.6rem] border border-[#e4d9c8] bg-[#1c1915] px-6 py-10 text-center">
                    <h2 className="font-serif text-3xl text-white">Follow KadriBazar</h2>
                    <p className="mx-auto mt-2 max-w-md text-sm text-white/70">New drops, offers, aur store stories — social pe dekho.</p>
                    <div className="social-row mt-6 flex flex-wrap items-center justify-center gap-3">
                        {socialLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className={`social-btn inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition ${item.color}`}
                            >
                                <item.icon />
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[900px]">
                    <header className="mb-8 text-center">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#c45c26]">FAQ</p>
                        <h2 className="font-serif text-3xl text-[#1c1915] sm:text-4xl">Common questions</h2>
                    </header>
                    <div className="faq-list space-y-3">
                        {faqs.map((item, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <article
                                    key={item.q}
                                    className="faq-item overflow-hidden rounded-2xl border border-[#e4d9c8] bg-[#fffaf3]"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                    >
                                        <span className="font-medium text-[#1c1915]">{item.q}</span>
                                        <FaChevronDown
                                            className={`shrink-0 text-[#c45c26] transition ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {isOpen ? (
                                        <p className="border-t border-[#e4d9c8] px-5 py-4 text-sm leading-relaxed text-[#6b6358]">
                                            {item.a}
                                        </p>
                                    ) : null}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

const Field = ({ label, name, type, required }) => (
    <div>
        <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-[#3f3a33]">
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            required={required}
            className="w-full rounded-xl border border-[#e4d9c8] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#c45c26] focus:ring-2 focus:ring-[#c45c26]/20"
        />
    </div>
);

export default Contact;
