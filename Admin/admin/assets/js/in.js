//Ocultar
$("#id-user").toggle(false);
//Clicks
$("body").on("click", ".inicio_panel", function(){
    pantalla_inicio();
  });
$("body").on("click", ".menu_usuarios", function(){
    pantalla_usuarios();
  });
$("body").on("click", ".quienes", function(){
    pantalla_quienes();
  });
$("body").on("click", ".redess", function(){
    pantalla_redes();
  });
$("body").on("click", ".productosc", function(){
    pantalla_productos();
  });
$("body").on("click", ".serviciosc", function(){
    pantalla_servicios();
  });
$("body").on("click", ".contactanoss", function(){
    pantalla_contactanos();
  });
$("body").on("click", ".contactoss", function(){
    pantalla_contactos();
  });
$("body").on("click", ".experienciass", function(){
    pantalla_experiencia();
  });
$("body").on("click", ".ubicacions", function(){
    pantalla_ubicacion();
  });
$("body").on("click", ".valoress", function(){
    pantalla_valores();
  });
$("body").on("click", ".avisoss", function(){
    pantalla_avisos();
  });
$("body").on("click", ".productosd", function(){
    pantalla_productos_conf();
  });
$("body").on("click", ".serviciosd", function(){
    pantalla_servicios_conf();
  });
$("body").on("click", ".experienciasd", function(){
    pantalla_experiencia_conf();
  });
  $("body").on("click", ".destac", function(){
    pantalla_carousel();
  });
  $("body").on("click", ".serviciospost", function(){
    pantalla_servicios_post();
  });
  $("body").on("click", ".des_serviciosc", function(){
    pantalla_productos_destacados();
  });
  
$("body").on("click", "#actualizar_quienes", function(){
    var id=1;
    var titulo=$("#titulo").val();
    var subtitulo=$("#subtitulo").val();
    var sinopsis=$("#sinopsis").val();
    actualizar_quienes(titulo,subtitulo,sinopsis,id);
});
$("body").on("click", ".actualizar_contacto", function(){
  var id=$(this).attr("data-id");
  var nombre=$("#nombre"+id).val();
  var puesto=$("#puesto"+id).val();
  var correo=$("#correo"+id).val();
  var numero=$("#numero"+id).val();
  actualizar_contacto(id,nombre,puesto,correo,numero);
});
$("body").on("click", ".actualizar_redes", function(){
  var red=$(this).attr("data-red");
  console.log(red);
  switch (red) {
    case "facebook":
      var link=$("#link_facebook").val();
      actualizar_red(red,link);
      break;
    case "instagram":
      var link=$("#link_instagram").val();
      actualizar_red(red,link);
      break;
    case "twitter":
      var link=$("#link_twitter").val();
      actualizar_red(red,link);
      break;
    case "tiktok":
      var link=$("#link_tiktok").val();
      actualizar_red(red,link);
      break;
  }
});
$("body").on("click", "#registrar_nuevo_usuario", function(){
  const nombre = document.getElementById("nombre").value;
  const apellido_p = document.getElementById("apellido_p").value;
  const apellido_m = document.getElementById("apellido_m").value;
  const correo = document.getElementById("email").value;
  registrar_nuevo_usuario(nombre,apellido_p,apellido_m,correo);
});
$("body").on("click", ".editar_productos_destacados", function(){
    var id=$(this).attr("data-id");
    $("#id_productos").val(id); 
  });
$("body").on("click", ".actualizar_productos", function(){
    var id=$("#id_productos").val(); 
    var producto=$("#sel_productos").val();
    if (producto!="0" ||producto!=0) {
      actualizar_productos_destacados(id,producto);
    } 
  });
$("body").on("click", ".eliminar_experiencia", function(){
    var id=$(this).attr("data-id");
    eliminar_experiencia(id);
  });
$("body").on("click", ".eliminar_productos", function(){
    var id=$(this).attr("data-id");
    eliminar_producto(id);
  });
$("body").on("click", ".eliminar_valor", function(){
    var id=$(this).attr("data-id");
    eliminar_valor(id);
  });
$("body").on("click", ".password_user", function(){
    var id=$(this).attr("data-id");
    var correo=$(this).attr("data-email");
    actualizarPassword(id,correo)
  });
$("body").on("click", ".editar_carousel", function(){
    var id=$(this).attr("data-id");
    var titulo=$(this).attr("data-titulo");
    var subtitulo=$(this).attr("data-subtitulo");
    var descripcion=$(this).attr("data-descripcion");
    $("#id_carousel").val(id);
    $("#titulo_carousel").val(titulo);
    $("#subtitulo_carousel").val(subtitulo);
    $("#description_carousel").val(descripcion);
  });
$("body").on("click", ".editar_serviciospostventa", function(){
    var id=$(this).attr("data-id");
    var titulo=$(this).attr("data-titulo");
    var subtitulo=$(this).attr("data-subtitulo");
    var descripcion=$(this).attr("data-descripcion");
    var p1=$(this).attr("data-post1");
    var p2=$(this).attr("data-post2");
    var p3=$(this).attr("data-post3");
    var p4=$(this).attr("data-post4");
    $("#id_serviciospost").val(id);
    $("#titulo_serviciospost").val(titulo);
    $("#subtitulo_serviciospost").val(subtitulo);
    $("#description_serviciospost").val(descripcion);
    $("#post1").val(p1);
    $("#post2").val(p2);
    $("#post3").val(p3);
    $("#post4").val(p4);
  });
