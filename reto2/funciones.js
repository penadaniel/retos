////   DOCTOR

function informacionDoctor(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarDoctor(respuesta.items)
        }
    });
}

function pintarDoctor(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].specialty+"</td>";
        myTable+="<td>"+items[i].graduate_year+"</td>";
        myTable+="<td>"+items[i].department_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarDoctor("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='itemEspecifico("+items[i].id+")'>Cargar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarDoctor(){
    let myData={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            informacionDoctor();
            alert("Guardado con exito!!")
        }
    });
}

function editarDoctor(){
    let myData={
        id:$("#id").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            informacionDoctor();
            alert("Actualizado con exito!!")
        }
    });
}

function borrarDoctor(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            informacionDoctor();
            alert("Borrado con exito!!")
        }
    });
}

function itemEspecifico(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"GET",
        dataType:"JSON",
        success:function(respuesta) {
          console.log(respuesta);
          var item=respuesta.items[0];
  
          $("#miId").val(item.id);
          $("#specialty").val(item.specialty);
          $("#graduate_year").val(item.graduate_year);
          $("#department_id").val(item.department_id);
          $("#name").val(item.name);

        },
    });
  }

////    CLIENTE

function informacionCliente(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaCliente){
            console.log(respuestaCliente);
            pintarCliente(respuestaCliente.items)
        }
    });
}

function pintarCliente(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='itemEspecificoCliente("+items[i].id+")'>Cargar</button>";        
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);
}

function guardarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            informacionCliente();
            alert("Guardado con exito!!")
        }
    });
}

function editarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            informacionCliente();
            alert("Actualizado con exito!!")
        }
    });
}

function borrarCliente(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaCliente){
            $("#resultadoCliente").empty();
            informacionCliente();
            alert("Borrado con exito!!")
        }
    });
}

function itemEspecificoCliente(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaCliente) {
          console.log(respuestaCliente);
          var item=respuestaCliente.items[0];
  
          $("#idCliente").val(item.id);
          $("nameCliente").val(item.name);
          $("#email").val(item.email);
          $("#age").val(item.age);

        },
    });
  }

////  MENSAJE

function informacionMensaje(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaMensaje){
            console.log(respuestaMensaje);
            pintarMensaje(respuestaMensaje.items)
        }
    });
}

function pintarMensaje(items){
    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+items[i].id+")'>Borrar</button>";
        myTable+="<td> <button onclick='itemEspecificoMensaje("+items[i].id+")'>Cargar</button>";                
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);
}

function guardarMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuestaMensaje){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetext").val("");
            informacionMensaje();
            alert("Guardado con exito!!")
        }
    });
}

function editarMensaje(){
    let myData={
        id:$("#idMensaje").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensaje){
            $("#resultadoMensaje").empty();
            $("#idMensaje").val("");
            $("#messagetext").val("");
            informacionMensaje();
            alert("Actualizado con exito!!")
        }
    });
}

function borrarMensaje(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaMensaje){
            $("#resultadoMensaje").empty();
            informacionMensaje();
            alert("Borrado con exito!!")
        }
    });
}

function itemEspecificoMensaje(){
    $.ajax({
        url:"https://gd6b7a774686997-db202109230712.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        dataType:"JSON",
        success:function(respuestaMensaje) {
          console.log(respuestaMensaje);
          var item=respuestaMensaje.items[0];
  
          $("#idMensaje").val(item.id);
          $("messagetext").val(item.messagetext);

        },
    });
  }