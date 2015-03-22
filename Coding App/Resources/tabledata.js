var mainWin = Ti.UI.createWindow({});

var myData = require("table");

pensTable = Ti.UI.createTableView({
	data : myData.data,
	top : "40"

});

//var sectionAll = [];
//MAKE SECTION
// for (var n in myData.data.pens) {
// console.log(n);
// var section = Ti.UI.createTableViewSection({
// headerTitle: myData.data.pens[n].type,
//
// });
console.log(myData.data.pens[n].type);

//MAKE ROW
for (var i = 0, pens = myData.data.length; i < pens; i++) {//[n].categories.length; i++){
		var pen = myData.data[i];
		
		var row = Ti.UI.createTableViewRow({
		//POPULATE ROW
		title : pen.maker, //.categories[i],

		font : {
			fontFamily : "Thonburi"
		},
	});

	section.add(row);
	//row.addEventListener("click",function(event){

	var a = Ti.UI.createImageView({
		backgroundImage : "test45.jpg",
		top : 25,
		height : 350,
		width : 200,

	});
	var opts = {

		cancel : 2,
		options : ['Access Now', 'DIRECTIONS', 'Cancel'],
		selectedIndex : 2,
		destructive : 0,
		title : 'Access to these amenites costs $19.99 a month!'
	};

	row.addEventListener('click', function(e) {
		var dialog = Ti.UI.createOptionDialog(opts).show();
	});

}
//ADD ROW TO SECTION

// sectionAll.push(section);
// }

//console.log(myData.data.pens[0].price);

pensTable.setData();
mainWin.add(pensTable);
mainWin.open(); 