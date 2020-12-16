class Route {
    static _instance
    _map

    constructor() {
        this._map = new Map()
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new this()
        }

        return this._instance
    }

    register(method, endpoint, callback) {
        this._map.set(`${method + endpoint}`, callback)
    }

    resolve(method, endpoint) {
        const func = this._map.get(`${method + endpoint}`)

        if (!func) {
            throw new Error(`Handler ${method + endpoint} ne postoji.`)
        }

        return func()
    }


    get(endpoint, callback) {
        this.register("GET", endpoint, callback)
    }
    post(endpoint, callback) {
        this.register("POST", endpoint, callback)
    }
    put(endpoint, callback) {
        this.register("PUT", endpoint, callback)
    }
    patch(endpoint, callback) {
        this.register("PATCH", endpoint, callback)
    }
    delete(endpoint, callback) {
        this.register("DELETE", endpoint, callback)
    }

}

module.exports = Route