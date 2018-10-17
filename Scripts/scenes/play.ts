namespace scenes {
    export class Play extends objects.Scene {
      // private instance variable
      private _player: objects.Player;
      private _ocean: objects.Ocean;
      private _island: objects.Island;
  
      private _cloudNum: number;
      private _clouds: objects.Cloud[];
  
      // public properties
  
      // constructor
      constructor() {
        super();
  
        this.Start();
      }
  
      // private methods
  
      // public methods
  
      public Start(): void {
        this._cloudNum = 3;
  
        // Instantiates a new Array container of Type objects.Cloud
        this._clouds = new Array<objects.Cloud>();
  
        // Fill the Cloud Array with Clouds
        for (let count = 0; count < this._cloudNum; count++) {
          this._clouds[count] = new objects.Cloud();
        }
  
        this.Main();
      }
  
      public Update(): void {
        this._ocean.Update();
        this._player.Update();
        this._island.Update();
  
        // check if player and island are colliding
        managers.Collision.Check(this._player, this._island);
  
        // Update Each cloud in the Cloud Array
        this._clouds.forEach(cloud => {
          cloud.Update();
          managers.Collision.Check(this._player, cloud);
        });
      }
  
      public Destroy(): void {
        this.removeAllChildren();
      }
  
      public Reset(): void {}
  
      public Main(): void {
        // adds ocean to the scene
        this._ocean = new objects.Ocean();
        this.addChild(this._ocean);
  
        // adds island to the scene
        this._island = new objects.Island();
        this.addChild(this._island);
  
        // adds player to the scene
        this._player = new objects.Player();
        this.addChild(this._player);
  
        // adds Each Cloud in the Cloud Array to the Scene
        this._clouds.forEach(cloud => {
          this.addChild(cloud);
        });
      }
    }
  }
  