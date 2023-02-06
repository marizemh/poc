export default class BaseApi {
    constructor(config) {
        this.context = config.context;
    }

    getContext() {
        return this.context;
    }

    get(url) {
        const params = this.#getBaseParamsUrlOrObject(url, "GET");
        params.cache = false;
        return $.ajax(params);
    }

    post(input) {
        return $.ajax(this.#getBaseParams(input, "POST"));
    }

    patch(input) {
        return $.ajax(this.#getBaseParams(input, "PATCH"));
    }

    put(input) {
        return $.ajax(this.#getBaseParams(input, "PUT"));
    }

    delete(urlOrObject) {
        const settings = this.#getBaseParamsUrlOrObject(urlOrObject, "DELETE");
        return $.ajax(settings);
    }

    #getBaseParamsUrlOrObject(input, type) {
        let params = {};
        if (typeof input === 'string') {
            params.url = input;
            params.type = type;
        } else {
            params = this.#getBaseParams(input, type);
        }
        return params;
    }

    #getBaseParams(input, type) {
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
