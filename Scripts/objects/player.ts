module objects {
    export class Player extends objects.GameObject {
        // private instance variables
        
        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        
        // public methods
        public Start():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = 435;
        }

        public Update():void {
            this.x = managers.Game.stage.mouseX;

            // checks the right boundary
            if(this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }

            // check the left boundary
            if(this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        }

        public Reset():void {

        }

        public Destroy():void {
            
        }
    }
}