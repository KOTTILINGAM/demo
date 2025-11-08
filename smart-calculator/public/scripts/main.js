// main.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const keypad = document.querySelector('.keypad');
    const aiInput = document.querySelector('.ai-input');
    const aiOutput = document.querySelector('.ai-output');

    // Initialize basic calculator
    const basicCalculator = new BasicCalculator(display);
    keypad.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const value = event.target.textContent;
            basicCalculator.handleInput(value);
        }
    });

    // Initialize AI smart calculator
    const aiCalculator = new AICalculator(aiInput, aiOutput);
    aiInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const input = aiInput.value;
            aiCalculator.processInput(input);
            aiInput.value = '';
        }
    });
});