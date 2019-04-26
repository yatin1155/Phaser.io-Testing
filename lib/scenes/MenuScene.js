import {
    CST
} from "../CST";
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }

    init(data) {
        // all the data is being passed between scenes
        console.log(data);
        console.log("I GOT IT");
        debugger;
    }
    create() {

        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20,"logo").setDepth(1)
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height* 0.50,"title_bg").setDepth(0)
        // this.add.image(0,0,"title_bg").setOrigin(0).setDepth(0)
        let playButton = this.add.image(this.game.renderer.width / 2,this.game.renderer.height / 2, "play_button").setDepth(2)
        let optionButton = this.add.image(this.game.renderer.width / 2,this.game.renderer.height / 2 + 80, "options_button").setDepth(2);
     
        
        //events 
        playButton.setInteractive();
    }
}