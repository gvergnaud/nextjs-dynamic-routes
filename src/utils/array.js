export const flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), [])
