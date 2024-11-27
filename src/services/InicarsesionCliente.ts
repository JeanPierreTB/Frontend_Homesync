import { URL } from "./URL";

export async function IniciarsesionCliente(usuario:string,contrasena:string) {
    return fetch(`${URL}/cliente/inicio-sesion-cliente`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usuario: usuario,
            contrasena: contrasena
        }),
    })
          .then((response)=>response.json())
          .then((data)=>data)
          .catch((e)=>console.error(`Ocurrio un error ${e}`))
}
