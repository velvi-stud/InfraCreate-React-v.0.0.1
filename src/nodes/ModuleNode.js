//import React from 'react';
import module_temp from './template/ModuleTemplate.js';

class ModuleNode {

    constructor() {
        this.type = "Module";
        this.style = {
            background: '#C0C3D3',
            color: 'black',
            //borderRadius: '2em',
            padding: 10,
            height: 'auto',
        };
        this.portstyle = {
            borderRadius: 0,
            height: '0.8em',
            width: '0.5em',
        };

        this.meta = module_temp(this.type, this.style, this.portstyle, this.portstyle);
    }

    getType() {
        return this.type;
    }
    getStyle() {
        return this.style;
    }
    getMeta() {
        return this.meta;
    }

}
export default ModuleNode;
