module objects {
    export class Island extends objects.GameObject {
        // private instance variables
        private _verticalSpeed:number;

        // public properties

        // constructor
        constructor() {
            super("island");

            this.Start();
        }

        // private methods
        private _move():void {
            this.y += this._verticalSpeed;
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height) {
                this.Reset();
            }
        }

        // public methods

        public Reset(): void {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
        }        
        
        public Start(): void {
            this.Reset();
        }

        public Update(): void {
            this._move();
            this._checkBounds();
        }

        public Destroy(): void {
        }
    }
}