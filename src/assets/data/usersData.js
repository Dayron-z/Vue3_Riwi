export {users, showUsers};

const users = [
    {
        nombre: "Pepe", 
        foto: '/src/assets/images/man_banner.jpg', 
        conexiones: 123
    }, 
    {
        nombre: "Andres", 
        foto: '/src/assets/images/man_banner.jpg', 
        conexiones: 321
    }, 
    {
        nombre: "Felipe", 
        foto: '/src/assets/images/man_banner.jpg', 
        conexiones: 521
        
    }, 
    {
        nombre: "Javier", 
        foto: '/src/assets/images/man_banner.jpg', 
        conexiones: 621
    }, 
    {
        nombre: "Javier", 
        foto: '/src/assets/images/man_banner.jpg', 
        conexiones: 621
    }
] 


const showUsers = (data, numero) => {
    return  data.slice(0, numero)
}