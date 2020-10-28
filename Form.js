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
        console.log(name);
        }
    });
    this.button2.mousePressed(()=>{
        var service = this.list.value();
        console.log(service);
    } );
}
}