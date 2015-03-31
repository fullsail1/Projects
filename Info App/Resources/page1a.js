var win1 = Ti.UI.createWindow({});

var myData = require("table");

//var penFunc = require("details");
var pensTableTopView = Titanium.UI.createSearchBar({
    barColor:'red', 
    showCancel:true,
    //height:25,
    top:0
    //prompt:"here to help"
});
var pensTable = Ti.UI.createTableView({ top:40,  filterAttribute:"title", search:pensTableTopView,});

Ti.UI.createView({ backgroundColor:"brown" });
var pens = [];

 console.log(myData.data);
  
for (var i=0, j = myData.data.length; i<j; i++) { 
	var pen = myData.data[i];
	console.log(pen);
		
  	//MAKE ROW
	var row = Ti.UI.createTableViewRow({
		//POPULATE ROW
		title : pen.maker,
		data : pen,
		font : {
			fontFamily : "Thonburi"
		}
	});
	
	pens.push(row);
	pensTable.setData(pens);
}


//section.add(row);
pensTable.addEventListener("click",function(e){
	var pen = e.source.data;
	console.log(e.index);
	console.log(e.source);
	console.log(e);
	console.log("we're clicking");
	var a = Ti.UI.createImageView({
		image : pen.img,
		top:20,
		height:200,
		width:300,	
	});
	var a1= Ti.UI.createWindow({backgroundColor:"gray",});
	var words = Titanium.UI.createTextArea({
	color:'#999',
	bottom:"130",
	value:'Here at Picky Penners we select the finest writing utensils from various discount vendors offering your the most affordable options to add to your collections ',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});


	var back = Titanium.UI.createLabel({
	color:'#999',
	bottom:"25",
	text:'EXIT',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

back.addEventListener("click", function() {
		console.log("we're clicking");
		
		a1.close();
});
	//a1.add(pensTableTopView);
	a1.add(back);
	a1.add(words);
	a1.add(a);
	a1.open();
	//win1.open(a1);
	//require("perFunc");
	// Separate Module that is a FUNCTION that accepts PEN as an argument.
});


//topWin.openWindow();
//console.log(myData.data.pens[0].price);

// pensTable.setData(sectionAll);         
// mainWin.add(pensTable);
// mainWin.open();
// win3.add(button2);
//pensTable.setData();
win1.add(pensTableTopView);
win1.add(pensTable);
win1.open();

// var topWin = Ti.UI.iOS.createNavigationWindow({window:win1});
// 
// 
// topWin.open();




// var win2 = Titanium.UI.createWindow({
    // backgroundColor: 'red',
    // title: 'Red Window'
// });

// var win1 = Titanium.UI.iOS.createNavigationWindow({
   //window: win2
// });

// var win3 = Titanium.UI.createWindow({
    // backgroundColor: 'blue',
    // title: 'Blue Window'
// });
// 
// var button = Titanium.UI.createButton({
    // title: 'Open Blue Window'
// });
// button.addEventListener('click', function(){
    // win1.openWindow(win3, {animated:true});
// });
// 
// win2.add(button);
// var button2 = Titanium.UI.createButton({
    // title: 'Close Blue Window'
// });
// button2.addEventListener('click', function(){
    // win1.closeWindow(win3, {animated:false}); //win3.close() will also work!!
// });


