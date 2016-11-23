
function getTemplate(Obj, Obj2) {
   return  "<div class='list-row' style=' display: inline-block;'>" + 
						 Obj +  " " +Obj2 + " " +
					"</div>" +
				"<input type='checkbox' id='myCheck'>" +
            "<button class='List-remove'>-</div>";
}



function readList() {
 	   var ListValue = document.querySelector('#List');
	   
    return {
        List: ListValue.value,
    };
}



window.addEventListener('DOMContentLoaded', function () {
	
		var zlicz = 0;
		var max = 0;
		 document.getElementById("max").innerHTML = max;	
		  document.getElementById("ilosc").innerHTML = zlicz; 
		var AddToListBtn = document.querySelector('#AddToList');	
		
	    AddToListBtn.addEventListener('click', function() {	
			 
			 
			    var list = [];
			   
			    var ListValue = document.querySelector('#List').value;	
			
				var Listlist = document.querySelector('#Listlist');	
				var marka = document.getElementById("lista");
				var template = getTemplate(ListValue, marka);	
				var DomElement = document.createElement('li'); 
				
				list.push(ListValue);	
				DomElement.innerHTML = template;	
				if (ListValue.length > 0)	
				{
				max++;
				  document.getElementById("max").innerHTML = max;	
				Listlist.appendChild(DomElement);	
				}
				
				
				
				
				
				var removeBtn = DomElement.querySelector('.List-remove');	
				removeBtn.addEventListener('click', function() {
				
				
					var index = list.indexOf(ListValue);
					if (index >= 0) {
						list.splice(index, 1);
					}
					
					Listlist.removeChild(DomElement);	
				      max--;
					 document.getElementById("max").innerHTML = max;	
					if ( Checkbox.checked && zlicz > 0)	
					{
					 zlicz--;
					 document.getElementById("ilosc").innerHTML = zlicz;
					}
				
				});
				
				var Checkbox = DomElement.querySelector('#myCheck');	
				Checkbox.addEventListener('change', function() {
				if (Checkbox.checked) {
					zlicz++;
					document.getElementById("ilosc").innerHTML = zlicz;
				} else {
					zlicz--;
					 document.getElementById("ilosc").innerHTML = zlicz;
				}
			});
		
		
    });
	

	
	
	
	
});