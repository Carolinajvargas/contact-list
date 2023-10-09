const taskList = [
    {
        id: 0,
        nombre: "Carolina",
        apellido: "Jimenez",
        telefono: "3137654938",
        ubicacion: {
            ciudad: "Sabaneta",
            direccion: "calle 20 sur"
        }
    },
    {
        id: 1,
        nombre: "Arturo",
        apellido: "Guerra",
        telefono: "3104738923",
        ubicacion: {
            ciudad: "Medellín",
            direccion: "Calle 10 sur # 39a-250"
        }
    },
    {
        id: 2,
        nombre: "Barack",
        apellido: "Obama",
        telefono: "3124738923",
        ubicacion: {
            ciudad: "Medellín",
            direccion: "Calle 10 sur # 39a-250"
        }
    },
    {
        id: 5,
        nombre: "Miguel",
        apellido: "de Unamuno",
        telefono: "3104738923",
        ubicacion: {
            ciudad: "Medellín",
            direccion: "Calle 10 sur # 39a-250"
        }
    }
]; 

// declarar función nuevo contacto

function addContact(contact) {
    
    const {nombre, apellido, telefono, ubicacion} = contact;
    // const nombre = contact.nombre;
    // const apellido = contact.apellido;
    // { nombre, apellido} = contact
    const lastElementId = taskList.length -1;
    const newId = taskList[lastElementId].id +1;


    taskList.push({
        id: newId,
        nombre,
        apellido,
        telefono,
        ubicacion
    });
};

// borrar un contacto

function deleteContact(id) {
    // taskList.splice(id, 1);
    const index = taskList.map(task => task.id).indexOf(id);
    console.log("index", index);
    taskList.splice(index, 1);
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
    console.log("*****LISTA DE CONTACTOS*****")

    taskList.map((task, id) => {
        console.log(`${id+1}. ${task.nombre} ${task.apellido}`);
    });
};

