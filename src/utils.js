// Credit to Andy Carlson on Stack Overflow
// https://stackoverflow.com/users/6078821/andy-carlson

class DefaultDict {
    constructor(defaultVal) {
        return new Proxy({}, {
            get: (target, name) => name in target ? target[name] : defaultVal
        })
    }
}

export {DefaultDict};