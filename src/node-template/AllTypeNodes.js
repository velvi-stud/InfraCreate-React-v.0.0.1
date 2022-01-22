import PortNode from './PortNode.js';
import ServerNode from './ServerNode.js';
import SubnetNode from './SubnetNode.js';
import NetworkNode from './NetworkNode.js';

class AllTypeNodes {
    constructor() {
        this.listType = [];
        this.listStyle = [];
        this.listMeta = [];
        // aggiungere nuovi elementi qui 
        this.element = {
            server: new ServerNode(),
            port: new PortNode(),
            network: new NetworkNode(),
            subnet: new SubnetNode(),
        }
        // SETNAME
        this.name = {
            server: this.element.server.getMeta(),
            port: this.element.port.getMeta(),
            network: this.element.network.getMeta(),
            subnet: this.element.subnet.getMeta(),
        }
        // VALORIZE
        Object.entries(this.element).map(
            ([key, value]) => {
                this.listType.push(key);
                this.listStyle.push({ type:key, style: value.getStyle()});
                this.listMeta.push({ type:key, meta: value.getMeta()});
            }
        )
    }


    getListType() {
        return this.listType;
    }

    getListMeta() {
        return this.listMeta;
    }

    getListStyle() {
        return this.listStyle;
    }

    GetObj() {
        return this.name;
    }


}
export default AllTypeNodes;