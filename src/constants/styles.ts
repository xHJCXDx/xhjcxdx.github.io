const neutral = {
    container: 'border-gray-200 dark:border-gray-800',
    title: 'text-charcoal dark:text-warm-gray',
    skill: {
        High: 'text-charcoal dark:text-warm-gray opacity-100',
        Medium: 'text-charcoal dark:text-warm-gray opacity-60',
        Low: 'text-charcoal dark:text-warm-gray opacity-35',
    },
};

export const colorClasses: { [key: string]: { container: string; title: string; skill: { High: string; Medium: string; Low: string; } } } = {
    cyan: neutral,
    purple: neutral,
    yellow: neutral,
    blue: neutral,
    green: neutral,
    red: neutral,
    pink: neutral,
    orange: neutral,
    indigo: neutral,
};
