module objects {
    export class Ocean extends objects.GameObject {
        // private instance variables
        private verticalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("ocean");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            if(this.y >=0) {
                this.Reset();
            }
        }

        private _move():void {
            this.y += this.verticalSpeed;
        }

        // public methods

        public Reset(): void {
            this.y = -960;
        }        
        
        public Start(): void {
            this.Reset();
            this.verticalSpeed = 5; // 5 px per frame
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
            
        }

    }
}