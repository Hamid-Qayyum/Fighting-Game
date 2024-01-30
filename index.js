const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
const gravity = 0.2;
c.fillRect(0,0,canvas.width,canvas.height)

// defining class .........
class sprite{
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.width = 50;
        this.height =150;
    }
    Draw(){
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width  , this.height); //(position x , position y ,  width , height)        
    }
    update(){
        this.Draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y ;
       if(this.position.y +this.height + this.velocity.y >= canvas.height){
        this.velocity.y = 0;
        }
       else{
        this.velocity.y += gravity;
       }
    }
} //endind of class code


// player code ..............
const player = new sprite({position:{x : 0, y:0  } , velocity:{x:0, y:0}});


// enemy code .........
const enemy = new sprite({position:{x: 400,y: 100}, velocity:{x:0, y:0}})    

// definining the key object  .........
const key={
    a:{
        pressed : false
    },
    d:{
        pressed : false
    }
}


//  animate the player and enemy ..........
function Animate()
{
   window.requestAnimationFrame(Animate);
   c.fillStyle = 'black';
   c.fillRect(0,0,canvas.width, canvas.height);
   player.update();
   enemy.update();
   player.velocity.x = 0;
   if (key.a.pressed)
   {
      player.velocity.x = -2;
   } 
   else if (key.d.pressed)
    {
      player.velocity.x = 2;
    }
}
Animate();

// adding key down event listner .........
window.addEventListener('keydown', (event) => {
    switch (event.key){
     case'd':
     key.d.pressed = true;
     break
     case'a':
     key.a.pressed = true;
     break
    }
console.log(event.key);
})

// adding key up event listner.............
window.addEventListener('keyup', (event) =>{
    switch (event.key)
    {
     case'd':
     key.d.pressed = false;
     break
     case'a':
     key.a.pressed = false;
     break
    }
})


