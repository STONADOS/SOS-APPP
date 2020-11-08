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
    let col = color(2009, 2009, 200, 100);


    this.input.position((displayWidth/2) -20, 200);
    this.input.style('background-color', col);
    this.input.style('font-size', '20px');
    this.input.size(200, 30)
    var k = this.input.value();
    textAlign(CENTER);
    textSize(50);

    this.button1.position((displayWidth/2) - 50, 275);
    this.button1.style('background-color', col);
    this.button1.style('font-size', '20px');


    this.list.position((displayWidth/2) + 75, 275);
    this.list.style('background-color', col);
    this.list.style('font-size', '20px');



    this.button2.position((displayWidth/2) + 75, 315);
    this.button2.style('background-color', col);
    this.button2.style('font-size', '20px');

    

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

        state = 1;

        
        
    }
    } );
}

async gettingLatLong(){

    var response  = await fetch ("https://maps.googleapis.com/maps/api/geocode/json?address");
    var jsonresponse = await response.json();
    console.log(json)
}

}
