import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
};

const inputClassName =
  'mt-2 block w-full rounded-lg border border-[#e6d9ca] bg-[#fffaf3] px-3.5 py-3 text-sm text-[#1c1915] outline-none transition placeholder:text-[#9d9184] focus:border-[#c45c26] focus:ring-4 focus:ring-[#c45c26]/10';

const Registor = () => {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMessage({ type: 'error', text: 'Your passwords do not match yet.' });
      return;
    }

    if (!form.terms) {
      setMessage({ type: 'error', text: 'Please accept the terms to continue.' });
      return;
    }

    setMessage({
      type: 'success',
      text: `Welcome to KadriBazar, ${form.firstName || 'friend'}! Your account is ready.`,
    });
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f6f1e8] px-4 py-8 text-[#1c1915] sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl border border-[#eadbc9] bg-[#fffaf3] shadow-[0_24px_70px_-28px_rgba(28,25,21,0.35)] md:grid-cols-[0.88fr_1.12fr]">
        <aside className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-[#1c1915] p-7 text-[#fffaf3] sm:p-10 md:min-h-[640px] md:p-12">
          <div className="absolute -right-20 top-20 h-52 w-52 rounded-full border-[28px] border-[#c45c26]/30" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[36px] border-[#fffaf3]/10" />
          <div className="relative">
            <Link to="/" className="text-2xl font-black tracking-tight text-[#fffaf3]">
              Kadri<span className="text-[#c45c26]">Bazar</span>
            </Link>
            <p className="mt-16 max-w-xs font-serif text-3xl leading-tight sm:text-4xl">
              Make room for the things you love.
            </p>
          </div>

          <div className="relative mt-10 space-y-5">
            <p className="max-w-xs text-sm leading-6 text-[#d8cabe]">
              Join a thoughtful marketplace for everyday finds, thoughtful gifts, and a little more delight in your day.
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c26]">
              <span className="h-px w-8 bg-[#c45c26]" />
              Shop with intention
            </div>
          </div>
        </aside>

        <section className="p-6 sm:p-10 lg:p-14">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#c45c26]">New here?</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">Create your account</h1>
            <p className="mt-3 text-sm leading-6 text-[#756b61]">
              Save your favorites, follow your orders, and make checkout a little easier.
            </p>
          </div>

          {message.text && (
            <div
              role="alert"
              className={`mb-6 rounded-lg border px-4 py-3 text-sm ${message.type === 'success'
                  ? 'border-[#9cc7a5] bg-[#edf8ef] text-[#2f6940]'
                  : 'border-[#e5b8a2] bg-[#fff0e9] text-[#9b401c]'
                }`}
            >
              {message.text}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="text-sm font-semibold">First name</label>
                <input className={inputClassName} type="text" id="firstName" name="firstName" placeholder="Aarav" value={form.firstName} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="lastName" className="text-sm font-semibold">Last name</label>
                <input className={inputClassName} type="text" id="lastName" name="lastName" placeholder="Sharma" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email address</label>
              <input className={inputClassName} type="email" id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="text-sm font-semibold">Password</label>
                <input className={inputClassName} type="password" id="password" name="password" placeholder="At least 8 characters" value={form.password} onChange={handleChange} minLength="8" required />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="text-sm font-semibold">Confirm password</label>
                <input className={inputClassName} type="password" id="confirmPassword" name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} minLength="8" required />
              </div>
            </div>

            <label className="flex items-start gap-3 pt-1 text-sm leading-5 text-[#756b61]">
              <input className="mt-1 h-4 w-4 rounded border-[#d8cabb] text-[#c45c26] accent-[#c45c26] focus:ring-[#c45c26]" type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
              <span>I agree to KadriBazar&apos;s <a href="#terms" className="font-semibold text-[#c45c26] underline underline-offset-2">terms and conditions</a>.</span>
            </label>

            <button type="submit" className="w-full rounded-lg bg-[#c45c26] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#a9481c] focus:outline-none focus:ring-4 focus:ring-[#c45c26]/25">
              Create my account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#756b61]">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-[#c45c26] underline underline-offset-4 hover:text-[#a9481c]">Log in</Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Registor;
