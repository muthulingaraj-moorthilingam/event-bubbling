//in this example add event handler to multiple child Element,
//incase add one child in future  again u will aadd one more event handler
//incase case in future increase Nth  child node  we will write Nth node event handler

//Traditional way event handler
var parent=document.getElementById('parent');

parent.addEventListener('click',function(){
	console.log(this);
	console.log("parent clicked");
});

var chile1=document.getElementById('child1');

child1.addEventListener('click',function(){
	console.log(this);//this refers to an child1 div element
	console.log("child1 clicked");
});

var child2=document.getElementById('child2');

child2.addEventListener('click',function(){
	console.log(this);//this refers to an child2 div element 
	console.log("child2 clicked");
});



//so avoid this much of multiple event handler use EVENT DELEGATION.
//in javascript Event-delegation is simple technique by witch add single
//event handler to a parent Element in order avoid having add event handleer 
//to multiple child Element.


//event-delecation
document.getElementById('parent').addEventListener('click',function(event){
	console.log(event.target.id+'node');

	//here add some operation 
	if(event.target.id === 'child1'){
		alert("child1 clicked");
		document.getElementById('child1').style.backgroundColor="black";
	}
	else  if(event.target.id === 'child2'){
		alert("child2 clicked");
		document.getElementById('child2').style.backgroundColor="#fff";
	}
	else{
		alert("parent clicked");
	}
});

//event delegation concepts comes from event bubbling
 //event bubbling nothing but bottom to top travers
 //event bubbling  event start from inner most element or target element  to its parent
 // and its default because in modern computer
 //is event-bubbling concept..is default. 
 // addeventlistener 3rd argument is false its event bubbling by default.

document.getElementById('parent').addEventListener('click',function(event){
	console.log(event.target.id+'node');

	//here add some operation 
	if(event.target.id === 'child1'){
		alert("child1 clicked"+" "+event.target.id +" "+'and parent is'+" "+this.id);
		document.getElementById('child1').style.backgroundColor="black";
	}
	//if u stop the bubbling use event.stopPropagation()

	else  if(event.target.id === 'child2'){
		alert("child2 clicked"+" "+event.target.id +" "+'and parent is'+" "+this);
		document.getElementById('child2').style.backgroundColor="#fff";
	}
	else{
		alert("parent clicked",this);
	}
});