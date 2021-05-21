// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    // Propiedad que contiene el valor actual del campo input
    // let textToPass = form[0].value

    // Forma habitual de hacerlo: accediendo al elemento INPUT, propiedad 'value'
    textToPass = document.querySelector('#message').value

    if (textToPass) {
    document.querySelector('.message-content').textContent = textToPass
    }

    else {
        let messageEmpty = document.querySelector('h5.feedback')

        // si el .value del input es vacio, añadimos la clase 'show' 
        // que va a modificar la propiedad display
        messageEmpty.classList.add('show')
        // La functión setTimout toma dos parámetros
        // 1. El primero es una function. Esta function se va a ejecutar
        // justo cuando hayan pasado los milisegundos indicados en el parámetro dos
        // 2. El segundo parámetro es un entero(number) con los segundos
        // que va esperar el script antes de ejecutar la función del primer parámetro
        setTimeout( () => {
            //Eliminamos la clase que nos permitia mostrar el elemento
            messageEmpty.classList.remove('show')
        }, 2000);

    }
    console.log("Hemos hecho clic en el botón de submit!")

})