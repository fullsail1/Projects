exports.open = function(pen){
	// Create a Window
	winP= Ti.UI.createWindow({backgroundColor:"gray"});
	
	// Make some elements (Labels, imageview, etc)
	penTag=Ti.UI.createLabel({text:"maker", top:50, });
	penTag1=Ti.UI.createLabel({text:"type"});
	penTag2=Ti.UI.createLabel({text:"inkcolor"});
	penTag3=Ti.UI.createLabel({textarea:"blah blah", bottom: 200, width: 200,});
	
	penPic=Ti.UI.createImageView({image:"papermte.jpg", top:100, height:200, width:200});
	
	// return window OR open window
	
	winP.add(penPic);
	winP.add(penTag3);
	winP.add(penTag2);
	winP.add(penTag1);
	winP.add(penTag);
	winP.open();
};
