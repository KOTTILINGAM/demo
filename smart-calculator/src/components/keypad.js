class Keypad {
    constructor(display) {
        this.display = display;
        this.createKeypad();
    }

    createKeypad() {
        const keypadContainer = document.createElement('div');
        keypadContainer.classList.add('keypad');

        const buttons = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+'
        ];

        buttons.forEach(button => {
            const buttonElement = document.createElement('button');
            buttonElement.textContent = button;
            buttonElement.addEventListener('click', () => this.handleButtonClick(button));
            keypadContainer.appendChild(buttonElement);
        });

        document.body.appendChild(keypadContainer);
    }

    handleButtonClick(button) {
        if (button === '=') {
            this.display.calculate();
        } else {
            this.display.update(button);
        }
    }
}

export default Keypad;