import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { colorClasses } from '@/constants/styles';

export const Contact: React.FC = () => {
  const { texts } = useLanguage();
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
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-mono font-bold text-gray-900 dark:text-white mb-12 border-b border-green-400 pb-4">
          {texts.CONTACT_TEXTS.title}
        </h2>

        <div className="mb-12">
          {texts.CONTACT_TEXTS.quotes.map((quote, index) => (
            <p key={index} className="text-xl font-mono text-gray-700 dark:text-gray-300 mb-8">
              {quote.text} <span className="text-blue-600 dark:text-blue-400">{quote.highlight}</span>
            </p>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {texts.CONTACT_METHODS.map(({ href, icon: Icon, title, subtitle, color }) => {
              const classes = colorClasses[color] || colorClasses.blue;
              return (
                <a key={title} href={href} className="group">
                  <div className={`border p-6 transition-all ${classes.container}`}>
                    <Icon className={`mx-auto mb-4 ${classes.title}`} size={32} />
                    <div className={`font-mono ${classes.title}`}>{title}</div>
                    <div className="font-mono text-gray-700 dark:text-gray-300 text-sm">{subtitle}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="border border-green-600/50 dark:border-green-500/50 p-8 bg-white dark:bg-transparent dark:bg-gradient-to-r dark:from-green-900/20 dark:to-blue-900/20">
          {!showForm ? (
            <>
              <div className="text-2xl font-mono text-gray-900 dark:text-white mb-4">
                {texts.CONTACT_TEXTS.collaboration.text} <span className="text-blue-600 dark:text-blue-400">{texts.CONTACT_TEXTS.collaboration.highlight}</span>
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-mono hover:bg-blue-400 hover:text-black hover:dark:text-black transition-all duration-300"
              >
                {texts.CONTACT_TEXTS.startProject}
              </button>
            </>
          ) : (
            <form className="text-left" onSubmit={handleSubmit}>                        <div className="mb-4">
              <label htmlFor="name" className="block text-blue-600 dark:text-blue-400 font-mono mb-2">{texts.CONTACT_TEXTS.form.name}</label>
              <input type="text" id="name" name="name" required className="w-full bg-gray-100 dark:bg-black/50 border border-green-600/50 dark:border-green-400/50 text-gray-900 dark:text-white p-2 focus:outline-none focus:border-blue-400" />
            </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-600 dark:text-blue-400 font-mono mb-2">{texts.CONTACT_TEXTS.form.email}</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-100 dark:bg-black/50 border border-green-600/50 dark:border-green-400/50 text-gray-900 dark:text-white p-2 focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-blue-600 dark:text-blue-400 font-mono mb-2">{texts.CONTACT_TEXTS.form.message}</label>
                <textarea id="message" name="message" required rows={4} className="w-full bg-gray-100 dark:bg-black/50 border border-green-600/50 dark:border-green-400/50 text-gray-900 dark:text-white p-2 focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border-2 border-gray-500 text-gray-600 dark:text-gray-400 font-mono hover:bg-gray-500 hover:text-white transition-all duration-300"
                >
                  {texts.CONTACT_TEXTS.form.cancel}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-600 font-mono hover:bg-blue-400 hover:text-black transition-all duration-300"
                >
                  {texts.CONTACT_TEXTS.form.send}
                </button>
              </div>
              {result && <p className="mt-4 text-center font-mono text-blue-600 dark:text-blue-400">{result}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
