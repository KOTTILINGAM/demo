# Smart Calculator

## Overview
The Smart Calculator project is a comprehensive web application that provides users with a basic calculator, a scientific calculator, and an AI-powered smart calculator that understands natural language input. This project aims to deliver a user-friendly interface and robust functionality for performing various mathematical operations.

## Features
- **Basic Calculator**: Supports addition, subtraction, multiplication, and division.
- **Scientific Calculator**: Includes functions for sine, cosine, tangent, and logarithm calculations.
- **AI Smart Calculator**: Processes natural language input to perform calculations, making it easier for users to interact with the calculator.

## Project Structure
```
smart-calculator
├── public
│   ├── index.html          # Main HTML document
│   ├── styles
│   │   └── styles.css      # CSS styles for the calculator
│   └── scripts
│       ├── main.js         # Entry point for JavaScript code
│       ├── calculator.js    # Basic arithmetic operations
│       ├── scientific.js    # Scientific calculations
│       └── ai.js           # AI functionality for natural language processing
├── src
│   ├── components
│   │   ├── display.js      # Manages calculator display
│   │   └── keypad.js       # Handles keypad functionality
│   └── utils
│       └── parser.js       # Parses natural language input
├── package.json            # npm configuration file
├── .gitignore              # Files to ignore in version control
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd smart-calculator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
- Open `public/index.html` in your web browser to access the calculator.
- Use the basic calculator for simple arithmetic operations.
- Switch to the scientific calculator for advanced functions.
- Utilize the AI smart calculator by typing natural language queries, such as "What is 5 plus 3?" or "Calculate the sine of 30 degrees."

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.