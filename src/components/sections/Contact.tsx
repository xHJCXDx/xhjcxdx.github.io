import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useFadeIn } from '@/hooks/useFadeIn';

export const Contact: React.FC = () => {
  const { texts } = useLanguage();
  const { ref: fadeRef, isVisible } = useFadeIn();
  const [showForm, setShowForm] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult(texts.CONTACT_TEXTS.form.sending);
    const formData = new FormData(form);

    formData.append("access_key", "7512cf8a-36fc-42f8-af5a-42f6d4ba6c12");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(texts.CONTACT_TEXTS.form.success);
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult(texts.CONTACT_TEXTS.form.error);
    }

    setTimeout(() => {
      setResult(null);
    }, 5000);
  };

  return (
    <section ref={fadeRef} className={`min-h-screen py-30 px-6 flex items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <div className="max-w-xl mx-auto w-full text-center">
        <h2 className="font-serif text-4xl font-normal text-charcoal dark:text-warm-gray mb-12">
          {texts.CONTACT_TEXTS.title}
        </h2>

        {/* Social icons */}
        <div className="flex justify-center gap-8 mb-12">
          {texts.CONTACT_METHODS.map(({ href, icon: Icon, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal dark:text-warm-gray hover:text-accent transition-colors"
              aria-label={title}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Form toggle */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="text-sm text-muted-wc hover:text-accent transition-colors"
          >
            {texts.CONTACT_TEXTS.startProject}
          </button>
        ) : (
          <form className="text-left mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-wc mb-2">
                {texts.CONTACT_TEXTS.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 text-charcoal dark:text-warm-gray py-2 focus:outline-none focus-visible:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted-wc mb-2">
                {texts.CONTACT_TEXTS.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 text-charcoal dark:text-warm-gray py-2 focus:outline-none focus-visible:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-wc mb-2">
                {texts.CONTACT_TEXTS.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 text-charcoal dark:text-warm-gray py-2 focus:outline-none focus-visible:border-accent transition-colors resize-none"
              />
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-sm text-muted-wc hover:text-charcoal dark:hover:text-warm-gray transition-colors"
              >
                {texts.CONTACT_TEXTS.form.cancel}
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-accent text-accent uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all duration-300"
              >
                {texts.CONTACT_TEXTS.form.send}
              </button>
            </div>
            {result && <p className="mt-4 text-center text-sm text-muted-wc">{result}</p>}
          </form>
        )}
      </div>
    </section>
  );
};
