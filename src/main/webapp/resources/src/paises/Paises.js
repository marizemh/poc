export default class Paises {
    constructor(config) {
        this.api = config.api;
    }

    render(paises) {
        this.tablaPaises = $("#paises").dataTable({
            data: paises,
            autoWidth: false,
            responsive: true,
            columns: [
                {
                    data: "id",
                    render: (data, type, row) => {
                        return data;
                    }
                },
                {
                    data: "nombre",
                    render: (data, type, row) => {
                        return data;
                    }
                }
            ],
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>'
        });
    }
}