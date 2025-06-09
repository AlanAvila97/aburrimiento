const listaDinamica = document.querySelector("#listaDinamica");
const liFragment = document.querySelector('#liFragment');
// 
const arrayElementos = ["Perú", "Bolivia", "Colombia"];
const fragment = new DocumentFragment();

// const clone = liFragment.content.cloneNode(true);
const clickPaises  = (e) => console.log('message')

arrayElementos.forEach(ele => {
    const clone = liFragment.content.firstElementChild.cloneNode(true);
          clone.querySelector('.text-primary').textContent = ele;
          clone.addEventListener('click', clickPaises)
          fragment.appendChild(clone)
});


listaDinamica.appendChild(fragment);