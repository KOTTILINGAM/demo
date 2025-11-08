function processInput(input) {
    const operations = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        sine: 'sin',
        cosine: 'cos',
        tangent: 'tan',
        logarithm: 'log'
    };

    const regex = /(\d+\.?\d*)\s*(add|subtract|multiply|divide|sine|cosine|tangent|logarithm)\s*(\d+\.?\d*)?/g;
    let match;
    let result = [];

    while ((match = regex.exec(input)) !== null) {
        const num1 = parseFloat(match[1]);
        const operation = operations[match[2]];
        const num2 = match[3] ? parseFloat(match[3]) : null;

        if (num2 !== null) {
            result.push(`${num1} ${operation} ${num2}`);
        } else {
            result.push(`${operation}(${num1})`);
        }
    }

    return result;
}

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

function handleAIInput(input) {
    const expressions = processInput(input);
    return expressions.map(evaluateExpression);
}

export { handleAIInput };