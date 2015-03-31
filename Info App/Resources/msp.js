var win2 = Ti.UI.createWindow({
  backgroundImage: 'tree_bark.png'
});

var label0 = Titanium.UI.createLabel({
	
	top:"25",
	text:'Party Penners Club',
	color:'brown',
	font:{fontSize:35,fontFamily:'Polgi'},
	textAlign:'center',
	width:'auto'
});

var label1= Ti.UI.createLabel({text:"Please Enter Member Information", top: 75, color: "brown",font:{fontSize:19,fontFamily:'Polgi'}, textAlign:'center', });

var textArea1 = Ti.UI.createTextField({
  borderWidth: 1,
  borderColor: '#bbb',orderColor: '#bbb',
  borderRadius: 2,
  color: '#888',
  font: {fontSize:12, fontWeight:'bold'},
  keyboardType: Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  value: 'USERNAME',
  top: 110,
  width: 200, height : 35
});

var textArea2 = Ti.UI.createTextField({
  borderWidth: 1,
  borderColor: '#bbb',
  borderRadius: 2,
  color: '#888',
  font: {fontSize:12, fontWeight:'bold'},
  keyboardType: Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  value: 'PASSWORD',
  top: 155,
  width: 200, height : 35
});
var textArea3 = Ti.UI.createTextField({
  borderWidth: 1,
  borderColor: '#bbb',orderColor: '#bbb',
  borderRadius: 2,
  color: '#888',
  font: {fontSize:12, fontWeight:'bold'},
  keyboardType: Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  value: 'Confirm PASSWORD',
  top: 200,
  width: 200, height : 35
});

var textArea4 = Ti.UI.createTextField({
  borderWidth: 1,
  borderColor: '#bbb',
  borderRadius: 2,
  color: '#888',
  font: {fontSize:12, fontWeight:'bold'},
  keyboardType: Titanium.UI.KEYBOARD_APPEARANCE_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'center',
  value: 'ENTER EMAIL',
  top: 245,
  width: 200, height : 35
});
var textArea5 = Ti.UI.createButton({
  borderWidth: 1,
  borderColor: '#bbb',
  borderRadius: 2,
  backgroundColor: "green",
  color: '#888',
  title: "ENTER",
  textAlign:'center',
  value: 'I am a textarea',
  top: 300,
  width:150, 
  height:35
});
textArea5.addEventListener('click', function message(e){ 
	var alert2 = Titanium.UI.createAlertDialog
		({ title: 'Hello', message: 'You have logged in with a username of "'+textArea1.value+'"', buttonNames: ['Ok'] });
		 alert2.show();
		 require("page1a");
});

win2.add(textArea5);
win2.add(textArea4);
win2.add(textArea3);
win2.add(textArea2);
win2.add(textArea1);
win2.add(label1);
win2.add(label0);
win2.open();
