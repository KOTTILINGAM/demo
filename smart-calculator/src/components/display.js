class Display {
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.currentInput = '';
    }

    updateDisplay(value) {
        this.currentInput += value;
        this.outputElement.innerText = this.currentInput;
    }

    clearDisplay() {
        this.currentInput = '';
        this.outputElement.innerText = this.currentInput;
    }

    setResult(result) {
        this.currentInput = result.toString();
        this.outputElement.innerText = this.currentInput;
    }
}

export default Display;