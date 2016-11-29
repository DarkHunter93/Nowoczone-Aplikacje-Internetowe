function zwroc(Obj)
{
	return "<div>"+	 Obj +	 "<button id='usun'> - </button>"+	"</div>";
}


window.addEventListener('DOMContentLoaded', function () {
	var list =[];
	var click = document.getElementById("Add");
	click.addEventListener('click', function() {
		var dodaj = document.getElementById("Historyjka").value;
		var miejsce = document.querySelector("#tutaj");
		var template = zwroc(dodaj);
		var DOM = document.createElement("li");
		list.push(dodaj);
		DOM.innerHTML = template;
		miejsce.appendChild(DOM);
		
		var usun = DOM.querySelector("#usun");
		usun.addEventListener('click', function() {
			
			var index = list.indexOf(dodaj);
			if(index >=0)
			{
				list.splice(index,1);
			}
			tutaj.removeChild(DOM);
		});
		
	});
	
	
	
	
	});