class Form{
    constructor(){
        this.reset= createbutton('RESET');
    }
    display(){
        this.reset.position(1400,0);

        this.reset.mousePressed(()=>{
            x.update(0);
            y.update(0);
          })
    }
    
}