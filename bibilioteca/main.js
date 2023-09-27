const enviar = async()=>{

    let config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nombre: 'cristian', apellido: 'pardo'}),
    }

    let res = await (await fetch('http://127.0.0.222:3334/libros', config)).json();

    console.log(res)
}

enviar();