$("body").on("click", "#actualizar_serviciospost", function(){
    var id=$("#id_serviciospost").val();
    var titulo=$("#titulo_serviciospost").val();
    var subtitulo=$("#subtitulo_serviciospost").val();
    var descripcion=$("#description_serviciospost").val();
    var p1=$("#post1").val();
    var p2=$("#post2").val();
    var p3=$("#post3").val();
    var p4=$("#post4").val();
    actualizar_serviciospost(id,titulo,subtitulo,descripcion,p1,p2,p3,p4);
  });
$("body").on("click", "#actualizar_carousel", function(){
    var id=$("#id_carousel").val();
    var titulo=$("#titulo_carousel").val();
    var subtitulo=$("#subtitulo_carousel").val();
    var descripcion=$("#description_carousel").val();
    actualizar_destacados(id,titulo,subtitulo,descripcion);
  });
$("body").on("click", ".editar_user", function(){
    $("#editar_usuario").toggle(true);
    $("#registrar_nuevo_usuario").toggle(false);
    var id=$(this).attr("data-id");
    var nombre=$(this).attr("data-nombre");
    var apellido_p=$(this).attr("data-apellidop");
    var apellido_m=$(this).attr("data-apellidom");
    var correo=$(this).attr("data-correo");
    $('#id-user').val(id);
    $('#nombre').val(nombre);
    $('#apellido_p').val(apellido_p);
    $('#apellido_m').val(apellido_m);
    $('#email').val(correo);
  });
$("body").on("click", "#editar_usuario", function(){
    var id=$('#id-user').val();
    var nombre=$('#nombre').val();
    var apellido_p=$('#apellido_p').val();
    var apellido_m=$('#apellido_m').val()
    var email=$('#email').val()
    actualizar_usuario(id,nombre,apellido_p,apellido_m,email);
  });
  //Funciones
function actualizar_productos_destacados(id,producto) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/actualizar_productos_destacados.php',
    data: {id:id,producto:producto},
    success: function(respuesta) {
      pantalla_productos_destacados();
      actualizar_todo();
    }
  });
}
function actualizar_usuario(id,nombre,apellido_p,apellido_m,correo) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/actualizar_usuarios.php',
    data: {id:id,nombre:nombre,apellido_p:apellido_p,apellido_m:apellido_m,correo:correo},
    success: function(respuesta) {
      console.log("llego");
      limpiar_campos_users();
      llenar_usuarios();
      actualizar_todo();
    }
  });
}
function eliminar_valor(id) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/eliminar_valor.php',
    data: {id:id},
    success: function(respuesta) {
      llenar_valores();
    }
  });
}
function eliminar_experiencia(id) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/eliminar_experiencia.php',
    data: {id:id},
    success: function(respuesta) {
      llenar_experiencia();
    }
  });
}
function eliminar_producto(id) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/eliminar_producto.php',
    data: {id:id},
    success: function(respuesta) {
      llenar_productos();
    }
  });
}
function registrar_nuevo_usuario(nombre,apellido_p,apellido_m,correo) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/registrar_usuarios.php',
    data: {nombre:nombre,apellido_p:apellido_p,apellido_m:apellido_m,correo:correo},
    success: function(respuesta) {
      limpiar_campos_users();
      llenar_usuarios();
    }
  });
}
function actualizarPassword(id,correo) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/cambiar_contraseña.php',
    data: {id:id,correo:correo},
    success: function(respuesta) {
      llenar_usuarios();
    }
  });
}
$("body").on("click", "#crear_producto", function(){
  const titulo = document.getElementById("titulo_producto").value;
  const description = document.getElementById("description_producto").value;
  const categoria = document.getElementById("categoria_producto").value;
  const tipo = document.getElementById("tipo_producto").value;
  registrar_nuevo_producto(titulo,description,tipo,categoria);
});
$("body").on("click", "#crear_experiencia", function(){
  const empresa = document.getElementById("titulo_empresa").value;
  const titulo = document.getElementById("titulo_experiencia").value;
  const description = document.getElementById("description_experiencia").value;
  registrar_nueva_experiencia(empresa,titulo,description);
});
$("body").on("click", ".cambiar_null", function(){
  var id=$(this).attr("data-id");
var id_ocultar="edi_"+id;
var id_mostrar="sav_"+id;
var element=$(this);
  editar_texto(id_ocultar,id_mostrar,element);
});
$("body").on("click", ".guardar_cambios", function(){
  var id=$(this).attr("data-id");
var texto=$('#texto_nuevo').val();
ActualizarTexto(id,texto);
});
$("body").on("click", ".subir_imagen_contactanos", function(){
  var id=$(this).attr("data-id");
  ActualizarImagenContacto(id);
});
$("body").on("click", ".eliminar_user", function(){
  var id=$(this).attr("data-id");
  Eliminar_usuario(id);
});
$("body").on("click", "#crear_valor", function(){
  var titulo=$("#titulo_valor").val();
  var descripcion=$("#description_valor").val();
  var icono=$("#icono_valor").val();
  crear_valor(titulo,descripcion,icono);
});
//Funciones
function editar_texto(id,id2,element){
  $("#"+id+"").toggle(false);
  $("#"+id2+"").toggle(true);
  var titile = element.closest('tr').find('td').eq(0).html();
  element.closest('tr').find('td').eq(0).html('<input type="text" id="texto_nuevo" class="form-control"/>');
  $("#texto_nuevo").val(titile);
}
function Eliminar_usuario(id) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/eliminar_usuario.php',
    data: {id:id},
    success: function(respuesta) {
      llenar_usuarios();
      actualizar_todo();
    }
  });
  setTimeout(function(){
    llenar_textos();
      },1000);
      
  }
