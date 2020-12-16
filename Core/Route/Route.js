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

    register(method, endpoint, handler) {
        this._map.set(`${method + endpoint}`, handler)
    }

    async resolve(method, endpoint) {
        const handler = this._map.get(`${method + endpoint}`)
        
        if (!handler) {
            throw new Error(`Handler ${method + endpoint} ne postoji.`)
        }

        const explodedHandler = handler.split(".")

        let handlerClass
        try {
            handlerClass = new (require(`../../Controllers/${explodedHandler[0]}`))()
        } catch (error) {
            console.log("Nije uspilo u inicijaliziaCIJI KLASE");
        }
        
        try {
            return await handlerClass[explodedHandler[1]]()
        } catch (error) {
            console.log("Nije uspilo u funkciji");
        }

       
    }


    get(endpoint, handler) {
        this.register("GET", endpoint, handler)
    }
    post(endpoint, handler) {
        this.register("POST", endpoint, handler)
    }
    put(endpoint, handler) {
        this.register("PUT", endpoint, handler)
    }
    patch(endpoint, handler) {
        this.register("PATCH", endpoint, handler)
    }
    delete(endpoint, handler) {
        this.register("DELETE", endpoint, handler)
    }

}

module.exports = Route