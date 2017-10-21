var Tank = React.createClass({
	getDefaultProps: function(){
		return {
			size: 1,
			color: 'red',
			speed: 50
		};
	},
	getInitialState: function(){
		return {
			x: parseInt(this.props.x) || 100,
			y: parseInt(this.props.y) || 100,
			direction: this.props.direction || Tank.U,
			on: false
		};
	},
	getDirection: function(){
		var direction = this.state.direction;
		while(direction === this.state.direction){
			direction = [Tank.U,Tank.R,Tank.D,Tank.L][Math.floor(Math.random() * 4)];
		}
		return direction;
	},
	handleKeydown: function(e){
		if(this.props.control){
			if(e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37){
				e.preventDefault();
				this.startRun();
			}
			if(e.keyCode == 38){
				this.turn(Tank.U);
			}else if(e.keyCode == 39){
				this.turn(Tank.R)
			}else if(e.keyCode == 40){
				this.turn(Tank.D)
			}else if(e.keyCode == 37){
				this.turn(Tank.L);
			}
		}
	},
	handleKeyup: function(e){
		if(this.props.control){
			if(e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 37){
				e.preventDefault();
				this.stopRun();
			}
		}
	},
	componentDidMount: function(){
		fieldTanks.push(this);
		$(window).keydown(this.handleKeydown);
		$(window).keyup(this.handleKeyup);
	},
	destroy: function(){
		this.setState({
			on: false
		});
		React.unmountComponentAtNode(this.fieldPoint);
		$(this.fieldPoint).remove();
	},
	shouldComponentUpdate: function(nextProps, nextState){
		if(this.state.on !== nextState.on){
			return false;
		}

		return true;
	},
	isTankOvered: function(nextState){
		var isOvered = false, otherCore, myCore, ox, oy;
		$.each(fieldTanks, function(i, tank){
			if(this !== tank){
				myCore = this.getCore(nextState);
				otherCore = tank.getCore();
				ox = myCore.x-otherCore.x;
				oy = myCore.y-otherCore.y;
		
				if(Math.sqrt(ox*ox + oy*oy)<=(parseInt(this.props.size)+parseInt(tank.props.size))*32/2){
					isOvered = true;
					return;
				}
			}
		}.bind(this));

		return isOvered;
	},
	getCore: function(state){
		state = state || this.state;
		return {
			x: state.x + parseInt(this.props.size) * 32 / 2,
			y: state.y + parseInt(this.props.size) * 32 / 2
		};
	},
	findEnemy: function(){
		var timeLong = 4000, freq;
		setTimeout(function(){
			if(this.state.on){
				if(this.props.control){
					this.turn(this.state.direction);
				}else{
					this.turn();
				}
				freq = Math.floor(Math.random()*timeLong);
				setTimeout(arguments.callee.bind(this), freq);
			}
		}.bind(this), Math.floor(Math.random()*timeLong));
	},
	startRun: function(){
		var freq = 1000/this.props.speed;
		if(!this.state.on){
			this.setState({
				on: true
			});
			setTimeout(function(){
				if(this.state.on){
					this.forward();
					setTimeout(arguments.callee.bind(this), freq);
				}
			}.bind(this), freq);
			this.findEnemy();
		}
	},
	stopRun: function(){
		this.setState({
			on: false
		});
	},
	fire: function(){
		var timeLong = 8000, freq;
		setTimeout(function(){
			if(this.state.onFire){
				this.fire();
			}
		}.bind(this), Math.floor(Math.random()*timeLong));

		this.setState({
			fire: 1
		});
		this.setState({
			fire: 0
		});
	},
	stopFire: function(){
		this.setState({
			onFire: false
		});
	},
	startFire: function(){
		if(!this.state.onFire){
			this.setState({
				onFire: true
			});
			this.fire();
		}
	},
	turn: function(direction){
		direction = direction || this.getDirection();
		if(this.state.direction != direction){
			this.setState({
				direction: direction
			});
		}
	},
	forward: function(){
		var x, y, isOut = false;
		switch(this.state.direction){
			case Tank.U:
				if(this.state.y > 0){
					y = this.state.y - 1;
					x = this.state.x;
				}else{
					y = 0;
					x = this.state.x;
					isOut = true;
				}
				break;
			case Tank.R:
				if(this.state.x + this.props.size * 32 < warFieldWidth){
					x = this.state.x + 1;
					y = this.state.y;
				}else{
					x = warFieldWidth - this.props.size * 32;
					y = this.state.y;
					isOut = true;
				}
				break;
			case Tank.D:
				if(this.state.y + this.props.size * 32 < warFieldHeight){
					y = this.state.y + 1;
					x = this.state.x;
				}else{
					y = warFieldHeight - this.props.size * 32;
					x = this.state.x;
					isOut = true;
				}
				break;
			case Tank.L:
				if(this.state.x > 0){
					x = this.state.x - 1;
					y = this.state.y;
				}else{
					x = 0;
					y = this.state.y;
					isOut = true;
				}
				break;
			default:
		}
		if(isOut || this.isTankOvered({x:x, y:y})){
			if(this.props.control){
				this.turn(this.state.direction);
			}else{
				
			}
		}else{
			this.setState({
				x: x,
				y: y
			});
		}
	},
	render: function(){
		var size = this.props.size,
			fire = this.state.fire,
			core = this.getCore(),
			bulletSpeed = parseInt(this.props.speed) * 2,
			width,
			height,
			left,
			top;

		width = size * 32;
		height = size * 32;
		left = this.state.x;
		top = this.state.y;

		return 	<div style={{position:'absolute', width:width, height:height, left:left, top:top}}>
					<Tank.Room size={this.props.size} color={this.props.color} direction={this.state.direction}/>
					<Tank.Gate size={this.props.size} direction={this.state.direction}/>
					<Tank.Gun size={this.props.size} direction={this.state.direction} fire={fire} bulletSpeed={bulletSpeed} coreX={core.x} coreY={core.y}/>
					<Tank.Wheel size={this.props.size} type={Tank.WHEEL_LEFT} direction={this.state.direction}/>
					<Tank.Wheel size={this.props.size} type={Tank.WHEEL_RIGHT} direction={this.state.direction}/>
				</div>;
	}
});

