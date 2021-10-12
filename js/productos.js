
                function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("demo").innerHTML =
        // this.responseText;
        cargarXML(this);
      }
    };
    xhttp.open("GET","../assets/Akis.xml", true);
    xhttp.send();
  }
window.onload=loadXMLDoc();



function cargarXML(xml) {
    var docXML = xml.responseXML;
    var cont = docXML.getElementsByTagName("raw");
    var product = document.querySelector(".productos"); 
    var p = `<a href="Producto.html" id='0' onclick="getId(this)"  class="producto"><img src="${cont[0].getElementsByTagName("url")[0].textContent}" alt="error de imagen"><h2>${cont[0].getElementsByTagName("nombre")[0].textContent}</h2></a>`;
    for(var i = 1; i<cont.length; i++){

        var ide = cont[i].getElementsByTagName("id")[0].textContent;
        var imagen =`<img src="${cont[i].getElementsByTagName("url")[0].textContent}"  alt="error de imagen">`;
        var h2 = `<h2>${cont[i].getElementsByTagName("nombre")[0].textContent}</h2>`;
        p += `<a href="Producto.html"  id='${ide}' onclick="getId(this)" class="producto">${imagen}${h2}</a>`;
        
             
    }

    product.innerHTML = p;
}

function getId(btn){
  // alert(btn.id);  
  localStorage.setItem("id", btn.id);
}








