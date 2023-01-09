class Polygon{
    constructor (sides){
        this.sides = sides 
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((accumulator, side) => accumulator + side, 0)   
        }
 }

 

 class Triangle extends Polygon{
    get isValid(){
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        let side3 = this.sides[2];
       

         if (side1< (side2+side3) && side2< (side1+side3) && side3< (side2+side1)){
           return true
         }
        return false 
        }
    
 }
 
 class Square extends Polygon{
    
    get isValid(){
        let side1 = this.sides[0];
        let perimeter = this.perimeter
        if ((perimeter)/4 === side1){
            return true
        }
        else {
            return false}
    }

    get area(){
        let side1 = this.sides[0];
        let side2 = this.sides[1];
        return side1*side2
    }
 }
