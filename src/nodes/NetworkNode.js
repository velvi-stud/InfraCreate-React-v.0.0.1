//import React from 'react';
import node_temp from './template/NodeTemplate';
import img from '../images/nodeimg/network.png';


class NetworkNode {

    constructor(){
        this.type = "network";
        this.style = {
            background: 'orchid',
            color: 'black',
            borderRadius: '2em',
            padding: 10,
        };
       this.portstyle = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        var isValidConnectionIn = (connection) => connection.source.includes('subnet');
        var isValidConnectionOut = (connection) => connection.target.includes('subnet');

        this.meta= node_temp(this.type, this.style, img, this.portstyle, this.portstyle, isValidConnectionIn, isValidConnectionOut);
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
export default NetworkNode;
