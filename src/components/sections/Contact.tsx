import React, { useState } from 'react';
import { CONTACT_METHODS } from '@/constants/data';

const colorClasses: { [key: string]: { container: string; text: string; } } = {
    yellow: {
        container: 'border-yellow-400/50 bg-yellow-400/5 hover:bg-yellow-400/10',
        text: 'text-yellow-400',
    },
    purple: {
        container: 'border-purple-400/50 bg-purple-400/5 hover:bg-purple-400/10',
        text: 'text-purple-400',
    },
    cyan: {
        container: 'border-cyan-400/50 bg-cyan-400/5 hover:bg-cyan-400/10',
        text: 'text-cyan-400',
    },
    blue: {
        container: 'border-blue-400/50 bg-blue-400/5 hover:bg-blue-400/10',
        text: 'text-blue-400',
    }
};

export const Contact: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        setResult("Sending....");
        const formData = new FormData(form);

        formData.append("access_key", "7512cf8a-36fc-42f8-af5a-42f6d4ba6c12");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred while submitting the form.");
        }

        setTimeout(() => {
            setResult(null);
        }, 5000);
    };

    return (
        <section className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-mono font-bold text-white mb-12 border-b border-purple-400 pb-4">
                CONTACT.EXE
                </h2>
                
                <div className="mb-12">
                    <p className="text-xl font-mono text-gray-300 mb-8">
                        &gt; Got something on your mind? <span className="text-cyan-400">Let's create together.</span>
                    </p>
                    <p className="text-xl font-mono text-gray-300 mb-8">
                        &gt; Going through problems? <span className="text-cyan-400">I'll solve them for you.</span>
                    </p>
                    <p className="text-xl font-mono text-gray-300 mb-8">
                        &gt; Need a hand? <span className="text-cyan-400">I'll give you two.</span>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {CONTACT_METHODS.map(({ href, icon: Icon, title, subtitle, color }) => {
                            const classes = colorClasses[color] || colorClasses.cyan;
                            return (
                                <a key={title} href={href} className="group">
                                    <div className={`border p-6 transition-all ${classes.container}`}>
                                        <Icon className={`mx-auto mb-4 ${classes.text}`} size={32} />
                                        <div className={`font-mono ${classes.text}`}>{title}</div>
                                        <div className="font-mono text-gray-300 text-sm">{subtitle}</div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="border border-purple-500/50 p-8 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
                {!showForm ? (
                    <>
                        <div className="text-2xl font-mono text-white mb-4">
                            READY TO <span className="text-cyan-400">COLLABORATE</span>?
                        </div>
                        <button 
                            onClick={() => setShowForm(true)}
                            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300"
                        >
                            START PROJECT
                        </button>
                    </>
                ) : (
                    <form className="text-left" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-cyan-400 font-mono mb-2">NAME:</label>
                            <input type="text" id="name" name="name" required className="w-full bg-black/50 border border-purple-400/50 text-white p-2 focus:outline-none focus:border-cyan-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-cyan-400 font-mono mb-2">EMAIL:</label>
                            <input type="email" id="email" name="email" required className="w-full bg-black/50 border border-purple-400/50 text-white p-2 focus:outline-none focus:border-cyan-400" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-cyan-400 font-mono mb-2">MESSAGE:</label>
                            <textarea id="message" name="message" required rows={4} className="w-full bg-black/50 border border-purple-400/50 text-white p-2 focus:outline-none focus:border-cyan-400"></textarea>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button 
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-6 py-2 border-2 border-gray-500 text-gray-400 font-mono hover:bg-gray-500 hover:text-white transition-all duration-300"
                            >
                                CANCEL
                            </button>
                            <button 
                                type="submit"
                                className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 font-mono hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                        {result && <p className="mt-4 text-center font-mono text-cyan-400">{result}</p>}
                    </form>
                )}
                </div>
            </div>
        </section>
    );
};