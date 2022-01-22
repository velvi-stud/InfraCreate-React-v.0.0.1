//import React from 'react';
import node_temp from './NodeTemplate.js';
import network from '../images/nodeimg/network.png';
import connector from '../images/nodeimg/connector.png';
import database from '../images/nodeimg/database.png';
import server from '../images/nodeimg/server.png'; 
import subnet from '../images/nodeimg/subnet.png'; 


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
        this.meta= node_temp(this.type, this.style, network, this.portstyle, this.portstyle);
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
