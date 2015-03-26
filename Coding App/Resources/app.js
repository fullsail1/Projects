//Anthony Hicks
//MUI_1408
//Coding App
// create base UI tab and root window

//What is App about?
//Pen broker
//


var win0 = Titanium.UI.createWindow({  
    title:'Title',
    backgroundColor:'#fff'
});
var pic1 = Titanium.UI.createImageView({
	image: "pens/bechdel-cartoon.jpg",
	top: 85,
	
	height:270,
	width:270	
});
var picback = Titanium.UI.createView({
	backgroundColor: "brown",
	top: 75,
	
	height:300,
	width:300	
});


var label0 = Titanium.UI.createLabel({
	
	bottom:"30",
	text:'Enter Site',
	color:'brown',
	font:{fontSize:100,fontFamily:'Party LET'},
	textAlign:'center',
	width:'auto'
});

var label1 = Titanium.UI.createLabel({
	
	top:"25",
	text:'Picky Penners',
	color:'brown',
	font:{fontSize:50,fontFamily:'Party LET'},
	textAlign:'center',
	width:'auto'
});

label0.addEventListener("click", function() {
	   require("page1a");
	   //play.stop();
});
      
var play = Ti.Media.createAudioPlayer({
	url: 'lana-del-rey-young-and-beautiful.mp3'
});
play.start();	




//win1.open();
win0.add(picback);
win0.add(pic1);
win0.add(label1);
win0.add(label0);
win0.open();
