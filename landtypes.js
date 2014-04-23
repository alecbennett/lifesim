function LandType(){
	this.type = "LandType";
	this.age;
	this.color = "pink";
}
LandType.prototype = {
	grow: function grow(){

	}
}
Grassland.prototype = new LandType();
Grassland.prototype.constructor = Grassland;

function Grassland(){
	this.type = "Grassland";
	this.color = "green"
}

Rock.prototype = new LandType();
Rock.prototype.constructor = Rock;
function Rock(){
	this.type = "Rock";
	this.color = "gray"
}
Water.prototype = new LandType();
Water.prototype.constructor = Water;
function Water(){
	this.type = "Rock";
	this.color = "blue"
}