function ActualizarTexto(id,texto) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/actualizar_textos.php',
    data: {id:id, texto:texto},
    success: function(respuesta) {
      llenar_textos();
      actualizar_todo();
    }
  });
  setTimeout(function(){
    llenar_textos();
      },1000);
      
  }
  function crear_valor(titulo,descripcion,icono) {
    $.ajax({
      type: 'POST',
      url: 'assets/php/crear_valor.php',
      data: {titulo:titulo,descripcion:descripcion, icono:icono},
      success: function(respuesta) {
        llenar_valores();
        actualizar_todo();
        limpiar_valores();
      }
    });
    setTimeout(function(){
      llenar_textos();
        },1000);
        
    }
function registrar_nueva_experiencia(empresa,titulo,description) {
  var formData = new FormData();
  var files = $('#imagen_experiencia')[0].files[0];
  formData.append('imagen',files);
  formData.append('empresa',empresa);
  formData.append('titulo',titulo);
  formData.append('description',description);
      $.ajax({
          url: 'assets/php/crear_experiencias.php',
          type: 'post',
          data: formData,
          contentType: false,
          processData: false,
    success: function(respuesta) {
      llenar_experiencia();
      limpiar_campos_experiencias();
      actualizar_todo();
    }
      });
  return false;
}
function ActualizarImagenContacto(id) {
  console.log("entro");
  console.log(id);
  var formData = new FormData();
  var files = $('#imagen_'+id+'_')[0].files[0];
  formData.append('imagen',files);
  formData.append('id',id);
  $.ajax({
    url: 'assets/php/actualizarImagenContacto.php',
    type: 'post',
    data: formData,
    contentType: false,
    processData: false,
    success: function(respuesta) {
    llenar_imagenes();
    actualizar_todo();
    }
  });
  return false;
}
function registrar_nuevo_producto(titulo,description,tipo,categoria) {
  var formData = new FormData();
  var files = $('#imagen_producto1')[0].files[0];
  var files2 = $('#imagen_producto2')[0].files[0];
  formData.append('imagen1',files);
  formData.append('imagen2',files2);
  formData.append('titulo',titulo);
  formData.append('description',description);
  formData.append('tipo',tipo);
  formData.append('categoria',categoria);
      $.ajax({
          url: 'assets/php/crear_productos2.php',
          type: 'post',
          data: formData,
          contentType: false,
          processData: false,
    success: function(respuesta) {
      llenar_productos();
      llenar_servicios();
      limpiar_campos_productos();
    }
      });
  return false;
}
function actualizar_contacto(id,nombre,puesto,correo,numero) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/actualizar_contactos.php',
    data: {id:id,nombre:nombre,puesto:puesto,correo:correo,numero:numero},
    success: function(respuesta) {
      limpiar_campos_contactos(id)
      llenar_contactos();
      actualizar_todo();
    }
  });
}
function actualizar_red(red,link) {
  $.ajax({
    type: 'POST',
    url: 'assets/php/actualizar_redes.php',
    data: {red:red,link:link},
    success: function(respuesta) {
      limpiar_campos_redes();
      llenar_redes();
      actualizar_todo();
    }
  });
}
function actualizar_quienes(titulo,subtitulo,sinopsis,id) {
    var formData = new FormData();
    var files = $('#file_quien')[0].files[0];
    formData.append('imagen',files);
		formData.append('titulo',titulo);
		formData.append('subtitulo',subtitulo);
		formData.append('sinopsis',sinopsis);
    formData.append('id',id);
        $.ajax({
            url: 'assets/php/actualizar_quienes.php',
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
			success: function(respuesta) {
        llenar_quienes();
        limpiar_campos_quienes();
        actualizar_todo();
			}
        });
		return false;
}
function actualizar_destacados(id,titulo,subtitulo,descripcion) {
  var formData = new FormData();
  var files=$("#imagen_carousel")[0].files[0];
  formData.append('imagen',files);
		formData.append('titulo',titulo);
		formData.append('subtitulo',subtitulo);
		formData.append('descripcion',descripcion);
    formData.append('id',id);
    $.ajax({
          url: 'assets/php/actualizar_destacados.php',
          type: 'post',
          data: formData,
          contentType: false,
          processData: false,
    success: function(respuesta) {
      llenar_carousel();
      actualizar_todo();
    }
      });
    return false;
}
function actualizar_serviciospost(id,titulo,subtitulo,descripcion,p1,p2,p3,p4) {
  var formData = new FormData();
  var files=$("#imagen_serviciospost")[0].files[0];
  formData.append('imagen',files);
		formData.append('titulo',titulo);
		formData.append('subtitulo',subtitulo);
		formData.append('descripcion',descripcion);
    formData.append('p1',p1);
    formData.append('p2',p2);
    formData.append('p3',p3);
    formData.append('p4',p4);
    formData.append('id',id);
    $.ajax({
          url: 'assets/php/actualizar_servicios_postventa.php',
          type: 'post',
          data: formData,
          contentType: false,
          processData: false,
    success: function(respuesta) {
      llenar_serviciospost();
      actualizar_todo();
    }
      });
    return false;
}
function limpiar_campos_contactos(id) {
  var nombre=$("#nombre"+id).val('');
  var puesto=$("#puesto"+id).val('');
  var correo=$("#correo"+id).val('');
  var numero=$("#numero"+id).val('');
}
function limpiar_valores(){
  $("#titulo_valor").val('');
  $("#description_valor").val('');
  $("#icono_valor").val('');
}
function limpiar_campos_redes() {
  $("#link_tiktok").val('');
  $("#link_twitter").val('');
  $("#link_instagram").val('');
  $("#link_facebook").val('');
}
function limpiar_campos_productos() {
  $("#titulo_producto").val('');
  $("#description_producto").val('');
  $("#categoria_producto").val('');
  $("#tipo_producto").val('');
  $("#imagen_producto1").val('');
  $("#imagen_producto2").val('');
}
function limpiar_campos_experiencias() {
  $("#titulo_experiencia").val('');
  $("#description_experiencia").val('');
  $("#imagen_experiencia").val('');
}
function limpiar_campos_users() {
  $("#nombre").val('');
  $("#apellido_p").val('');
  $("#apellido_m").val('');
  $("#email").val('');
  $("#password").val('');
}
function limpiar_campos_quienes() {
  $("#titulo").val('');
  $("#subtitulo").val('');
  $("#sinopsis").val('');
  $("#file_quien").val('');
}
function pantalla_inicio() {
  console.log("holi");
}
function pantalla_productos_destacados() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="contenedor_productos_destacados"><div class="row"><div class="form-group col-md-6"><label for="sel_productos">Select list:</label><select class="form-control" id="sel_productos"></select></div><div class="botones col-md-6"><input type="text" name="id_productos" id="id_productos"><input type="button" class="actualizar_productos" id="actualizar_productos" value="Actualizar"></div></div><div class="contenido_productos_destacados"></div></div>');
  llenarcombo();
  llenar_productos_destacados();
  $("#id_productos").toggle(false);
}
function pantalla_ubicacion() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_ubicacion"></div><div class="textos_programas" id="categoria_telefono"></div><div class="textos_programas" id="categoria_correo"></div>');
  llenar_textos();
}
function pantalla_avisos() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_aviso_titulo"></div><div class="textos_programas" id="categoria_aviso"></div>');
  llenar_textos();
}
function pantalla_valores() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="valores"><div class="textos_programas" id="categoria_valores"></div><h4>Registrar nuevo valor</h4><div class="formulario_valores row"><div class="form-group col-md-4"><label for="titulo_valor">Título:</label><input type="text" class="form-control" id="titulo_valor" /></div><div class="form-group col-md-4"><label for="description_valor">Descripcion:</label><input type="text" class="form-control" id="description_valor" /></div><div class="form-group col-md-4"><label for="icono_valor">Icono:</label><input type="text" class="form-control" id="icono_valor" /></div><input type="submit" id="crear_valor"/><div class="valores_div"></div></div>');
  llenar_valores();
}
function pantalla_redes() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="formularios row"><div class="formulario_facebook col-md-4"><h4>Facebook</h4><div class="form-group col-md-4"><label for="link_facebook">Link:</label><input type="text" class="form-control" id="link_facebook" /></div><input type="submit" class="actualizar_redes" data-red="facebook"/></div><div class="formulario_instagram col-md-4"><h4>Instagram</h4><div class="form-group col-md-4"><label for="link_instagram">Link:</label><input type="text" class="form-control" id="link_instagram" /></div><input type="submit" class="actualizar_redes" data-red="instagram"/></div><div class="formulario_twitter col-md-4"><h4>Twitter</h4><div class="form-group col-md-4"><label for="link_twitter">Link:</label><input type="text" class="form-control" id="link_twitter" /></div><input type="submit" class="actualizar_redes" data-red="twitter"/></div><div class="formulario_tiktok col-md-4"><h4>Facebook</h4><div class="form-group col-md-4"><label for="link_tiktok">Link:</label><input type="text" class="form-control" id="link_tiktok" /></div><input type="submit" class="actualizar_redes" data-red="tiktok"/></div><div class="redes"></div></div>');
  llenar_redes();
}
function pantalla_productos() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="productos"><h4>Registrar nuevo producto</h4><div class="formulario_productos row"><div class="form-group col-md-4"><label for="titulo_producto">Título:</label><input type="text" class="form-control" id="titulo_producto" /></div><div class="form-group col-md-4"><label for="description_producto">Descripcion:</label><input type="text" class="form-control" id="description_producto" /></div><div class="form-group col-md-4"><label for="categoria_producto">Categoria:</label><input type="text" class="form-control" id="categoria_producto" /></div><div class="form-group col-md-4"><label for="tipo_producto">Selecciona un tipo:</label><select class="form-control" id="tipo_producto"><option>Producto</option><option>Servicio</option></select></div><div class="form-group col-md-4"><label for="imagen_producto1">Imagen 1:</label><input type="file" name="imagen" id="imagen_producto1" accept="image/jpeg, image/jpg, image/png" required></div><div class="form-group col-md-4"><label for="imagen_producto1">Imagen 2:</label><input type="file" name="imagen" id="imagen_producto2" accept="image/jpeg, image/jpg, image/png" required></div><input type="submit" id="crear_producto"/></div><div class="productos_div"></div></div>');
  llenar_productos();
}
function pantalla_productos_conf() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_servicios"></div><div class="textos_programas" id="categoria_productos_titulo"></div><div class="textos_programas" id="categoria_productos_subtitulo"></div><div class="textos_programas" id="categoria_productos_descripcion"></div><div class="contacto row"><div class="col-md-6"><div class="imagen_cat" id="imagen_2"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen" id="imagen_2_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="2" id="subir_imagen_contactanos" name="submit"></form></div><div class="col-md-6"><div class="imagen_cat" id="imagen_3"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen" id="imagen_3_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="3" id="subir_imagen_contactanos" name="submit"></form></div></div>');
  llenar_textos();
  llenar_imagenes();
}
function pantalla_servicios_conf() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_servicios_titulo"></div><div class="textos_programas" id="categoria_servicios_subtitulo"></div><div class="textos_programas" id="categoria_servicios_descripcion"></div><div class="contacto row"><div class="col-md-6"><div class="imagen_cat" id="imagen_4"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen" id="imagen_4_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="4" id="subir_imagen_contactanos" name="submit"></form></div><div class="col-md-6"><div class="imagen_cat" id="imagen_5"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen" id="imagen_5_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="5" id="subir_imagen_contactanos" name="submit"></form></div></div>');
  llenar_textos();
  llenar_imagenes();
}
function pantalla_experiencia_conf() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_experiencia"></div><div class="textos_programas" id="categoria_experiencias_titulo"></div><div class="textos_programas" id="categoria_experiencias_subtitulo"></div><div class="textos_programas" id="categoria_experiencias_descripcion"></div><div class="contacto row"><div class="col-md-6"><div class="imagen_cat" id="imagen_6"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen_6_" id="imagen_6_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="6" id="subir_imagen_contactanos" name="submit"></form></div><div class="col-md-6"><div class="imagen_cat" id="imagen_7"></div><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen_7_" id="imagen_7_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="7" id="subir_imagen_contactanos" name="submit"></form></div></div>');
  llenar_textos();
  llenar_imagenes();
}
function pantalla_contactanos() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="textos_programas" id="categoria_contactanos"></div><div class="imagen_cat" id="imagen_1"></div><div class="contacto"><form action="" method="post" enctype="multipart/form-data"><div class="form-group"><label for="imagen_contacto">Selecciona una imagen:</label><input type="file" name="imagen" id="imagen_1_" accept="image/jpeg, image/png, image/jpg" required></div><input type="button" value="Subir Imagen" class="subir_imagen_contactanos" data-id="1" id="subir_imagen_contactanos" name="submit"></form></div>');
  llenar_textos();
  llenar_imagenes();
}
function pantalla_contactos() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('</div><div class="formulario_contactos"><div class="row"><div class="col-md-4"><h4>Contacto 1</h4><div class="form-group"><label for="nombre1">Nombre:</label><input type="text" class="form-control" id="nombre1"></div><div class="form-group"><label for="puesto1">Descripcion:</label><input type="text" class="form-control" id="puesto1"></div><div class="form-group"><label for="correo1">Correo:</label><input type="text" class="form-control" id="correo1"></div><div class="form-group"><label for="numero1">Numero:</label><input type="text" class="form-control" id="numero1"></div><input type="submit" class="actualizar_contacto" data-id="1" id="" value="Actualizar"></div><div class="col-md-4"><h4>Contacto 2</h4><div class="form-group"><label for="nombre2">Nombre:</label><input type="text" class="form-control" id="nombre2"></div><div class="form-group"><label for="puesto2">Descripcion:</label><input type="text" class="form-control" id="puesto2"></div><div class="form-group"><label for="correo2">Correo:</label><input type="text" class="form-control" id="correo2"></div><div class="form-group"><label for="numero2">Numero:</label><input type="text" class="form-control" id="numero2"></div><input type="submit" class="actualizar_contacto" data-id="2" id="" value="Actualizar"></div><div class="col-md-4"><h4>Contacto 3</h4><div class="form-group"><label for="nombre3">Nombre:</label><input type="text" class="form-control" id="nombre3"></div><div class="form-group"><label for="puesto3">Descripcion:</label><input type="text" class="form-control" id="puesto3"></div><div class="form-group"><label for="correo3">Correo:</label><input type="text" class="form-control" id="correo3"></div><div class="form-group"><label for="numero3">Numero:</label><input type="text" class="form-control" id="numero3"></div><input type="submit" class="actualizar_contacto" data-id="3" id="" value="Actualizar"></div></div><div class="contactosc"></div></div>');
  llenar_contactos();
}
function pantalla_servicios() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="productos"><h4>Registrar nuevo producto</h4><div class="formulario_productos row"><div class="form-group col-md-4"><label for="titulo_producto">Título:</label><input type="text" class="form-control" id="titulo_producto" /></div><div class="form-group col-md-4"><label for="description_producto">Descripcion:</label><input type="text" class="form-control" id="description_producto" /></div><div class="form-group col-md-4"><label for="categoria_producto">Categoria:</label><input type="text" class="form-control" id="categoria_producto" /></div><div class="form-group col-md-4"><label for="tipo_producto">Selecciona un tipo:</label><select class="form-control" id="tipo_producto"><option>Servicio</option></select></div><div class="form-group col-md-4"><label for="imagen_producto1">Imagen 1:</label><input type="file" name="imagen" id="imagen_producto1" accept="image/jpeg, image/jpg, image/png" required></div><div class="form-group col-md-4"><label for="imagen_producto1">Imagen 2:</label><input type="file" name="imagen" id="imagen_producto2" accept="image/jpeg, image/jpg, image/png" required></div><input type="submit" id="crear_producto"/></div><div class="servicios_div"></div></div>');
  llenar_servicios();
  
}
function pantalla_quienes() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="row"><h3>Actualizar Quienes</h3><div class="form-group col-md-4"><label for="titulo">Titulo:</label><input type="text" class="form-control" id="titulo" /></div><div class="form-group col-md-4"><label for="subtitulo">Subtitulo:</label><input type="text" class="form-control" id="subtitulo" /></div><div class="form-group col-md-4"><label for="sinopsis">Sinopsis:</label><input type="text" class="form-control" id="sinopsis" /></div><div class="form-group col-md-4"><label for="imagen">Imagen:</label><input type="file" id="file_quien" name="imagen" accept="image/*" id="imagen" required/><br/></div><input type="submit" id="actualizar_quienes" value="Actualizar Datos"></div><div class="quienes_somos"></div>');
  llenar_quienes();
}
function pantalla_carousel() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="Carousel"><h4>Actualizar Carousel</h4><div class="formulario_Carousel row"><div class="form-group col-md-4"><label for="titulo_carousel">Titulo:</label><input type="text" class="form-control" id="titulo_carousel" /></div><div class="form-group col-md-4"><label for="subtitulo_carousel">Subtitulo:</label><input type="text" class="form-control" id="subtitulo_carousel" /></div><div class="form-group col-md-4"><label for="description_carousel">Descripcion:</label><input type="text" class="form-control" id="description_carousel" /></div><div class="form-group col-md-4"><label for="imagen_carousel">Imagen:</label><input type="file" name="imagen" id="imagen_carousel" accept="image/jpeg, image/jpg, image/png" required></div><input type="text" id="id_carousel"/><input type="button" value="Actualizar Carousel" id="actualizar_carousel"/></div><div class="carousel_contenido"></div></div>');
  llenar_carousel();
  $("#id_carousel").toggle(false);
}
function pantalla_servicios_post(){
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="Carousel"><h4>Actualizar ServiciosPost</h4><div class="formulario_serviciospostventa row"><div class="form-group col-md-4"><label for="titulo_carousel">Titulo:</label><input type="text" class="form-control" id="titulo_serviciospost" /></div><div class="form-group col-md-4"><label for="subtitulo_serviciospost">Subtitulo:</label><input type="text" class="form-control" id="subtitulo_serviciospost" /></div><div class="form-group col-md-4"><label for="description_serviciospost">Descripcion:</label><input type="text" class="form-control" id="description_serviciospost" /></div><div class="form-group col-md-4"><label for="post1">Post 1:</label><input type="text" class="form-control" id="post1" /></div><div class="form-group col-md-4"><label for="post2">Post 2:</label><input type="text" class="form-control" id="post2" /></div><div class="form-group col-md-4"><label for="post3">Post 3:</label><input type="text" class="form-control" id="post3" /></div><div class="form-group col-md-4"><label for="post4">Post 4:</label><input type="text" class="form-control" id="post4" /></div><div class="form-group col-md-4"><label for="imagen_serviciospost">Imagen:</label><input type="file" name="imagen" id="imagen_serviciospost" accept="image/jpeg, image/jpg, image/png" required></div><input type="text" id="id_serviciospost"/><input type="button" value="Actualizar Serviciospost" id="actualizar_serviciospost"/></div><div class="carousel_serviciospost"></div></div>');
  llenar_serviciospost();
  $("#id_carousel").toggle(false);
}
function pantalla_experiencia() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="experiencias"><h4>Registrar nueva experiencia </h4><div class="formulario_experiencias row"><div class="form-group col-md-4"><label for="titulo_empresa">Empresa:</label><input type="text" class="form-control" id="titulo_empresa" /></div><div class="form-group col-md-4"><label for="titulo_experiencia">Experiencia:</label><input type="text" class="form-control" id="titulo_experiencia" /></div><div class="form-group col-md-4"><label for="description_experiencia">Descripcion:</label><input type="text" class="form-control" id="description_experiencia" /></div><div class="form-group col-md-4"><label for="imagen_experiencia">Imagen:</label><input type="file" name="imagen" id="imagen_experiencia" accept="image/jpeg, image/jpg, image/png" required></div><input type="submit" id="crear_experiencia"/></div><div class="experiencia_contenido"></div></div>');
  llenar_experiencia();
}
function pantalla_usuarios() {
  $(".contenido_menu").html("");
  $(".contenido_menu").append('<div class="usuarios"><form id="registroForm"><div class="formulario row"><h3>Registrar Nuevo Usuario</h3><div class="form-group col-md-4"><label for="nombre">Nombre:</label><input type="text" class="form-control" id="nombre"></div><div class="form-group col-md-4"><label for="apellido_p">Apellido P:</label><input type="text" class="form-control" id="apellido_p"></div><div class="form-group col-md-4"><label for="apellido_m">Apellido M:</label><input type="text" class="form-control" id="apellido_m"></div><div class="form-group col-md-4"><label for="email">Email:</label><input type="text" class="form-control" id="email"></div><input type="button" id="registrar_nuevo_usuario" value="Registrar"><input type="button" id="editar_usuario" value="Editar"><input type="text" class="form-control" id="id-user"></div></form><div class="datos_usuarios"></div></div>');
  llenar_usuarios();
}
function llenarcombo() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/productos_totales.php",function (data) {
          $("#sel_productos").html("");$("#sel_productos").append("<option value='0'>--Selecciona un Producto--</option>");
          $.each(data, function () { 
              $("#sel_productos").append("<option value='"+this.id+"'>"+this.titulo+"</option>"); 
          });
      }
  );
}
function llenar_usuarios() {
  $("#editar_usuario").toggle(false);
  $("#id-user").toggle(false);
  $("#registrar_nuevo_usuario").toggle(true);
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/usuarios.php",function (data) {
    $(".datos_usuarios").html("");
    $(".datos_usuarios").append("<br><br><h5>Usuarios Registrados</h5><br><table class='table table-bordered'><thead><th>id</th><th>Nombre</th><th>ApellidoP</th><th>ApellidoM</th><th>Email</th><th>opciones</th></thead><tbody class='contenido_tabla_usuarios'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_usuarios").append('<tr><td>'+this.id+'</td><td>'+this.nombre+'</td><td>'+this.apellido_p+'</td><td>'+this.apellido_m+'</td><td>'+this.email+'</td><td><button type="button" class="btn btn-primary password_user" data-email="'+this.email+'" data-id="'+this.id+'"><i class="bi bi-key"></i></button><button type="button" class="btn btn-default editar_user" data-id="'+this.id+'" data-correo="'+this.email+'" data-nombre="'+this.nombre+'" data-apellidop="'+this.apellido_p+'" data-apellidom="'+this.apellido_m+'"><i class="bi bi-pencil"></i></button><button type="button" class="btn btn-danger eliminar_user" data-id="'+this.id+'"><i class="bi bi-trash3-fill"></i></button></td></tr>');    
      });
    }
  );
}
function llenar_productos_destacados() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/product.php",function (data) {
      $(".contenido_productos_destacados").html("");
      $(".contenido_productos_destacados").append("<br><br><h5>Productos/Servicios Destacados</h5><br><table class='table table-bordered'><thead><th>id</th><th>Titulo</th><th>Descripcion</th><th>Tipo</th><th>Categoria</th><th>Imagen</th><th>imagenW</th><th>opciones</th></thead><tbody class='contenido_tabla_productos'></tbody>")  
      $.each(data, function () { 
        $(".contenido_tabla_productos").append('<tr><td>'+this.id+'</td><td>'+this.titulo+'</td><td>'+this.descripcion+'</td><td>'+this.tipo+'</td><td>'+this.categoria+'</td><td>'+this.imagenw+'</td><td>'+this.imagenw2+'</td><td><button type="button" data-id="'+this.id+'" class="btn btn editar_productos_destacados"><i class="bi bi-pencil-fill"></i></button></td></tr>');
      });
    }
  );
}
function llenar_productos() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/productos.php",function (data) {
    $(".productos_div").html("");
    $(".productos_div").append("<br><br><h5>Productos Registrados</h5><br><table class='table table-bordered'><thead><th>id</th><th>Titulo</th><th>Descripcion</th><th>Tipo</th><th>Categoria</th><th>Imagen</th><th>imagenW</th><th>opciones</th></thead><tbody class='contenido_tabla_productos'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_productos").append('<tr><td>'+this.id+'</td><td>'+this.titulo+'</td><td>'+this.descripcion+'</td><td>'+this.tipo+'</td><td>'+this.categoria+'</td><td>'+this.imagenw+'</td><td>'+this.imagenw2+'</td><td><button type="button" data-id="'+this.id+'" class="btn btn-danger eliminar_productos">Borrar</button></td></tr>');            
      });
    }
  );
  llenar_textos();
}
function llenar_servicios() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/servicios.php",function (data) {
    $(".servicios_div").html("");
    $(".servicios_div").append("<br><br><h5>Productos Registrados</h5><br><table class='table table-bordered'><thead><th>id</th><th>Titulo</th><th>Descripcion</th><th>Tipo</th><th>Categoria</th><th>Imagen</th><th>imagenW</th><th>opciones</th></thead><tbody class='contenido_tabla_servicios'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_servicios").append('<tr><td>'+this.id+'</td><td>'+this.titulo+'</td><td>'+this.descripcion+'</td><td>'+this.tipo+'</td><td>'+this.categoria+'</td><td>'+this.imagenw+'</td><td>'+this.imagenw2+'</td><td><button type="button" data-id="'+this.id+'" class="btn btn-danger eliminar_productos">Borrar</button></td></tr>');            
      });
    }
  );
  llenar_textos();
}
function llenar_quienes() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/quienes.php",function (data) {
      $(".quienes_somos").html("");
      $(".quienes_somos").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Titulo</th><th>Subtitulo</th><th>Sinopsis</th><th>Imagen</th><th>ImagenW</th></thead><tbody class='contenido_tabla_quienes'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_quienes").append('<tr><td>'+this.titulo+'</td><td>'+this.subtitulo+'</td><td>'+this.sinopsis+'</td><td>'+this.imagenN+'</td><td>'+this.imagenW+'</td></tr>');
      });
    }
  );
}
function llenar_redes() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/redes.php",function (data) {
      $(".redes").html("");
      $(".redes").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Facebook</th><th>Instagram</th><th>Tiktok</th><th>Twitter</th></thead><tbody class='contenido_tabla_redes'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_redes").append('<tr><td>'+this.facebook+'</td><td>'+this.instagram+'</td><td>'+this.tiktok+'</td><td>'+this.twitter+'</td></tr>');
      });
    }
  );
}
function llenar_carousel() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/destacados.php",function (data) {
      $(".carousel_contenido").html("");
      $(".carousel_contenido").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Titulo</th><th>Subtitulo</th><th>Descripcion</th><th>imagen</th><th>imagenw</th><th>Opciones</th></thead><tbody class='contenido_tabla_carousel'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_carousel").append('<tr><td>'+this.titulo+'</td><td>'+this.subtitulo+'</td><td>'+this.descripcion+'</td><td>'+this.imagenN+'</td><td>'+this.imagenW+'</td><td><button type="button" data-id="'+this.id+'" data-titulo="'+this.titulo+'" data-subtitulo="'+this.subtitulo+'" data-descripcion="'+this.descripcion+'" class="btn btn-success editar_carousel">Actualizar</button></td></tr>');
      });
    }
  );
}
function llenar_serviciospost() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/servicios_postventa.php",function (data) {
      $(".carousel_serviciospost").html("");
      $(".carousel_serviciospost").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Titulo</th><th>Subtitulo</th><th>Descripcion</th><th>imagen</th><th>imagenw</th><th>Opciones</th></thead><tbody class='contenido_tabla_serviciospost'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_serviciospost").append('<tr><td>'+this.titulo+'</td><td>'+this.subtitulo+'</td><td>'+this.descripcion+'</td><td>'+this.imagenN+'</td><td>'+this.imagenW+'</td><td><button type="button" data-id="'+this.id+'" data-titulo="'+this.titulo+'" data-post1="'+this.p1+'" data-post2="'+this.p2+'" data-post3="'+this.p3+'" data-post4="'+this.p4+'" data-subtitulo="'+this.subtitulo+'" data-descripcion="'+this.descripcion+'" class="btn btn-success editar_serviciospostventa">Actualizar</button></td></tr>');
      });
    }
  );
}
function llenar_experiencia() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/experiencias.php",function (data) {
      $(".experiencia_contenido").html("");
      $(".experiencia_contenido").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Empresa</th><th>Titulo</th><th>Descripcion</th><th>imagen</th><th>imagenw</th><th>Opciones</th></thead><tbody class='contenido_tabla_experiencia'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_experiencia").append('<tr><td>'+this.empresa+'</td><td>'+this.titulo+'</td><td>'+this.subtitulo+'</td><td>'+this.imagen+'</td><td>'+this.imagenW+'</td><td><button type="button" data-id="'+this.id+'" class="btn btn-danger eliminar_experiencia">Borrar</button></td></tr>');
      });
    }
  );
  llenar_textos();
}
function llenar_valores() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/valores.php",function (data) {
      $(".valores_div").html("");
      $(".valores_div").append("<br><br><h5>Datos Actuales</h5><br><table class='table table-bordered'><thead><th>Titulo</th><th>Descripcion</th><th>Icono</th><th>Opciones</th></thead><tbody class='contenido_tabla_valores'></tbody>")
      $.each(data, function () { 
        $(".contenido_tabla_valores").append('<tr><td>'+this.titulo+'</td><td>'+this.description+'</td><td>'+this.icono+'</td><td><button type="button" data-id="'+this.id+'" class="btn btn-danger eliminar_valor">Borrar</button></td></tr>');
      });
    }
  );
  llenar_textos();
}

