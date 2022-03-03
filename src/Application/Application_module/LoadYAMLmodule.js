
let shared = null;

class loadYAML_m {
    constructor(f_name, data_m) {
        this.getyamljson = this.getyamljson.bind(this);
        const inputYML = 'C:\Users\Velvi\Downloads\module_blueprint_name.yaml';
        const outputJSON = 'C:\Users\Velvi\Downloads\output.json';
        const yaml = require('js-yaml');
        //var fs = require('fs');
        //const obj = yaml.load(fs.readFileSync(inputYML, {encoding: 'utf-8'})); 
        //this code if you want to save file locally
        //fs.writeFileSync(outputJSON, JSON.stringify(obj, null, 2));

        var yamltext = require('./try.yml');
        var x, jsontext;
        var zzz = fetch(yamltext)
            .then(
                r => r.text()
            )
            .then(
                text => {
                    x = yaml.load(text);
                    this.getyamljson(x);
                    return text;
                }
            );

        // FUNZIONE SINCRONA 

    }

    getyamljson(text) {
        shared = text;
        shared = JSON.stringify(shared, null, 2)
        console.log(shared);
        //DA QUI PARSING
        
    }

}

export default loadYAML_m;