//import React from 'react';
import node_temp from './NodeTemplates.js';
import network from '../images/nodeimg/network.png';
import connector from '../images/nodeimg/connector.png';
import database from '../images/nodeimg/database.png';
//import access from '../images/nodeimg/access.png';
import server from '../images/nodeimg/server.png'; 
import subnet from '../images/nodeimg/subnet.png'; 


class node_temp_list {

    constructor(){
        this.tipi = [];
        this.meth = [];
        this.styl = [];
    }

    pushlist(nome,NT,style){
        this.tipi.push(nome);
        this.meth[nome]=NT;
        this.styl[nome]=style;
    }

    addElement(tipo, style, img, css_in, css_out){
        const NT = node_temp(tipo, style, img, css_in, css_out);
        this.pushlist(tipo,NT,style);
    }

    getListName(){
        return this.tipi;
    }

    getListMeth(){
        return this.meth;
    }

    getListStyl(){
        return this.styl;
    }



    exaleNode(){
        const tipo = "exale";
        const cssnode = {
            background: 'yellow',
            color: '#black',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
        };
        this.addElement(tipo, cssnode, server, cssport, cssport);
    }
    
    customizedNode(){
        const tipo = "customized";
        const cssnode = {
            stroke: '2em',
            borderRadius: '0em',
            borderColor: 'black',
            borderWidth: '10px',
            background: '#9CA8B3',
            color: '#FFF',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
        };
        this.addElement(tipo, cssnode, database, cssport, cssport);
    }

    specialNode(){
        const tipo = "special";
        const cssnode = {
            background: 'pink',
            color: '#black',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
        };
        this.addElement(tipo, cssnode, connector, cssport, cssport);
    }

    //////////////////////////////////////////////////////////////////////777

    ServerNode(){
        const tipo = "server";
        const cssnode = {
            background: 'lightseagreen',
            color: 'black',
            borderRadius: '2em',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        this.addElement(tipo, cssnode, server, cssport, cssport);
    }


    NetworkNode(){
        const tipo = "network";
        const cssnode = {
            background: 'orchid',
            color: '#black',
            borderRadius: '2em',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        this.addElement(tipo, cssnode, network, cssport, cssport);
    }

    SubnetNode(){
        const tipo = "subnet";
        const cssnode = {
            background: 'lightsalmon',
            color: '#black',
            borderRadius: '2em',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        this.addElement(tipo, cssnode, subnet, cssport, cssport);
    }

    PortNode(){
        const tipo = "port";
        const cssnode = {
            background: 'MediumPurple',
            color: '#black',
            borderRadius: '2em',
            padding: 10,
        };
        const cssport = {
            borderRadius: 0,
            height:'0.8em',
            width: '0.5em',
        };
        this.addElement(tipo, cssnode, connector, cssport, cssport);
    }


    //////////////////////////////////////////////////////////////////////


    initialize(){
        this.exaleNode();
        this.customizedNode();
        this.specialNode();

        this.ServerNode();
        this.NetworkNode();
        this.SubnetNode();
        this.PortNode();
    }


}
export default node_temp_list;