function llenar_contactos() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/contactos.php",function (data) {
      $(".contactosc").html("");
      $(".contactosc").append('<br><br><h3>Datos Actuales</h3><div class="row"><div class="col-md-4" id="contacto1"></div><div class="col-md-4" id="contacto2"></div><div class="col-md-4" id="contacto3"></div></div>');
      $.each(data, function () { 
        $("#contacto"+this.id).append('<p>'+this.nombre+'</p><p>'+this.puesto+'</p><p>'+this.correo+'</p><p>'+this.numero+'</p>');
      });
    }
  );
  llenar_textos();
}
function llenar_imagenes() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/galeria.php",function (data) {
      var validar=jQuery.isEmptyObject(data);
      if (validar==false) {
        var id=1;
        $(".imagen_cat").html("");
        $.each(data, function () { 
           switch (this.id) {
            case '1':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '2':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '3':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '4':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '5':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '6':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
            case '7':
              $("#imagen_"+this.id).append('<div class="contenedor_imagen"><h4>Imagen Actual</h4><img src="https://icsem.mx/Admin/admin/assets/php/uploads/'+this.imagenN+'" width="100" height="100"></div>');
              break;
           
            default:
              break;
           }
        });
      }
    }
  );
}
function actualizar_todo() {
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/api.php",function (data) {
      console.log(data);
    }
  );
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/api_productos.php",function (data) {
      console.log(data);
    }
  );
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/api_servicios.php",function (data) {
      console.log(data);
    }
  );
  $.getJSON("https://icsem.mx/Admin/admin/assets/php/api_experiencias.php",function (data) {
      console.log(data);
    }
  );
}
function llenar_textos() {
	$.getJSON("https://icsem.mx/Admin/admin/assets/php/textos.php",function (data) {
			var validar=jQuery.isEmptyObject(data);
			if (validar==false) {
				var id=1;
				$(".textos_programas").html("");
				$.each(data, function () { 
					switch (this.id) {
						case '1':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '2':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '3':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '4':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '5':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '6':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo General Productos</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '7':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '8':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo Exterior</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '9':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Texto</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '10':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Ubicacion</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '11':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Telefono</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '12':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Correo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '13':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '14':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo Interior</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '15':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Subtitulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '16':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Descripcion</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '17':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '18':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Subtitulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '19':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Descripcion</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '20':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Titulo interior</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '21':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Subtitulo</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
            case '22':
							$("#categoria_"+this.descrip).append("<table class='table table-bordered'><thead><tr><th>Descripcion</th><th>Opciones</th></tr></thead><tbody class='contenido_tabla_programas_vacios' id='texto_"+this.descrip+"'></tbody>");
							$("#texto_"+this.descrip).append('<tr><td>'+this.titulo+'</td><td><button type="button" id="edi_'+this.id+'" class="btn btn-info cambiar_null" data-id="'+this.id+'"><i class="fas fa-edit"></i></button><button type="button" class="btn btn-success guardar_cambios" id="sav_'+this.id+'" data-id="'+this.id+'"><i class="fas fa-save"></i></button></td></tr>');
							$(".guardar_cambios").toggle(false);
						break;
					}
				});
			}
		}
	);
	}
  Dropzone.options.myDropzoneContacto = {
    paramName: "file", // Nombre del campo que recibirá el archivo en el servidor
    maxFilesize: 4, // Tamaño máximo del archivo en MB
    acceptedFiles: ".jpg, .jpeg", // Tipos de archivos permitidos
    params: {
        function: 1,
    },
    addRemoveLinks: true // Mostrar enlaces para eliminar archivos
};