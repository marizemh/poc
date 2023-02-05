import Api from "./Api";
import Paises from "./Paises";

export default class App {
    constructor(config) {
        this.api = new Api(config);

        this.paises = new Paises(config);

        this.renderPaises().catch(error => {
            alert("Ha ocurrido un error"); // TODO: mejorar
        });
    }

    async renderPaises() {
        try {
            const paises = await this.api.obtenerPaises();
            this.paises.render(paises);
        } catch (error) {
            return error;
        }
    }


}

globalThis.app = new App(config);