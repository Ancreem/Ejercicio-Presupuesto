
//Se la configuracion del json-server
import {env} from "../config.js";

//Se oraganiza ingresado a las llaves de config.js
const uri = `${env.ssl + env.hotsName}:${env.port}`;

//Nos dice la configuracion del HTTP,  El metodo esta indefinido ya que cambiara en la siguientes funciones y tambien dice como se mandara a informacion, en este caso json
const config = {method: undefined, headers: {"Content-Type": "application/json"}};

export const getAllEstadoLibro = async()=>{
    config.method = "GET";
    // config.body = "";
    let res = await (await fetch(`${uri}/estado-libro`, config)).json();
    return res;
}
export const postEstadoLibro = async(obj)=>{
    config.method = "POST";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/estado-libro`, config)).json();
    return res;
}
export const deleteOneEstadoLibro = async(id)=>{
    if(typeof id !== 'number') return {status: 400, message: `El datos '${id}' no cumple con el formato`};
    config.method = "DELETE";
    // config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/estado-libro/${id}`, config)).json();
    return res;
}
export const putOneEstadoLibro = async(obj={})=>{
    if(!obj.id) return {status: 400, message: `Usuario mande un los datos plis :)`};
    const {id, estadoId, nombre, descripcion} = obj;    
    if(typeof estadoId !== 'number') return {status: 400, message: `El datos '${estadoId}' no cumple con el formato`};
    if(typeof nombre !== 'number') return {status: 400, message: `El datos '${nombre}' no cumple con el formato`};
    if(typeof descripcion !== 'number') return {status: 400, message: `El datos '${descripcion}' no cumple con el formato`};
    
    if(typeof id !== 'number') return {status: 400, message: `El datos '${id}' no cumple con el formato`};
    config.method = "PUT";
    config.body = JSON.stringify(obj);
    let res = await (await fetch(`${uri}/estado-libro/${id}`, config)).json();
    return res;
}



// console.log(await post({titulo:"Pepito", fecha: "2023-08-10"}));
// console.log(await getAll());
// console.log(await deleteOne(1));

