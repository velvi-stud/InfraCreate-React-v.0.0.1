import React from 'react';

class tryJSON extends React.Component {

    constructor() {
        super();
        this.df = require('./data.json');
    }

    read_json() {
        before_show();
        console.log(JSON.stringify(this.df)); // show data
    }

    add_name_desc(tipo, name, desc) {
        this.df.tipo = tipo;
        this.df.name = name;
        this.df.description = desc;
    }

    return_df() {
        return (this.df);
    }

    render() {
        return null;
    }
}

function before_show() {
    const df = new tryJSON().return_df();

    //  metodo NON funzionante per aggiungere 2 oggetti al json -> L'ULTIMO RIMPIAZZZA
    // let x = {
    //     'varX': {
    //         'val1': 'x1',
    //         'val2': 'x2'
    //     }
    // };
    // let y = {
    //     'varY': {
    //         'val1': 'y1',
    //         'val2': 'y2'
    //     }
    // };
    // df["node_templates"] = x;
    // df["node_templates"] = y;

    // METODO FUNZIONANTE
    //BASTA FARE:
    let objname = ''; // per il nome dell'oggetto da aggiungere
    let objcontent = {}; // per le componenti dell'oggetto da aggiungere
    // primo inserimento
    objname = 'varX';
    objcontent = {
        'val1': 'x1',
        'val2': 'x2'
    };
    df["node_templates"][objname] = objcontent;
    // secondo inserimento
    objname = 'varY';
    objcontent = {
        'val1': 'y1',
        'val2': 'y2'
    };
    df["node_templates"][objname] = objcontent;
}

export default tryJSON;

// const DP = () => {

//     let df = require('./data.json');

//     function open_and_read() {
//         /* // add new element into array
//         df.imports[5] = "new array element";
//         */

//         /* // add new element
//         // 1
//         df.cazzuola="add new element";
//         // 2
//         df["cazzuola"]="add new element";
//         */

//         /* // add new element into an object
//         //1
//         df.node_templates.cazzuola="add new element into an obj";
//         //2
//         df["node_templates"]["cazzuola"]="add new element into an obj";
//         */

//         /* // add object
//         // 1
//         df["node_templates"]["cazzuola"]={
//             values1: "swrojn",
//             other_val: "Ee"
//         };
//         // 2
//         df["node_templates"]["cazzuola"]={
//             ["values1"]: "swrojn",
//             ["other_val"]: "Ee"
//         };
//         //3
//         let x = {
//             'nome_t':{
//                 'val1': 'x1',
//                 'val2': 'x2'
//             }
//         };
//         df["node_templates"]=x;
//         */

//         console.log(JSON.stringify(df)); // show data
//     }

//     function add_name_desc(name,desc){
//         df.name=name;
//         df.description=desc;
//     }

//     return (
//         { open_and_read }
//     );
// }

// export default DP;
