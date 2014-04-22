function Grid(x, y){
	this.x = x;
	this.y = y;
	this.w = (x * 20 + x);
	this.h = (y * 20 + y);
	$("#grid").width(this.w + "px");
	$("#grid").height(this.h + "px");
	this.creatureList = new Array();
	this.Population = 0;
	this.MaxPopulation = 30;
}
Grid.prototype = {
	draw: function draw(){
		var gridhtml = "";
		for (i = 0; i < this.x; i++){
			for (j = 0; j < this.y; j++){
				gridhtml += "<div></div>";
			}
		}
		$("#grid").html(gridhtml);	
	},
	getPopulation: function getPopulation(){
		return this.Population;
	},
	getMaxPopulation: function getMaxPopulation(){
		return this.MaxPopulation;
	}
}
