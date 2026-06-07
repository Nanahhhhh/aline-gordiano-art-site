'use client';

import { useState } from 'react';

export default function CollectorSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Collector signup:', email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-4">
        <p
          className="text-2xl text-[#F5F2EE] mb-2"
          style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}
        >
          Thank you
        </p>
        <p
          className="text-sm text-[#A09890]"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          You&apos;ll be the first to know when prints become available.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto w-full">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 border border-[#3A3632] bg-[#2A2622] px-5 py-3.5 text-sm text-[#F5F2EE] outline-none focus:border-[#C5521A] transition-colors duration-200 placeholder:text-[#6B6B6B]"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        id="collector-email"
        aria-label="Email address for collector list"
      />
      <button
        type="submit"
        className="btn-primary whitespace-nowrap"
        id="collector-signup-submit"
      >
        Join the List
      </button>
    </form>
  );
}
