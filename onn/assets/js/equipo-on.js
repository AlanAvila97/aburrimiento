const ITEM_GRID = document.querySelectorAll('.items-grid img');
/**
* @description Esta funcion hará posible el evento click para simular la funcion de un input file para cargar la boleta
*/
const handleShowTeam = (e) => {
    const item = e.target.closest('.img-fluid-responsive');
    if(item){
        let image = item.dataset.image,
            name = item.dataset.name,
            description = item.dataset.text;
        // 
        let image_modal = document.querySelector('#modalEquipo .modal-body .container-image #img_team'),
            ele_name = document.querySelector('#modalEquipo .modal-body .container-image #name_team'),
            ele_text = document.querySelector('#modalEquipo .modal-body .container-image #description_team');
        // 
        image_modal.src = image;
        ele_name.innerText = name;
        ele_text.innerText = description;
    }
}
ITEM_GRID.forEach((item) =>{            
    item.addEventListener("click", handleShowTeam);
});
