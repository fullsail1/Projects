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


var label0 = Titanium.UI.createLabel({
	color:'#999',
	bottom:"100",
	text:'Enter Site',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

label0.addEventListener("click", function() {
		console.log("we're clicking");
		
		require("page1");
});
      
	




//win1.open();

win0.add(label0);
win0.open();
