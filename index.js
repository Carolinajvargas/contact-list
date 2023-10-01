//declarar la lista de tareas

const taskList = ["Carolina Jiménez", "Arturo Guerra", "Barack Obama", "Jack London"]; 

// declarar función nuevo contacto

function addContact(name) {
    taskList.push(name);
};

// borrar un contacto

function deleteContact(id) {
    taskList.splice(id, 1);
};

function deleteContactByName(name) {
    const index = taskList.indexOf(name);

    index == -1 ? console.log("El contacto no existe") : taskList.splice(index, 1);

    // if(index == -1){
    //     console.log("El contacto no existe");
    // } else {
    //     taskList.splice(index, 1);
    // }
};

// imprimir en consola los contacto presentes en la lista

function showContacts() {
    console.log("*****LISTA DE TAREAS*****")

    taskList.map((task, id) => {
        console.log(`${id+1}. ${task}`);
    });
};
