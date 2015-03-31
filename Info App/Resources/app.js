//window

var win = Ti.UI.createWindow({
  backgroundImage: 'tree_bark.png'
});

//body
var label0 = Titanium.UI.createLabel({
	
	top:"25",
	text:'Party Penners Club',
	color:'brown',
	font:{fontSize:35,fontFamily:'Polgi'},
	textAlign:'center',
	width:'auto'
});


//body
	//text fields
var label1= Ti.UI.createLabel({text:"Member Login", top: 140, color: "brown",font:{fontSize:19,fontFamily:'Polgi'}, textAlign:'center', });

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
  top: 170,
  width: 200, height : 35
});

if (textArea1 ===" "){
    //This runs anytime that the age is not a number
    //Reprompt the user for a number
    alert("please enter a value");
}

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
  top: 220,
  width: 200, height : 35
});
var textArea3 = Ti.UI.createButton({
  borderWidth: 1,
  borderColor: '#bbb',
  borderRadius: 2,
  backgroundColor: "green",
  color: '#888',
  title: "ENTER",
  textAlign:'center',
  value: 'I am a textarea',
  top: 280,
  width:150, 
  height:35
});
var label2 = Ti.UI.createLabel({text: "Not a Member? Sign Up NOW", top:325, color: "blue"});

textArea3.addEventListener("click", function() {
		
		require("page1a");
		console.log("we're clicking");
});

label2.addEventListener("click", function() {
		console.log("we're clicking");
		alert("You will now be taken to a new window");
		require("msp");
		
});

//code

var uName = textArea1;
console.log(uName);
var pWord = textArea2;
console.log(pWord);

textArea3.addEventListener('click', function message(e){ 
	var alert1 = Titanium.UI.createAlertDialog({ 
		title: 'Hello', message: 'You have logged in with a username of "'+textArea1.value+'"', 
		buttonNames: ['Ok'] }); alert1.show();
});
//win.add(button1);


//var back= Ti.UI.createImageView({image:"tree_bark.png"});

//win.add(back);


win.add(textArea3);
win.add(textArea2);
win.add(textArea1);
win.add(label2);
win.add(label1);
win.add(label0);
win.open();




























// var groupsButton = Ti.UI.createButton({
    // title: "Groups"
// });
// 
// var addButton = Ti.UI.createButton({
    // systemButton: Ti.UI.iPhone.SystemButton.ADD
// });
// 
// 
// 
// 
// var navWin = Ti.UI.iOS.createNavigationWindow({
    // window: win
// });
// win.open();
// navWin.open();