var warFieldWidth = $(window).width();
var warFieldHeight = $(window).height();

var fieldTanks = [];

function getWarFieldPoint(){
	return $('<div>').appendTo('body')[0];
}

function changeWarFieldArea(){
	warFieldWidth = $(window).width();
	warFieldHeight = $(window).height();
}

$(window).resize(changeWarFieldArea);

Tank.U = 'u';
Tank.R = 'r';
Tank.D = 'd';
Tank.L = 'l';

Tank.WHEEL_LEFT = 'l';
Tank.WHEEL_RIGHT = 'r';

Tank.Gate = React.createClass({
	getDefaultProps: function(){
		return {
			color: 'black'
		};
	},
	render: function(){
		var direciton = this.props.direction,
			backgroundColor = this.props.color,
			size = this.props.size,
			borderRadius = this.props.size * 3,
			width,
			height,
			left,
			top,
			style;

		width = size * 8;
		height = size * 8;
		left = size * 12;
		top = size * 12;

		style = {
			position:'absolute', 
			width:width, 
			height:height, 
			left:left, 
			top:top, 
			borderWidth:0, 
			borderStyle:'solid', 
			borderRadius:borderRadius,
			backgroundColor:backgroundColor
		};

		return <div style={style} />;
	}
});

Tank.Room = React.createClass({
	render: function(){
		var direction = this.props.direction,
			backgroundColor = this.props.color,
			size = this.props.size,
			width,
			height,
			left,
			top;

		switch(direction){
			case Tank.U:
				width = size * 16;
				height = size * 12;
				left = size * 8;
				top = size * 12;
				break;
			case Tank.R:
				width = size * 12;
				height = size * 16;
				left = size * 8;
				top = size * 8;
				break;
			case Tank.D:
				width = size * 16;
				height = size * 12;
				left = size * 8;
				top = size * 8;
				break;
			case Tank.L:
				width = size * 12;
				height = size * 16;
				left = size * 12;
				top = size * 8;
				break;
			default:
		}

		return 	<div style={{position:'absolute', left:left, top:top, width:width, height:height, backgroundColor:backgroundColor}} />;
	}
});

