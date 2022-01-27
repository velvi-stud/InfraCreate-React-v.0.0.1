//import React from 'react';
import node_temp from './template/NodeTemplate';
import network from '../images/nodeimg/network.png';
import connector from '../images/nodeimg/connector.png';
import database from '../images/nodeimg/database.png';
import server from '../images/nodeimg/server.png'; 
import subnet from '../images/nodeimg/subnet.png'; 


class SubnetNode {

    constructor(){
        this.type = "subnet";
        this.style = {
            background: 'lightsalmon',
            color: 'black',
            borderRadius: '2em',
            padding: 10,
        };
        this.portstyle = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        this.meta= node_temp(this.type, this.style, subnet, this.portstyle, this.portstyle);
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
export default SubnetNode;
