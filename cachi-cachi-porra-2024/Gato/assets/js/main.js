
var elem = document.documentElement;

$(".fullscreen").on('click', function(e) {
    let count = parseInt($(this).attr('data-count'));

    if(count < 3){
        count = count + 1;
        $(this).attr('data-count', count);
    }else{
        openFullscreen();
        $(this).attr('data-count', 1);
        $(this).attr('style', 'display: none;');
        $('.quit').attr('style', 'display: block;');
    }
});
$("body").on("click", ".quit", function(){
    closeFullscreen();
    $(this).attr('style', 'display: none;');
    $('.fullscreen').attr('style', 'display: block;');
});

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
}
// 
function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        $('.quit').attr('style', 'display: none;');
        $('.fullscreen').attr('style', 'display: block;');   
        console.log('evento de esc o salida');     
    }
}  
