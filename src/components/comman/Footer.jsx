import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { FiArrowUpRight, FiCheck, FiInstagram, FiMail, FiMapPin, FiTruck, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.footer-reveal', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 88%',
        },
      });
    }, footerRef);

    return () => context.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[#1c1915] text-[#fffaf3]">
      <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-[#c45c26]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#e8c9a0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="footer-reveal mb-12 flex flex-col gap-6 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#e8a477]">Stay in the know</p>
            <h2 className="font-serif text-3xl leading-tight text-[#fffaf3] sm:text-4xl">Good finds, thoughtfully delivered.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#c4b8aa]">New arrivals, small stories, and useful offers, sent occasionally.</p>
          </div>
          <form className="flex w-full max-w-md gap-2" onSubmit={(event) => event.preventDefault()}>
            <label className="relative min-w-0 flex-1">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a08b70]" />
              <input type="email" required placeholder="Your email address" aria-label="Your email address" className="h-12 w-full rounded-full border border-white/15 bg-white/10 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-[#a99b8c] focus:border-[#e8a477]" />
            </label>
            <button type="submit" aria-label="Subscribe to newsletter" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c45c26] text-white transition hover:bg-[#e8a477] hover:text-[#1c1915] sm:w-auto sm:gap-2 sm:px-5">
              <span className="hidden text-sm font-bold sm:inline">Join us</span><FiArrowUpRight />
            </button>
          </form>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="footer-reveal">
            <Link to="/" className="inline-block font-serif text-3xl font-semibold tracking-tight text-[#fffaf3]">Kadri<span className="text-[#e8a477]">Bazar</span></Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#a99b8c]">A considered collection for everyday rituals, chosen with a little more care.</p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#c4b8aa]"><FiMapPin className="text-[#e8a477]" /> Made for homes everywhere</div>
          </div>

          <FooterColumn title="Explore" links={[
            ['Shop all', '/product'],
            ['Your cart', '/cart'],
            ['Contact us', '/contact'],
          ]} />
          <FooterColumn title="Care" links={[
            ['Shipping & returns', '/contact'],
            ['Privacy policy', '/'],
            ['Terms of use', '/'],
          ]} />
          <div className="footer-reveal">
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8a477]">Our promise</h3>
            <div className="space-y-3 text-sm text-[#c4b8aa]">
              <p className="flex items-start gap-2"><FiCheck className="mt-0.5 shrink-0 text-[#e8a477]" /> Honest prices, always</p>
              <p className="flex items-start gap-2"><FiTruck className="mt-0.5 shrink-0 text-[#e8a477]" /> Careful, quick dispatch</p>
            </div>
            <div className="mt-6 flex gap-2">
              <SocialLink label="Instagram" href="https://instagram.com" icon={<FiInstagram />} />
              <SocialLink label="Twitter" href="https://twitter.com" icon={<FiTwitter />} />
              <SocialLink label="Email us" href="mailto:hello@kadribazar.com" icon={<FiMail />} />
            </div>
          </div>
        </div>

        <div className="footer-reveal mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-[#8f8174] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KadriBazar. Made with intention.</p>
          <p>Secure checkout · Customer-first support</p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links }) => (
  <div className="footer-reveal">
    <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8a477]">{title}</h3>
    <ul className="space-y-3 text-sm text-[#c4b8aa]">
      {links.map(([label, path]) => <li key={label}><Link to={path} className="transition hover:text-[#fffaf3]">{label}</Link></li>)}
    </ul>
  </div>
);

const SocialLink = ({ label, href, icon }) => (
  <a href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#c4b8aa] transition hover:border-[#e8a477] hover:bg-[#e8a477] hover:text-[#1c1915]">{icon}</a>
);

export default Footer;
