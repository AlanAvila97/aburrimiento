import {
  onGetTasks,
  saveUser,
  saveTask,
  deleteTask,
  deleteTask2,
  getTask,
  updateTask,
  getTasks,
  onGetUsers,
  onGetTurnos,
  updateTurno,
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const userForm = document.getElementById("user-form");
const tasksContainer = document.getElementById("tasks2");
const tasks2 = document.getElementById("task2");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTurnos((querySnapshot) => {
    $('.turno-mensaje').html('');
    querySnapshot.forEach((doc) => {
      const turnos=doc.data();
      $('#turno').val(turnos.turno);
      switch (turnos.turno) {
        case 'cross':
          //$('.turno-mensaje').append('<h1>Turno Cruz</h1>');
          break;
        case 'circle':
          //$('.turno-mensaje').append('<h1>Turno Circulo</h1>');
          break;
        case 'libre':
          //$('.turno-mensaje').append('<h1>Turno Libre</h1></h1>');
          break;
      }
    });
  });
});
window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });
  onGetTasks((querySnapshot) => {
    $('.checker').html('');
    querySnapshot.forEach((doc) => {
      const jugadas = doc.data();
      const juego=document.getElementById('codigotab').textContent;
      console.log(jugadas);
      if (jugadas.posicion==='') {
        console.log('esta vacio el id '+jugadas.id);
      }else{
        switch (jugadas.forma) {
          case 'cross':
            var campo=document.getElementById('checker-'+jugadas.posicion);
            $('#checker-'+jugadas.posicion).append('<h1 class="espacio-marcado" style="color: #fff;" data-ic="'+doc.id+'"><i class="fas fa-times"></i></h1>');    
            campo.setAttribute('data-ic',doc.id);
            break;
          case 'circle':
            var campo=document.getElementById('checker-'+jugadas.posicion);
            $('#checker-'+jugadas.posicion).append('<h1 class="espacio-marcado" data-ic="'+doc.id+'"><i class="far fa-circle"></i></h1>');    
            campo.setAttribute('data-ic',doc.id);
            break;
        
          default:
            break;
        }
        
            /*tasksContainer.innerHTML += `
            <div class="card card-body mt-2 border-primary">
          <h3 class="h5">${jugadas.forma}</h3>
          <p>${jugadas.posicion}</p>
          <div>
            <button class="btn btn-primary btn-delete" data-id="${doc.id}">
              🗑 Delete
            </button>
            <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
              🖉 Edit
            </button>
          </div>
        </div>`;*/
      }
    });
/*
    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );
    const btnsInsta = tasks2.querySelectorAll(".subir-jugada");
    btnsInsta.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await saveTask(dataset.usuario, dataset.forma);
        } catch (error) {
          console.log(error);
        }
      })
    );*/
  });
});
const btnsInsta = tasks2.querySelectorAll(".subir-jugada");
    btnsInsta.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await saveTask(dataset.juego,dataset.forma, dataset.posicion);
        } catch (error) {
          console.log(error);
        }
      })
    );
    const btnsDelete = tasks2.querySelectorAll(".borrar-jugada");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.ic);
        } catch (error) {
          console.log(error);
        }
      })
    );
    const btnsDeleteTotal = tasks2.querySelectorAll(".borrar-todo");
    btnsDeleteTotal.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask2(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );
    const actualizarTurno = tasks2.querySelectorAll(".actualizar-turno");
    actualizarTurno.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await updateTurno(dataset.id,{turno: dataset.turno});
        } catch (error) {
          console.log(error);
        }
      })
    );
/*
const btnsSubir = tasks2.querySelectorAll(".subir-jugada");
    const juego=document.getElementById('codigotab').textContent;
    const forma=document.getElementById('figura').value;
    const posicion = document.getElementById('tiro').value;
btnsSubir.forEach((btn)=>

  btn.addEventListener('click', async({juego,forma,posicion})=>{
    try {
      await saveTask(juego,forma,posicion);
    } catch (error) {
      console.log(error);
    }
  })
);
*/
/*
btnsSubir.addEventListener("click", async (e) => {
  e.preventDefault();
  const juego = $('#codigotab').textContent;
  const forma = $('#figura').val();
  const posicion = $('#tiro').val();
  try {
      await saveTask(juego,forma,posicion);
  } catch (error) {
    console.log(error);
  }
});*/
/*
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  try {
    if (!editStatus) {
      await saveTask(title.value, description.value);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Save";
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});

userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = userForm["usuario"];
  const forma = userForm["forma"];

  try {
      await saveUser(user.value, forma.value);
  } catch (error) {
    console.log(error);
  }
});
*/
