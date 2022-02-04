import exportToYaml from './DownloadYAML';

class parsetoyaml {
    constructor(data){
        this.data = data;
        this.parse(data);
    }

    parse(jsondata) {
        const YAML = require('json-to-pretty-yaml');
        const data = YAML.stringify(jsondata);
        exportToYaml(data,"parsing_yaml");
    } 

}

export default parsetoyaml;