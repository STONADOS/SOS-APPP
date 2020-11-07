class Form{
    constructor(){
        this.input = createInput("Enter Your Name");
        this.button1 = createButton("SOS");
        this.list = createSelect();
        this.list.option("SELECT");
        this.list.option("POLICE");
        this.list.option("HOSPITAL");
        this.list.option("FIRE SAFETY");
        this.list.option("DISASTER MANAGEMENT");
        this.button2 = createButton("CONFIRM");

        // this.list.disable("SELECT");

    }
display(){
    this.input.position((displayWidth/2), 200);
    this.button1.position((displayWidth/2) - 50, 275);
    this.list.position((displayWidth/2) + 75, 275);
    this.button2.position((displayWidth/2) + 75, 300);

    


    this.button1.mousePressed(()=>{
        var name = this.input.value();

        if(name){

        database.ref('/').update({
            Name:name,
            Lat:3,
            Long:4,
            Element:"SOS"
        })
    }
        
    });

    this.button2.mousePressed(()=>{

        var name = this.input.value();

        var element = this.list.value();
        if(name && element != "SELECT"){
        var service = this.list.value();
        console.log(service);
        database.ref('/').update({
            Name:name,
            Lat:3,
            Long:4,
            Element:this.list.value()
        })
    }
    } );
}

async gettingLatLong(){

    var response  = await fetch ("https://maps.googleapis.com/maps/api/geocode/json?address");
    var jsonresponse = await response.json();
    console.log(json)
}

}

