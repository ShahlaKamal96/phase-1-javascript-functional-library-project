function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            callback(collection[keys[i]], keys[i], collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            result.push(callback(collection[keys[i]], keys[i], collection));
        }
    }
    return result;
}
function myReduce(collection, callback, acc) {
    if (acc === undefined) {
        if (Array.isArray(collection)) {
            acc = collection[0];
            for (let i = 1; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection);
            }
        } else {
            const keys = Object.keys(collection);
            acc = collection[keys[0]];
            for (let i = 1; i < keys.length; i++) {
                acc = callback(acc, collection[keys[i]], collection);
            }
        }
    } else {
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i++) {
                acc = callback(acc, collection[i], collection);
            }
        } else {
            const keys = Object.keys(collection);
            for (let i = 0; i < keys.length; i++) {
                acc = callback(acc, collection[keys[i]], collection);
            }
        }
    }
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                return collection[i];
            }
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            if (predicate(collection[keys[i]], keys[i], collection)) {
                return collection[keys[i]];
            }
        }
    }
    return undefined;
}
function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i], i, collection)) {
                result.push(collection[i]);
            }
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++) {
            if (predicate(collection[keys[i]], keys[i], collection)) {
                result.push(collection[keys[i]]);
            }
        }
    }
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(collection, n) {
    if (n === undefined) {
        n = 1;
    }
    if (Array.isArray(collection)) {
        return collection.slice(0, n);
    } else {
        const keys = Object.keys(collection);
        return keys.slice(0, n).map(key => collection[key]);
    }
}

function myLast(collection, n) {
    if (n === undefined) {
        n = 1;
    }
    if (Array.isArray(collection)) {
        return collection.slice(-n);
    } else {
        const keys = Object.keys(collection);
        return keys.slice(-n).map(key => collection[key]);
    }
}

function myKeys(collection) {
    if (Array.isArray(collection)) {
        return Array.from({ length: collection.length }, (_, i) => i);
    } else {
        return Object.keys(collection);
    }
}

function myValues(collection) {
    if (Array.isArray(collection)) {
        return collection;
    } else {
        return Object.values(collection);
    }
}