Tank.Wheel = React.createClass({
	getDefaultProps: function(){
		return {
			color: 'black'
		};
	},
	changeDirection: function(direction){
		this.setState({
			direciton: direction
		});
	},
	render: function(){
		var direction = this.props.direction, 
			backgroundColor = this.props.color, 
			size = this.props.size,
			type = this.props.type,
			width, 
			height, 
			left, 
			top;
		if(type === Tank.WHEEL_LEFT){
			switch(direction){
				case Tank.U:
					width = size * 4;
					height = size * 20;
					left = size * 4;
					top = size * 8;
					break;
				case Tank.R:
					width = size * 20;
					height = size * 4;
					left = size * 4;
					top = size * 4;
					break;
				case Tank.D:
					width = size * 4;
					height = size * 20;
					left = size * 24;
					top = size * 4;
					break;
				case Tank.L:
					width = size * 20;
					height = size * 4;
					left = size * 8;
					top = size * 24;
					break;
				default:
			}
		}else if(type === Tank.WHEEL_RIGHT){
			switch(direction){
				case Tank.U:
					width = size * 4;
					height = size * 20;
					left = size * 24;
					top = size * 8;
					break;
				case Tank.R:
					width = size * 20;
					height = size * 4;
					left = size * 4;
					top = size * 24;
					break;
				case Tank.D:
					width = size * 4;
					height = size * 20;
					left = size * 4;
					top = size * 4;
					break;
				case Tank.L:
					width = size * 20;
					height = size * 4;
					left = size * 8;
					top = size * 4;
					break;
				default:
			}
		}

		return <div style={{position:'absolute',width:width,height:height,left:left,top:top,backgroundColor:backgroundColor}} />;
	}
});

Tank.Gun = React.createClass({
	getDefaultProps: function(){
		return {
			color: 'black'
		};
	},
	changeDirection: function(direction){
		this.setState({
			direction: direction
		});
	},
	render: function(){
		var direction = this.props.direction, 
			backgroundColor = this.props.color, 
			bulletSpeed = this.props.bulletSpeed,
			size = this.props.size,
			coreX = this.props.coreX,
			coreY = this.props.coreY,
			fire = this.props.fire,
			width, 
			height, 
			left, 
			top,
			endWith,
			endHeight,
			endLeft,
			endTop,
			bulletLeft,
			bulletTop;

		switch(direction){
			case Tank.U:
				width = size * 2;
				height = size * 16;
				left = size * 15;
				top = 0;
				endWidth = size * 4;
				endHeight = size * 2;
				endLeft = - size;
				endTop = 0;
				bulletTop = coreY - size * 19 - 2;
				bulletLeft = coreX - size;
				break;
			case Tank.R:
				width = size * 16;
				height = size * 2;
				left = size * 16;
				top = size * 15;
				endWidth = size * 2;
				endHeight = size * 4;
				endLeft = size * 14;
				endTop = - size;
				bulletTop = coreY - size;
				bulletLeft = coreX + size * 16 + 2;
				break;
			case Tank.D:
				width = size * 2;
				height = size * 16;
				left = size * 15;
				top = size * 16;
				endWidth = size * 4;
				endHeight = size * 2;
				endLeft = - size;
				endTop = size * 14;
				bulletTop = coreY + size * 16 + 2;
				bulletLeft = coreX - size;
				break;
			case Tank.L:
				width = size * 16;
				height = size * 2;
				left = size * 0;
				top = size * 15;
				endWidth = size * 2;
				endHeight = size * 4;
				endLeft = 0;
				endTop = - size;
				bulletTop = coreY - size;
				bulletLeft = coreX - size * 19 - 2;
				break;
			default:
		}
		if(fire){
			var fieldPoint = getWarFieldPoint();
			var bullet = React.render(<Bullet direction={direction} x={bulletLeft} y={bulletTop} size={size} speed={bulletSpeed}/>, fieldPoint);
			bullet.fieldPoint = fieldPoint;
		}

		return 	<div style={{position:'absolute', left:left, top:top, width:width, height:height, backgroundColor:backgroundColor}} >
					<div style={{position:'absolute',width:endWidth, height:endHeight,left:endLeft,top:endTop, backgroundColor:backgroundColor}}/>
				</div>;
	}
});

