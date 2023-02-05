export default class Api {
    constructor(config) {
        this.baseEndpoint = `${config.context}/rest/paises`;
    }

    #getBaseEndPoint() {
        return this.baseEndpoint;
    }

    obtenerPaises() {
        const url = this.#getBaseEndPoint();
        return Api.get(url);
    }

    static get(urlOrObject) {
        const params = this.#getBaseParamsUrlOrObject(urlOrObject, "GET");
        params.cache = false;
        return $.ajax(params);
    }

    static #getBaseParamsUrlOrObject(input, type) {
        let params = {};
        if (typeof input === 'string') {
            params.url = input;
            params.type = type;
        } else {
            params = this.#getBaseParams(input, type);
        }
        return params;
    }

    static #getBaseParams(input, type) {
        const params = {
            url: input.url,
            Headers: { Accept: 'application/json' },
            contentType: 'application/json; charset=utf-8',
            timeout: 0,
            dataType: "json",
            type
        };
        if (input.data) {
            if (type === 'GET') {
                params.data = input.data;
            } else {
                params.data = JSON.stringify(input.data);
            }
        }
        return params;
    }
}