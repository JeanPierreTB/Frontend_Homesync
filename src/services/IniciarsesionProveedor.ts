import { URL } from "./URL";

export async function IniciarsesionProveedor(usuario:string,contrasena:string) {
    return fetch(`${URL}/proveedor/inicio-sesion-proveedor`,{
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
