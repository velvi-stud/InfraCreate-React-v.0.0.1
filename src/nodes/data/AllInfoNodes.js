import PortInfo from './PortInfo.js';
import ServerInfo from './ServerInfo.js';
import NetworkInfo from './NetworkInfo.js';
import SubnetInfo from './SubnetInfo.js';
import ModuleInfo from './ModuleInfo.js';
import {Row} from 'react-bootstrap';

class AllInfoNodes { 

    constructor(sel_el) {
        this.selected_element = sel_el;
        this.type = this.selected_element.type;
        //console.log('ain', this.selected_element, this.type);
    }

    getRenderize() {
        var x = undefined;
        switch (this.type) {
            case 'server':
                x = new ServerInfo(this.selected_element);
                x = x.renderize();
                break;
            case 'port':
                x = new PortInfo(this.selected_element);
                x = x.renderize();
                break;
            case 'network':
                x = new NetworkInfo(this.selected_element);
                x = x.renderize();
                break;
            case 'subnet':
                x = new SubnetInfo(this.selected_element);
                x = x.renderize();
                break;
            case 'module':
                x = new ModuleInfo(this.selected_element);
                x = x.renderize();
                break;
            default:
                x = this.undefined_data();
                break;
        }

        return (x);
    }

    undefined_data() {
        return (
            <Row className='text-center align-center justify-content-center'>
                <p>Tipo non riconosciuto</p>
            </Row>
        );
    }


}
export default AllInfoNodes;