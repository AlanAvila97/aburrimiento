
const menuHamburguer = getQueryElement('#openSidebarMenu')
const dropDownList = getAllElement('.btn_collapse_list')
/**
 * @description Función 
*/  
const handleCollapseList = (e) => {
    const content = e.target.nextElementSibling; 
          content.classList.toggle('show');
}
/**
 * @description Función 
*/ 
const graph_info = (params) => {
    const ctx = document.getElementById('myChart');

    let chart = new Chart(ctx, {
        type: 'line',
        data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
        },
        options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Chart.js Bar Chart'
              }
            }
        },
    });
    chart.canvas.parentNode.style.height = '450px';
    
}
/**
 * @description Función 
*/  
menuHamburguer.addEventListener('change', function() {
    const structure = getQueryElement('.root_page');
    (this.checked) ? addClassElement(structure, 'active-menu') : removeClass(structure, 'active-menu') 
});
/**
 * @description Función 
*/      
dropDownList.forEach(dropdown => {
    dropdown.addEventListener('click', handleCollapseList);    
});
/**
 * @description Función 
*/ 
window.addEventListener('beforeprint', () => {
    myChart.resize(600, 600);
});
window.addEventListener('afterprint', () => {
    myChart.resize();
});   
document.addEventListener("DOMContentLoaded", function(event) {    
    graph_info();    
});