
import Keycloak from 'keycloak-js';
//keycloak init options
let initOptions = {
    url: 'http://10.50.1.25/auth/',
    realm: 'cyberrange',
    clientId: 'emo-client',
    onLoad: 'login-required',
    //response_uri: 'localhost:3000'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad })
    .success(
        (auth) => {
            if (!auth) {
                window.location.reload();
            } else {
                console.info("Authenticated");
                //console.info("Authenticated", keycloak.token);
            }

            // ReactDOM.render....

            localStorage.setItem("react-token", keycloak.token);
            localStorage.setItem("react-refresh-token", keycloak.refreshToken);

            setTimeout(
                () => {
                    keycloak.updateToken(70)
                        .then(
                            (refreshed) => {
                                if (refreshed) {
                                    console.debug('Token refreshed' + refreshed);
                                } else {
                                    console.warn('Token not refreshed, valid for '
                                        + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                                }
                            }
                        )
                        .catch(
                            () => {
                                console.error('Failed to refresh token');
                            }
                        );
                }, 60000)
        }
    ).error(
        () => {
            console.error("Authenticated Failed");
        }
    );

let shared = null;

class RD {

    constructor(theater_uuid) {

        // HP1: PRIMA TEATRO GENERALE, SAPENDO L'ID
        // http://10.20.30.210:8000/library-asset/api/v1/rest/theatres/{theater_id = 502}

        // HP2: SECONDO MODULI TEATRO, SAPENDO L'UUID REPERITO DA PRIMA
        // http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/{theater_uuid = 9c0bf7a7-2ea3-4f88-9860-1c0ad212e2fc}

        this.infojson1 = {};
        this.infojson2 = {};

        this.data_t = {};
        this.data_m = {};

        this.theaterinfo = [];
        this.modules = [];

        this.takedata();

    }

    takedata(){
        this.taketheater();
    }

    async taketheater() {
        var myHeaders = new Headers();
        var token = localStorage.getItem('react-token');
        token = "Bearer " + token;
        //console.log(token);
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/theatres/502", requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    //console.log("INFOJS1: ", result)
                    this.infojson1 = result;
                    this.takemodules();
                }
            )
            .catch(error => console.log('error', error));
    }

    async takemodules() {
        var myHeaders = new Headers();
        var token = localStorage.getItem('react-token');
        token = "Bearer " + token;
        //console.log(token);
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        await fetch("http://10.20.30.210:8000/library-asset/api/v1/rest/modules/theatre_uuid/9c0bf7a7-2ea3-4f88-9860-1c0ad212e2fc", requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    //console.log("INFOJS2: ", result)
                    this.infojson2 = result;
                    this.datataken();
                }
            )
            .catch(error => console.log('error', error));
    }

    datataken(){
        this.infojson1 = JSON.parse(this.infojson1);
        this.infojson2 = JSON.parse(this.infojson2);
        console.log("INFOJS1: ", this.infojson1);
        console.log("INFOJS2: ", this.infojson2);
        
        this.theater_details();
        this.showModulesUUID();

        console.log(this.data_t);
        console.log(this.data_m);

    }

    theater_details() {
        this.data_t['name'] = this.infojson1['name'];
        this.data_t['description'] = this.infojson1['description'];
        this.data_t['id'] = this.infojson1['id'];
        this.data_t['uuid'] = this.infojson1['uuid'];
        this.data_t['version'] = this.infojson1['version'];
        this.data_t['areas'] = this.infojson1['blueprintFile']['node_templates'][this.data_t['name']]['properties']['areas'];
        //console.log(this.data_t);
    }

    showModulesUUID() {
        var modules = [];
        Object.entries(this.infojson2).map(([key, value]) => {
            //console.log(value)
            var name = value['name'];
            var uuid = value['uuid'];
            var id = value['id'];
            var version = value['version'];
            modules.push({ module_name: name, id: id ,module_uuid: uuid, version: version });
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

}

export default RD;