export default class Singleton {

    static myIstance = null;

    PrimaryInfo = undefined; // name, type, description
    PortD = []; // default, type, group
    ImageD = []; // name, OSname

    static getInstance(){
        if(Singleton.myIstance==null){
            Singleton.myIstance=new Singleton();
        }
        return this.myIstance;
    }

    setPrimaryInfo(v){
        this.PrimaryInfo = v;
    }

    getPrimaryInfo(){
        return this.PrimaryInfo;
    }

    setPortD(v){
        this.PortD = v;
    }

    getPortD(){
        return this.PortD;
    }

    setImageD(v){
        this.ImageD = v;
    }

    getImageD(){
        return this.ImageD;
    }


}