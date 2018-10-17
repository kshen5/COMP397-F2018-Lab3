module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(object1: objects.GameObject, object2: objects.GameObject): void {

            if (!object2.IsColliding) {
                let distance = util.Vector2.Distance(object1.Position, object2.Position);
                let totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;

                    switch(object2.name) {
                        case "island":
                            createjs.Sound.play("yaySound");
                        break;
                        case "cloud":
                            createjs.Sound.play("thunderSound");
                        break;
                    }
                }
            }
        }
    }
}