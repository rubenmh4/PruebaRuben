/*************************************************************************
 * 
 * Dado el index.html el cual NO SE PUEDE MODIFICAR crea un archivo javascript 
 * con la siguiente funcionalidad:
 * Al hacer click sobre el boton "Descender a Segunda División"
 * el primer equipo de la lista de Primera División deberá pasar al final  
 * la lista de Segunda División.
 * 
 * Para la lista de segunda división se realizará la misma operación pero pasando
 * los equipos a la lista de Primera División. 
 * 
 * Ya sea haciendo clic en el botón "Descender a Segunda División" como haciendo clic
 * en el botón de "Ascender a Primera División" si no hay equipos en la lista para
 * ascender o descender deberá saltar un Alert que diga "NO HAY MÁS EQUIPOS". 
 * 
 * Ayuda: El primer hijo de cualquier elemento del DOM es la propiedad 
 * firstElementChild de dicho elemento.
 *
 *******************************************************************************/

{
    
    //Agregamos a una variable constante para que nose pueda acceder desde consola del navegador
    const init = function () {

        const botonDescender = document.querySelector(`[id='btnasc']`);
        const botonAscender = document.getElementById("btndesc");
        const listaLi = document.getElementsByTagName("li");
        const divInfo = document.querySelector('#info');
        for(elemento of listaLi){
            elemento.addEventListener("mouseover",pintarInformacion);
        }
        //Creamos evento al boton de descender para realizar la funcion
        botonDescender.addEventListener("click", descenderEquipo);
        //Creamos evento al boton de ascender para realizar la funcion
        botonAscender.addEventListener("click", ascenderEquipo);

        function descenderEquipo() {
            while(divInfo.firstElementChild) divInfo.firstElementChild.remove();
            //Localizamos y enlazamos lista segundaDvision
            let listaPrimeraDivision = document.getElementById("ulprimera");
            let listaSegundaDivision = document.getElementById("ulsegunda");
            //Si no hay equipo muestra alerta
            if (listaPrimeraDivision.firstElementChild == null) {
                alert("NO HAY MAS EQUIPOS PARA DESCENDER");
            } else {
                //Localizamos primer equipo, guardamos en lista segunda division y borramos de la primera division
                let equipoDesciende = listaPrimeraDivision.firstElementChild;
                listaPrimeraDivision.firstElementChild.remove;
                listaSegundaDivision.appendChild(equipoDesciende);
            }
    
        };
    
        function ascenderEquipo() {
            while(divInfo.firstElementChild) divInfo.firstElementChild.remove();
            //Localizamos y enlazamos lista segundaDvision 
            let listaSegundaDivision = document.getElementById("ulsegunda");
            let listaPrimeraDivision = document.getElementById("ulprimera");
            //Si no hay equipo muestra alerta
    
            if (listaSegundaDivision.firstElementChild == null) {
                alert("NO HAY MAS EQUIPOS PARA ASCENDER");
            } else {
                //Localizamos primer equipo, guardamos en lista primera divion y borramos de la segunda division
                let equipoAsciende = listaSegundaDivision.firstElementChild;
                listaSegundaDivision.firstElementChild.remove;
                listaPrimeraDivision.appendChild(equipoAsciende);
            }
    
        };
    
        //Función que pintará en el div central debajo de las listas la información del equipo.
        function pintarInformacion(e){
            while(divInfo.firstElementChild) divInfo.firstElementChild.remove();
            const equipoLi = document.createElement("img");
            //console.log(e.target.textContent);
            
            switch(e.target.textContent){
                case 'Real Madrid':
                    equipoLi.setAttribute("src","imagenes/real_madrid.png");
                    break;
                case 'FC Barcelona':
                    equipoLi.setAttribute("src","imagenes/fc_barcelona.png");
                    break;
                case 'Atlético de Madrid':
                    equipoLi.setAttribute("src","imagenes/atletico_madrid.png");
                    break;
                case 'Espanyol':
                    equipoLi.setAttribute("src","imagenes/espanyol.png");
                    break;
                case 'Alcoyano FC':
                    equipoLi.setAttribute("src","imagenes/alcoyano.png");
                    break;
                case 'Écija FC':
                    equipoLi.setAttribute("src","imagenes/ecija.png");
                    break;
                case 'Espeleño FC':
                    equipoLi.setAttribute("src","imagenes/espelenio.png");
                    break;
                default:
                    console.log(`No se localiza la imagen del equipo ${e.target.textcontent}`);
            }
            divInfo.appendChild(equipoLi);
        };
        
    };

    document.addEventListener("DOMContentLoaded", init);

}




