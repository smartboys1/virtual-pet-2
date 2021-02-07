class Food {
    constructor(){
    this.food=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }

   updateFood(food){
    this.food=food;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.food>0){
      this.food=this.food-1;
     }
    }

    getFood(){
      return this.food;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);
      
      if(this.food!=0){
        for(var i=0;i<this.food;i++){
          if(i%10==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}