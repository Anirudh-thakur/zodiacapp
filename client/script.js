//alert("Hello");
   var e = document.getElementById("para");
   var clicknum = 0;
    function Click()
    {
    	//alert("Hello");
    	if(clicknum % 2 == 0)
    	{
    	e.style.color = "orange";
    	clicknum++;
    }
    	else
       {
       	e.style.color = "green";
       	clicknum++;
       }   
    }
    function mousein()
    {
    	e.style.fontSize="30px";
    	e.style.color = "red";
    }
      function mouseout()
    {
    	e.style.fontSize="15px";
    	e.style.color = "blue";
    }
   function display_name()
   {
   	var person1 = {name:"anirudh" , age:25};
   		var person2 = {name:"anirudh" , age:25};
   			var person3 = {name:"anirudh" , age:25};
   			var person = [person1,person2,person3];
   			console.log(person);
   			alert(person);
   	document.getElementById("name").innerHTML = person.name;
   }