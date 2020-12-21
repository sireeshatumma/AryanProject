
class Timer{
    constructor(){
        this.mins = 2;

        this.secs = this.mins * 60;
        
        this.seconds=0;
        this.timeout="on";
    }
    display() {
  textSize(50);
        text(this.mins + " : " + this.seconds, width/2, 50);
        if (frameCount % 30 === 0) {
         
            if (this.mins >= 0) {
                    this.secs--;
                    setTimeout(this.Decrement(), 1000);
             }
            
        }
        
    }
      
      
      //Decrement function decrement the value. 
    Decrement() {     
        this.seconds = this.secs;
        if (this.seconds < 0) {
          this.seconds=0
          this.timeout="out";
        }else 
        if (this.seconds < 59) {
          this.seconds = this.secs;
        } else {
          this.mins = Math.floor(this.seconds / 60);
          this.seconds = this.seconds - Math.round(this.mins * 60);
        }
      
      
      
    }
}






 