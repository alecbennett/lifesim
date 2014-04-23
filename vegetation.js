function Vegetation(){
	this.type = "Vegetation";
	this.age;
	this.color = "pink";
}
Vegetation.prototype = {
	grow: function grow(){

	}
}
Grassland.prototype = new Vegetation();
Grassland.prototype.constructor = Grassland;

function Grassland(){
	this.type = "Grassland";
	this.color = "green"
}

Rock.prototype = new Vegetation();
Rock.prototype.constructor = Rock;
function Rock(){
	this.type = "Rock";
	this.color = "gray"
}
