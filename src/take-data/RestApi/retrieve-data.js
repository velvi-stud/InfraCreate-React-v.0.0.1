
//let shared = null;

var myHeaders = new Headers();
var token = localStorage.getItem('react-token');
token = "Bearer " + token;
myHeaders.append("Authorization", token);

class RD {

    constructor(theater_uuid) {

        // HP1: PRIMA TEATRO GENERALE, SAPENDO L'ID
        // http://10.20.30.210:8000/library-asset/api/v1/rest/theatres/{theater_id = 502}

        // HP2: SECONDO MODULI TEATRO, SAPENDO L'UUID REPERITO DA PRIMA
        // http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/{theater_uuid = 9c0bf7a7-2ea3-4f88-9860-1c0ad212e2fc}

        this.theater_info = {};
        this.modules_info = {};

        this.data_t = {};
        this.data_m = {};

        this.theaterinfo = [];
        this.modules = [];

        this.takedata();

    }

    async takedata() {
        //this.taketheater();
        this.theater_info = await this.taketheater('502');
        this.theater_info = JSON.parse(this.theater_info);
        this.modules_info = await this.takemodules(this.theater_info);
        this.modules_info = JSON.parse(this.modules_info);

        //console.log("-----", this.infojson1, this.infojson2);

        this.fetch_theater_info();
        this.fetch_modules_info();

        // ELEMENTI FILTRATI
        console.log(this.data_t);
        console.log(this.data_m);
    }


    fetch_theater_info() {
        this.data_t['name'] = this.theater_info['name'];
        this.data_t['description'] = this.theater_info['description'];
        this.data_t['id'] = this.theater_info['id'];
        this.data_t['uuid'] = this.theater_info['uuid'];
        this.data_t['version'] = this.theater_info['version'];
        this.data_t['areas'] = this.theater_info['blueprintFile']['node_templates'][this.data_t['name']]['properties']['areas'];
        //console.log(this.data_t);
    }

    fetch_modules_info() {
        var modules = [];
        Object.entries(this.modules_info).map(([key, value]) => {
            //console.log(value)
            var name = value['name'];
            var uuid = value['uuid'];
            var id = value['id'];
            var version = value['version'];
            modules.push({ module_name: name, id: id, module_uuid: uuid, version: version });
        });
        //console.log(modules);
        this.data_m = modules;
    }

    getModules() {
        var template = {
            "elements": [],
            "position": [],
            "zoom": 1,
            "#elements": 0,
            "module_name": '',
            "module_description": '',
            "version": "1.0"
        };
    }

    getTheaterDetails() {
        return this.data_t;
    }


    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////// FUNCTION FOR CALL API ///////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // function that retreive data theater to take info and the theater UUID
    async taketheater(theater_id) {
        //var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        const Promised = await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/theatres/" + theater_id, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    //console.log("INFOJS1: ", result)
                    //this.infojson1 = result;
                    // this.takemodules();
                    return result;
                }
            )
            .catch(error => console.log('error', error));
        return Promised;
    }

    // function that retreive from theater UUID the module ID
    async takemodules(theater_info) {
        var uuid = theater_info['uuid'];
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        //await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/9c0bf7a7-2ea3-4f88-9860-1c0ad212e2fc", requestOptions)
        const Promised = await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/" + uuid, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    //console.log("INFOJS2: ", result)
                    // this.infojson2 = result;
                    // this.datataken();
                    return result;
                }
            )
            .catch(error => console.log('error', error));
        return Promised;
    }




}

export default RD;