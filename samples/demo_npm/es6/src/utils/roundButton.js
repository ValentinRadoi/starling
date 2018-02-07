import Point from "openfl/geom/Point";
import Rectangle from "openfl/geom/Rectangle";

import Button from "starling/display/Button";
import DisplayObject from "starling/display/DisplayObject";
import Texture from "starling/textures/Texture";

class RoundButton extends Button
{
    constructor(upState, text="", downState=null)
    {
        super(upState, text, downState);
    }
    
    hitTest(localPoint)
    {
        // When the user touches the screen, this method is used to find out if an object was 
        // hit. By default, this method uses the bounding box, but by overriding it, 
        // we can change the box (rectangle) to a circle (or whatever necessary).
        
        // these are the cases in which a hit test must always fail
        if (!this.visible || !this.touchable || !this.hitTestMask(localPoint)) return null;
        
        // get center of button
        var bounds = this.bounds;
        var centerX = bounds.width / 2;
        var centerY = bounds.height / 2;
        
        // calculate distance of localPoint to center. 
        // we keep it squared, since we want to avoid the 'sqrt()'-call.
        var sqDist = Math.pow(localPoint.x - centerX, 2) + 
                            Math.pow(localPoint.y - centerY, 2);
        
        // when the squared distance is smaller than the squared radius, 
        // the point is inside the circle
        var radius = bounds.width / 2 - 8;
        if (sqDist < Math.pow(radius, 2)) return this;
        else return null;
    }
}

export default RoundButton;