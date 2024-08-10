export { users, teams, showUsers };

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



const teams = [
    {
        nombre: "React developers",
        foto: '/src/assets/images/react.png',
        member: 123,
        role: "Developer"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/react.png',
        member: 123,
        role: "Support"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/react.png',
        member: 123,
        role: "Designer"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/react.png',
        member: 123,
        role: "Developer"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/react.png',
        member: 123,
        role: "Marketing"
    },
]






const showUsers = (data, numero) => {
    return data.slice(0, numero)
}