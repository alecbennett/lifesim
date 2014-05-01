function LandType(){
	this.type = "LandType";
	this.passable = true;
	this.age;
	this.color = "pink";
	this.succeed = function(xl, yl){ };
	this.consume = function(){ };
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
	this.consume = function(xl, yl){
		mygrid.grid[xl][yl] = new Dirt();
		mygrid.drawCell(yl, xl);
	}
}

Dirt.prototype = new LandType();
Dirt.prototype.constructor = Dirt;

function Dirt(){
	this.type = "Dirt";
	this.color = "tan"
	this.count = 0;
	this.succeed = function(xl, yl){
		this.count += 1;
		if (this.count > 100){ 
			mygrid.grid[yl][xl] = new Grassland();
			mygrid.drawCell(yl, xl);
		}
	}
	this.consume = function(){
		this.count = 0;
	}
}
Rock.prototype = new LandType();
Rock.prototype.constructor = Rock;
function Rock(){
	this.type = "Rock";
	this.color = "gray"
}
Mountain.prototype = new LandType();
Mountain.prototype.constructor = Mountain;
function Mountain(){
	this.passable = false;
	this.type = "Mountain";
	this.color = "#555555"
}
Water.prototype = new LandType();
Water.prototype.constructor = Water;
function Water(){
	this.passable = false;
	this.type = "Water";
	this.color = "teal"
}
