var creatureCount = 0;
function Creature(grid, opts){
	if (opts['name']){
		this.name = opts['name'];
	}
	if (opts['f']){
		this.father = opts['f'];
	}
	if (opts['m']){
		this.mother = opts['m'];
	}
	if (opts['age']){
		this.age = opts['age'];
	} else{
		this.age = 0;
	}
	this.gender;
	if (opts['gender']){
		this.gender = opts['gender'];
	} else {
		if (Math.random() < 0.5){
			this.gender = "Male";
		} else {
			this.gender = "Female";
		}
	}
	if (this.gender == "Male"){
		this.color = "#006699";
	}
	if (this.gender == "Female"){
		this.color = "pink";
	}
	this.pattern;
	this.position;
	mygrid.Population += 1;
	this.id = creatureCount++;
	this.html = "";
	this.x = 2;
	this.y = 2;
	this.path;
}
Creature.prototype = {
	move: function move(x, y){
		this.x = x;
		this.y = y;
	},
	getX: function getX(){
		return this.x;
	},
	getY: function getY(){
		return this.y;
	},
	wander: function wander(){
		 var direction = Math.floor((Math.random()*5)+1);
		 var oldx = this.x;
		var oldy = this.y;
		 if (direction == 1){
			this.x += 1;
			if (this.x > mygrid.x - 1){
				this.x = 0;
			}
		 }
		 if (direction == 2){
			this.x -= 1;
			if (this.x < 0){
				this.x = mygrid.x - 1;
			}
		 }
		 if (direction == 3){
			this.y += 1;
			if (this.y > mygrid.y - 1){
				this.y = 0;
			}
		 }
		 if (direction == 4){
			this.y -= 1;
			if (this.y < 0){
				this.y = mygrid.y - 1;
			}
		 } else {

		}
		if (!mygrid.grid[this.x][this.y].passable){
			this.x = oldx;
			this.y = oldy;

		}
		mygrid.grid[this.x][this.y].consume(this.x, this.y);
	},
	mate: function mate(partner){
		if (mygrid.getPopulation() < mygrid.getMaxPopulation()){ 
			if (partner.gender != this.gender){
				if (this.age > 20 && partner.age > 20){
					var f_parent;
					var m_parent;
					if (this.gender == "Male"){
						f_parent = this.id;
						m_parent = partner.id;
					} else {
						f_parent = partner.id;
						m_parent = this.id;

					}
					var baby = new Creature("X", {"m":this.id, "f":this.id});
					baby.move(this.x, this.y);
					return baby;
				}
			}
		}
		return null;
	},
	setPath: function setPath(xl, yl){
		this.path = {"x":xl, "y":yl};
	},
	draw: function draw(){
		this.html = "<div class='creature'";
		this.html += " style='background-color: " + this.color + ";";
		this.html += "left: " + (this.x * 20 + this.x + 1) + "px;";
		this.html += "top: " + (this.y * 20 + this.y + 1)  + "px;";
		this.html += "'>" + this.age + "</div>";
		return this.html;
	},
	increaseAge: function increaseAge(){
		this.age += 1;
		if (this.age > 250){
			return true;
		}
		return null;
	}
}

