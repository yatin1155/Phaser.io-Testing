import {
    CST
} from "../CST";
export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }

    init() {
    
    }

    preload() {
      
        this.load.image("title_bg","../assets/title_bg.jpg");
        this.load.image("options_button","../assets/options_button.png");
        this.load.image("play_button","../assets/play_button.png");
        this.load.image("logo","../assets/logo.png");
        this.load.spritesheet("cat","../assets/cat.png",{
            frameHeight:32,
            frameWidth:32
        });

        let loadingBar = this.add.graphics({
            fillStyle:{
                color:0xffffff
            }
        });

        //loding bar
        this.load.on("progress",(percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height /2, this.game.renderer.width * percent, 50);
        });

        this.load.on("complete",(percent)=>{
            this.scene.start(CST.SCENES.MENU, "Hello from load scene");
        })
    }
    update() {
       
    }
    create() {
       
        
    }
}