var Bullet = React.createClass({
	getDefaultProps: function(){
		return {
			color: 'black'
		};
	},
	getInitialState: function(){
		return {
			on: true,
			x: parseInt(this.props.x),
			y: parseInt(this.props.y)
		};
	},
	isHit: function(nextState){
		var hitted = false, tankCore, myCore, ox, oy;
		$.each(fieldTanks, function(i, tank){
			if(!hitted){
				myCore = this.getCore(nextState);
				tankCore = tank.getCore();
				ox = myCore.x-tankCore.x;
				oy = myCore.y-tankCore.y;
		
				if(Math.sqrt(ox*ox + oy*oy)<parseInt(this.props.size)*2+parseInt(tank.props.size)*32/2){
					hitted = true;
					tank.destroy();
					fieldTanks.splice(i, 1);
					return;
				}
			}
		}.bind(this));

		return hitted;
	},
	disable: function(){
		this.setState({
			on: false
		});
		React.unmountComponentAtNode(this.fieldPoint);
		$(this.fieldPoint).remove();
	},
	getCore: function(state){
		state = state || this.state;
		return {
			x: state.x + parseInt(this.props.size) * 2,
			y: state.y + parseInt(this.props.size) * 2
		};
	},
	fly: function(){
		var freq = 1000/parseInt(this.props.speed);
		setTimeout(function(){
			if(this.state.on){
				this.forward();
				setTimeout(arguments.callee.bind(this), freq);
			}
		}.bind(this), freq);
	},
	forward: function(){
		var direction = this.props.direction, isOut = false, x, y;
		switch(direction){
			case Tank.U:
				if(this.state.y > 0){
					y = this.state.y - 1;
					x = this.state.x;
				}else{
					y = 0;
					x = this.state.x;
					isOut = true;
				}
				break;
			case Tank.R:
				if(this.state.x + this.props.size * 3 < warFieldWidth){
					x = this.state.x + 1;
					y = this.state.y;
				}else{
					x = warFieldWidth - this.props.size * 3;
					y = this.state.y;
					isOut = true;
				}
				break;
			case Tank.D:
				if(this.state.y + this.props.size * 3 < warFieldHeight){
					y = this.state.y + 1;
					x = this.state.x;
				}else{
					y = warFieldHeight - this.props.size * 3;
					x = this.state.x;
					isOut = true;
				}
				break;
			case Tank.L:
				if(this.state.x > 0){
					x = this.state.x - 1;
					y = this.state.y;
				}else{
					x = 0;
					y = this.state.y;
					isOut = true;
				}
				break;
			default:
		}

		if(isOut || this.isHit({x:x, y:y})){
			this.disable();
		}else{
			this.setState({
				x: x,
				y: y
			});
		}
	},
	componentDidMount: function(){
		this.fly();
	},
	render: function(){
		var backgroundColor = this.props.color,
			size = parseInt(this.props.size),
			direction = this.props.direction,
			width,
			height,
			left,
			top,
			borderRadius;

		left = this.state.x;
		top = this.state.y;
		borderRadius = size * 2;

		switch(direction){
			case Tank.U:
				width = size * 2;
				height = size * 3;
				break;
			case Tank.R:
				width = size * 3;
				height = size * 2;
				break;
			case Tank.D:
				width = size * 2;
				height = size * 3;
				break;
			case Tank.L:
				width = size * 3;
				height = size * 2;
				break;
			default:
		}

		return <div style={{position:'absolute',width:width, height:height, left:left, top:top, backgroundColor:backgroundColor, borderRadius:borderRadius}}/>; 
	}
});

var Controller = React.createClass({
	stopRun: function(){
		$.each(fieldTanks, function(i, tank){
			tank.stopRun();
		});
	},
	stopFire: function(){
		$.each(fieldTanks, function(i, tank){
			tank.stopFire();
		});
	},
	startRun: function(){
		$.each(fieldTanks, function(i, tank){
			if(!tank.props.control){
				tank.startRun();
			}
		});
	},
	startFire: function(){
		$.each(fieldTanks, function(i, tank){
			tank.startFire();
		});
	},
	render: function(){
		return 	<div style={{height:30,position:'absolute',right:30,bottom:10}}>
					<input type="button" value="开始行驶" onClick={this.startRun}/>
					<input type="button" value="开始开炮" onClick={this.startFire}/>
					<input type="button" value="暂停行驶" onClick={this.stopRun}/>
					<input type="button" value="暂停开炮" onClick={this.stopFire}/>
				</div>
	}
});

React.render(<Controller />, getWarFieldPoint());

function startGame(){
	var tank, size = 1, x, colors = ['blue', 'red', 'green', 'orange'], color, fieldPoint;
	if(fieldTanks.length){
		return;
	}
	for(var i=0; i<8; i++){
		x = size * 32 * (i+1);
		color = colors[i%4];
		fieldPoint = getWarFieldPoint();
		tank = React.render(<Tank speed="100" size={size} x={x} y="10" color={color} direction={Tank.D}/>, fieldPoint);
		tank.fieldPoint = fieldPoint;
		tank.startRun();
		// tank.startFire();
	}

	fieldPoint = getWarFieldPoint();
	tank = React.render(<Tank control={true} speed="200" size="2" x="140" y="100" color="black" direction={Tank.U}/>, fieldPoint);
	tank.fieldPoint = fieldPoint;
	// tank.startRun();
	// tank.startFire();
}
startGame();

