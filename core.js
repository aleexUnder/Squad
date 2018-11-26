document.body.onload=addTable;
function addTable(){
      for(var i=0;i<5;i++){
        var roW=document.createElement("tr");
        for(var j=0;j<5;j++){
          var one=document.createElement("td");
          one.classList.add("cell");
          one.onclick=ClkCell;
          one.innerText=Math.floor(Math.random()*300);
          roW.appendChild(one);
        }
        document.getElementById("TableOne").appendChild(roW);
      }
    }
	function ClkCell(){
    this.classList.toggle("selected");
    //alert(th.classList.contains("selected"));
    var mathes=document.querySelectorAll(".cell");
    var counter=0;
    for( var b of mathes){
      if(b.classList.contains("selected")){
          counter+=+b.innerText;
      }
    }
    document.getElementById("summ").innerText=counter;
  
  }