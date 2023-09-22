const formulario = document.querySelector("#formAdd");
const formEdit = document.querySelector("#formEdit");
const dialog = document.querySelector("dialog");

console.log(dialog)

const url = "https://650cfbe547af3fd22f6817b0.mockapi.io/table"

formulario.addEventListener("submit", async (e)=>{
    e.preventDefault();
    
    let dato = Object.fromEntries(new FormData(e.target));

    const res = await fetch(url);         
    console.log(res);

    const data = await res.json();
    console.log(data);

    let config = {
        // metodo de 
        method: "POST",
        headers:{"content-type":"application/json"},
        // Pasar a JSON el dato
        body:JSON.stringify(dato)
    }
    const envio = await (await fetch(url,config)).json();
    location.reload()
});
