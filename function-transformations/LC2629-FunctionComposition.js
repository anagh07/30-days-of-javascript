/**
 * @param {Function[]} functions
 * @return {Function}
 */
export const compose = (functions) => {
    return (x) => {
        let accum = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            accum = functions[i](accum);
        }
        return accum;
    };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
