export const debounce = (fn, ms = 1000) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
            clearTimeout(timeoutId);
        }, ms);
    }
}