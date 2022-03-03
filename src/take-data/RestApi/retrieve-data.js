
//let shared = null;

var myHeaders = new Headers();
var token = localStorage.getItem('react-token');
token = "Bearer " + token;
myHeaders.append("Authorization", token);

class RD {

    constructor(theater_id=502) {

        // HP1: PRIMA TEATRO GENERALE, SAPENDO L'ID
        // http://10.20.30.210:8000/library-asset/api/v1/rest/theatres/{theater_id = 502}

        // HP2: SECONDO MODULI TEATRO, SAPENDO L'UUID REPERITO DA PRIMA
        // http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/{theater_uuid = 9c0bf7a7-2ea3-4f88-9860-1c0ad212e2fc}

        this.theater_id = theater_id.toString();

        this.theater_info = {};
        this.modules_info = {};

        this.theater_info_filtered = {};
        this.modules_info_filtered = {};

        this.theaterinfo = [];
        this.modules = [];

        //this.takedata();

    }

    async takedata(theater_id = 502) {
        // prende dati teatro
        this.theater_info = await this.taketheater(theater_id);
        this.theater_info = JSON.parse(this.theater_info);
        // prende dati moduli
        this.modules_info = await this.takemodules(this.theater_info);
        this.modules_info = JSON.parse(this.modules_info);
    
        // filtra riultati
        this.theater_info_filtered = this.filter_theater_info();
        this.modules_info_filtered = this.filter_modules_info();

        // prende host moduli
        await this.takehosts();

        // ELEMENTI FILTRATI
        // console.log(this.theater_info_filtered);
        // console.log(this.modules_info_filtered);
        // console.log(this.theater_info);
        // console.log(this.modules_info);
    }


    filter_theater_info() {
        var data_t = [];
        data_t['name'] = this.theater_info['name'];
        data_t['description'] = this.theater_info['description'];
        data_t['id'] = this.theater_info['id'];
        data_t['uuid'] = this.theater_info['uuid'];
        data_t['version'] = this.theater_info['version'];
        data_t['areas'] = this.theater_info['blueprintFile']['node_templates'][data_t['name']]['properties']['areas'];
        //console.log(this.theater_info_filtered);
        return data_t;
    }

    filter_modules_info() {
        var data_m = [];
        Object.entries(this.modules_info).map(([key, value]) => {
            //console.log(value)
            var name = value['name'];
            var uuid = value['uuid'];
            var id = value['id'];
            var version = value['version'];
            var description = value['description'];
            data_m.push({ name: name, id: id, uuid: uuid, version: version, description: description });
        });
        //console.log(modules);
        return data_m;
    }

    // altro..
    // getTheaterDetails() {
    //     return this.theater_info_filtered;
    // }
    // getModuleDetails() {
    //     return this.modules_info_filtered;
    // }

    getModules() {
        var modules = [];
        Object.entries(this.modules_info_filtered).map(([key, value]) => {
            var template = {
                "elements": [],
                "position": [],
                "zoom": 1,
                "#elements": 0,
                "name": value['name'],
                "description": value['description'],
                "version": value['version']
            };
            modules.push(template);
        });
        //console.log(modules);
        return modules;
    }

    async takehosts(){
        var modulehost = [];
        Object.entries(this.modules_info_filtered).map( async ([key, value]) => {
            var uuid = value['uuid'];
            var temp = await this.takemodulehosts(uuid);
            temp = JSON.parse(temp);
            temp = temp[0];//"703563c3-0570-4325-8287-9a18a9552694" ??
            modulehost.push({name: value['name'], id: value['id'],value: temp});
        });
        console.log(modulehost)
        Object.entries(modulehost).map(([key, value]) => {
            console.log(value);
        });
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////// FUNCTION FOR CALL API ///////////////////////////////
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
                //SI POTREBBE FARE UNA COSA PER ITERARE SUI MODULI E FARE LA FETCH CON: http://10.20.30.210:8000/library-asset/api/v1/rest/modules/{ID}
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

    // function that retreive modules data host form their id
    async takemodulehosts(module_uuid) {
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        //await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/moduleVms/module/f6176755-b55d-4132-b3f9-370ec7c4dfd7/host", requestOptions)
        const Promised = await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/moduleVms/module/"+module_uuid+"/host", requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    return result;
                }
            )
            .catch(error => console.log('error', error));
        return Promised;
    }



}

export default RD;