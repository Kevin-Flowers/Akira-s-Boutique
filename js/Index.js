function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("demo").innerHTML =
        // this.responseText;
        cargarXML(this);
      }
    };
    xhttp.open("GET","assets/Akis.xml", true);
    xhttp.send();
  }
window.onload=loadXMLDoc();

var min = 1;
var max = 80;

var r = Math.floor(Math.random() * (max - min+1)) + min;


function cargarXML(xml) {
    var docXML = xml.responseXML;
    var cont = docXML.getElementsByTagName("raw");
    var product = document.querySelector(".productos-ale"); 
    var p = `<a href="navigation/Producto.html"  id='${r}' onclick="getId(this)" class="producto"><img src="${cont[r].getElementsByTagName("url")[0].textContent}" alt="error de imagen"><h2>${cont[r].getElementsByTagName("nombre")[0].textContent}</h2></a>`;
    for(var i = 0; i<=10; i++){
        
        var r2 = Math.floor(Math.random() * (max - min+1)) + min;
        var ide = cont[r2].getElementsByTagName("id")[0].textContent;
        var imagen =`<img src="${cont[r2].getElementsByTagName("url")[0].textContent}" alt="error de imagen">`;
        var h2 = `<h2>${cont[r2].getElementsByTagName("nombre")[0].textContent}</h2>`;
        p += `<a href="navigation/Producto.html"  id='${ide}' onclick="getId(this)" class="producto">${imagen}${h2}</a>`;
        
             
    }

    product.innerHTML = p;
    
}

function getId(btn){
  // alert(btn.id);  
  localStorage.setItem("id", btn.id);
}