(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"web_banner_atlas_1", frames: [[0,0,457,81],[0,83,456,47],[0,132,456,47]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["web_banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["web_banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["web_banner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._2210_w054_n005_162a_p1_162 = function() {
	this.initialize(img._2210_w054_n005_162a_p1_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7200,2250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-114.2,-20.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.2,-20.1,228.5,40.5);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-113.9,-11.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-11.7,228,23.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-113.9,-11.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-11.7,228,23.5);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._2210_w054_n005_162a_p1_162();
	this.instance.setTransform(0,0,0.1129,0.1129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,812.8,254), null);


// stage content:
(lib.web_banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(198.3,67.7);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(198.3,67.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},119).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},119).to({alpha:1},30).wait(30));

	// Layer_2
	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.setTransform(167.65,35.85);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},29).wait(150));

	// Layer_1
	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(-34.45,183,1,1,0,0,0,406.4,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-32.15},0).wait(1).to({x:-29.9},0).wait(1).to({x:-27.65},0).wait(1).to({x:-25.4},0).wait(1).to({x:-23.15},0).wait(1).to({x:-20.9},0).wait(1).to({x:-18.6},0).wait(1).to({x:-16.35},0).wait(1).to({x:-14.1},0).wait(1).to({x:-11.85},0).wait(1).to({x:-9.6},0).wait(1).to({x:-7.35},0).wait(1).to({x:-5.1},0).wait(1).to({x:-2.8},0).wait(1).to({x:-0.55},0).wait(1).to({x:1.7},0).wait(1).to({x:3.95},0).wait(1).to({x:6.2},0).wait(1).to({x:8.45},0).wait(1).to({x:10.75},0).wait(1).to({x:13},0).wait(1).to({x:15.25},0).wait(1).to({x:17.5},0).wait(1).to({x:19.75},0).wait(1).to({x:22},0).wait(1).to({x:24.25},0).wait(1).to({x:26.55},0).wait(1).to({x:28.8},0).wait(1).to({x:31.05},0).wait(1).to({x:33.3},0).wait(1).to({x:35.55},0).wait(1).to({x:37.8},0).wait(1).to({x:40.05},0).wait(1).to({x:42.35},0).wait(1).to({x:44.6},0).wait(1).to({x:46.85},0).wait(1).to({x:49.1},0).wait(1).to({x:51.35},0).wait(1).to({x:53.6},0).wait(1).to({x:55.9},0).wait(1).to({x:58.15},0).wait(1).to({x:60.4},0).wait(1).to({x:62.65},0).wait(1).to({x:64.9},0).wait(1).to({x:67.15},0).wait(1).to({x:69.4},0).wait(1).to({x:71.7},0).wait(1).to({x:73.95},0).wait(1).to({x:76.2},0).wait(1).to({x:78.45},0).wait(1).to({x:80.7},0).wait(1).to({x:82.95},0).wait(1).to({x:85.2},0).wait(1).to({x:87.5},0).wait(1).to({x:89.75},0).wait(1).to({x:92},0).wait(1).to({x:94.25},0).wait(1).to({x:96.5},0).wait(1).to({x:98.75},0).wait(1).to({x:101.05},0).wait(1).to({x:103.3},0).wait(1).to({x:105.55},0).wait(1).to({x:107.8},0).wait(1).to({x:110.05},0).wait(1).to({x:112.3},0).wait(1).to({x:114.55},0).wait(1).to({x:116.85},0).wait(1).to({x:119.1},0).wait(1).to({x:121.35},0).wait(1).to({x:123.6},0).wait(1).to({x:125.85},0).wait(1).to({x:128.1},0).wait(1).to({x:130.4},0).wait(1).to({x:132.65},0).wait(1).to({x:134.9},0).wait(1).to({x:137.15},0).wait(1).to({x:139.4},0).wait(1).to({x:141.65},0).wait(1).to({x:143.9},0).wait(1).to({x:146.2},0).wait(1).to({x:148.45},0).wait(1).to({x:150.7},0).wait(1).to({x:152.95},0).wait(1).to({x:155.2},0).wait(1).to({x:157.45},0).wait(1).to({x:159.7},0).wait(1).to({x:162},0).wait(1).to({x:164.25},0).wait(1).to({x:166.5},0).wait(1).to({x:168.75},0).wait(1).to({x:171},0).wait(1).to({x:173.25},0).wait(1).to({x:175.55},0).wait(1).to({x:177.8},0).wait(1).to({x:180.05},0).wait(1).to({x:182.3},0).wait(1).to({x:184.55},0).wait(1).to({x:186.8},0).wait(1).to({x:189.05},0).wait(1).to({x:191.35},0).wait(1).to({x:193.6},0).wait(1).to({x:195.85},0).wait(1).to({x:198.1},0).wait(1).to({x:200.35},0).wait(1).to({x:202.6},0).wait(1).to({x:204.85},0).wait(1).to({x:207.15},0).wait(1).to({x:209.4},0).wait(1).to({x:211.65},0).wait(1).to({x:213.9},0).wait(1).to({x:216.15},0).wait(1).to({x:218.4},0).wait(1).to({x:220.7},0).wait(1).to({x:222.95},0).wait(1).to({x:225.2},0).wait(1).to({x:227.45},0).wait(1).to({x:229.7},0).wait(1).to({x:231.95},0).wait(1).to({x:234.2},0).wait(1).to({x:236.5},0).wait(1).to({x:238.75},0).wait(1).to({x:241},0).wait(1).to({x:243.25},0).wait(1).to({x:245.5},0).wait(1).to({x:247.75},0).wait(1).to({x:250.05},0).wait(1).to({x:252.3},0).wait(1).to({x:254.55},0).wait(1).to({x:256.8},0).wait(1).to({x:259.05},0).wait(1).to({x:261.3},0).wait(1).to({x:263.55},0).wait(1).to({x:265.85},0).wait(1).to({x:268.1},0).wait(1).to({x:270.35},0).wait(1).to({x:272.6},0).wait(1).to({x:274.85},0).wait(1).to({x:277.1},0).wait(1).to({x:279.35},0).wait(1).to({x:281.65},0).wait(1).to({x:283.9},0).wait(1).to({x:286.15},0).wait(1).to({x:288.4},0).wait(1).to({x:290.65},0).wait(1).to({x:292.9},0).wait(1).to({x:295.2},0).wait(1).to({x:297.45},0).wait(1).to({x:299.7},0).wait(1).to({x:301.95},0).wait(1).to({x:304.2},0).wait(1).to({x:306.45},0).wait(1).to({x:308.7},0).wait(1).to({x:311},0).wait(1).to({x:313.25},0).wait(1).to({x:315.5},0).wait(1).to({x:317.75},0).wait(1).to({x:320},0).wait(1).to({x:322.25},0).wait(1).to({x:324.5},0).wait(1).to({x:326.8},0).wait(1).to({x:329.05},0).wait(1).to({x:331.3},0).wait(1).to({x:333.55},0).wait(1).to({x:335.8},0).wait(1).to({x:338.05},0).wait(1).to({x:340.35},0).wait(1).to({x:342.6},0).wait(1).to({x:344.85},0).wait(1).to({x:347.1},0).wait(1).to({x:349.35},0).wait(1).to({x:351.6},0).wait(1).to({x:353.85},0).wait(1).to({x:356.15},0).wait(1).to({x:358.4},0).wait(1).to({x:360.65},0).wait(1).to({x:362.9},0).wait(1).to({x:365.15},0).wait(1).to({x:367.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-272.8,155.7,1046.5,154.3);
// library properties:
lib.properties = {
	id: 'E5BE5361C77D8149936E7FA584AF2D0C',
	width: 336,
	height: 280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_2210_w054_n005_162a_p1_162.jpg?1725877668483", id:"_2210_w054_n005_162a_p1_162"},
		{src:"images/web_banner_atlas_1.png?1725877668416", id:"web_banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E5BE5361C77D8149936E7FA584AF2D0C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;