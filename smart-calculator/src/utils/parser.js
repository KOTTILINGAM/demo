export function parseInput(input) {
    const operations = {
        'plus': '+',
        'minus': '-',
        'times': '*',
        'divided by': '/',
        'sine': 'sin',
        'cosine': 'cos',
        'tangent': 'tan',
        'logarithm': 'log'
    };

    let parsedExpression = input.toLowerCase();

    for (const [key, value] of Object.entries(operations)) {
        const regex = new RegExp(`\\b${key}\\b`, 'g');
        parsedExpression = parsedExpression.replace(regex, value);
    }

    return parsedExpression;
}