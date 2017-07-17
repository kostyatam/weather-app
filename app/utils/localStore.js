export default function localStore (key, value) {
    if (value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    return localStorage[key] ? JSON.parse(localStorage[key]) : undefined;
}