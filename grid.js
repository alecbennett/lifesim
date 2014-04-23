function Grid(x, y){
	this.x = x;
	this.y = y;
	this.w = (x * 20 + x);
	this.h = (y * 20 + y);
	$("#grid").width(this.w + "px");
	$("#grid").height(this.h + "px");
	this.creatureList = new Array();
	this.grid = new Array();
	for (i = 0; i < this.x; i++){
		this.grid[i] = new Array();
		for (j = 0; j < this.y; j++){
			var randland = Math.random();
			if (randland < 0.5){
				this.grid[i][j] = new Grassland();
			} else if (randland < 0.60){
				this.grid[i][j] = new Water();
			} else {
				this.grid[i][j] = new Rock();
			}
		}
	}
	this.Population = 0;
	this.MaxPopulation = 30;
}
Grid.prototype = {
	init: function init(){
		var gridhtml = "";
		for (i = 0; i < this.y; i++){
			for (j = 0; j < this.x; j++){
				gridhtml += "<div id='x" + j + "y" + i + "' style='background-color: " + this.grid[j][i].color + "'></div>";
			}
		}
		$("#grid").html(gridhtml);	

	},
	draw: function draw(){
		for (i = 0; i < this.x; i++){
			for (j = 0; j < this.y; j++){
				this.drawCell(i, j);
			}
		}
		
	},
	drawCell: function drawCell(xl, yl){
		var cellid = "#x" + xl + "y" + yl;
		$(cellid).css('background-color', mygrid.grid[xl][yl].color);
	},
	getPopulation: function getPopulation(){
		return this.Population;
	},
	getMaxPopulation: function getMaxPopulation(){
		return this.MaxPopulation;
	},
	timeStep: function timeStep(){
		
	},
	regrowVegetation: function regrowVegetation(){
		for (i = 0; i < this.y; i++){
			for (j = 0; j < this.x; j++){
					
			}
		}
	},
	setLandType: function setLandType(xl, yl, vt){
		this.grid[xl][yl] = new vt();
	}
}
