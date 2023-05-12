export const copyToClipBoard = (elementId: string) => {
    const textElement = document.getElementById(elementId);
    if (textElement) {
        const text = textElement.textContent ?? "";
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy text: ', error);
            });
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
};

export const widgetCategories = [
    'All',
    'Clock',
    'Timers',
    'Quotes',
    'Music',
    'Weather',
    'Calendar'
];