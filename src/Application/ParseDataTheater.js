import exportToYaml from './DownloadYAML';

class parsedatatheater {
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

export default parsedatatheater;