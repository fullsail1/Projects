
var win1 = Titanium.UI.createWindow({  
    title:'An app about Tony',
    backgroundColor:'#fff'
});
var win2 = Titanium.UI.createWindow({  
    title:'An app about Tony',
    backgroundColor:'gray'
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Personal Statement',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top: 200,
	width:'auto',
	layout:"vertical"
});
var pic1 = Titanium.UI.createImageView({
	image: "photo89.jpg",
	top: 25,
	left:5,
	height:150,
	width:150	
});
var vitalStats = Titanium.UI.createTextArea({
	borderWidth: 2,
	borderColor: '#bbb',
	borderRadius: 5,
	color: '#888',
	textAlign: 'left',
  	value: 'You have come to my APP. Welcome! Soon, you will gain knowledge of who i hope to be.."The Biggest Black Man in Telecom"',
  	top: 250,
  	width: 300, 
  	height : 70,
	layout:"vertical"
	});

	var enterButton = Titanium.UI.createLabel({
		text : "ENTER HERE",
		bottom : 100,

	});
	enterButton.addEventListener("click", function() {
		console.log("we're clicking");
		var myProfile = Ti.UI.createLabel({
			top : 25,
			left : 5,
			textalign : "left",
			text : "Occupation :  Student\nSchool Name : Full Sail University\nDegree : Mobile Dev\nBirth Place  : Washington D.C. \nMarital Status  :  Single\nCompany Name  : Osahon Telecom",
		});
		var closeButton = Titanium.UI.createLabel({
			text : "EXIT HERE",
			bottom : 100,
		});
		win2.add(closeButton);
		win2.add(myProfile);
		win2.open();

		closeButton.addEventListener("click", function() {
			console.log("we're clicking");

			win2.close();

		});

	}); 







win1.add(enterButton);
win1.add(vitalStats);
win1.add(label1);
win1.add(pic1);
win1.open();
