 
var win1 = Ti.UI.createWindow({});

var myData = require("table");

var penFunc = require("details");

var pensTable = Ti.UI.createTableView({ top:"40" });

var pens = [];

 console.log(myData.data);
  
for (var i = 0, j = myData.data.length; i < j; i++) {//[n].categories.length; i++){
	var pen = myData.data[i];
		
  	//MAKE ROW
	var row = Ti.UI.createTableViewRow({
		//POPULATE ROW
		title : pen.maker,
		data : pen,
		font : {
			fontFamily : "Thonburi"
		},
	});
	
	pens.push(row);
	pensTable.setData(pens);
}


//section.add(row);
pensTable.addEventListener("click",function(e){
	var pen = e.source.data;
	console.log(e);
	console.log("we're clicking");
	
	//require("perFunc");
	
	// Separate Module that is a FUNCTION that accepts PEN as an argument.
	
	
	// var a = Ti.UI.createImageView({
		// images : "test45.jpg",
		// top:25,
		// height:350,
		// width:200,	
	// });
});



//console.log(myData.data.pens[0].price);


	
// pensTable.setData(sectionAll);         
// mainWin.add(pensTable);
// mainWin.open();
// win3.add(button2);
//pensTable.setData();
win1.add(pensTable);
win1.open();









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






// var win1 = Titanium.UI.iOS.createNavigationWindow({
   // window: win2,
   // backgroundColor:"red",
// });
// 
// 
// 
// var label1 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 1',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// 
// 
// 
// 
// //
// // // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
    // title:'yes',
    // backgroundColor:'#fff'
// });
// 
// var label2 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 2',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win2.add(label2);
// 
// win1.add(label1);
// win1.open();
