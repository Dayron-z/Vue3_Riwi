export { users, teams, showUsers };

const users = [
    {
        nombre: "Pepe",
        foto: '/src/assets/images/personaBase.png',
        conexiones: 123
    },
    {
        nombre: "Andres",
        foto: '/src/assets/images/persona1.png',
        conexiones: 321
    },
    {
        nombre: "Felipe",
        foto: '/src/assets/images/persona2.png',
        conexiones: 521

    },
    {
        nombre: "Javier",
        foto: '/src/assets/images/persona3.png',
        conexiones: 621
    },
    {
        nombre: "Javier",
        foto: '/src/assets/images/persona4.png',
        conexiones: 621
    }
]



const teams = [
    {
        nombre: "React Developers",
        foto: '/src/assets/images/React.jpg',
        member: 123,
        role: "Developer"
    },
    {
        nombre: "UI Desginers",
        foto: '/src/assets/images/figma.png',
        member: 123,
        role: "Support"
    },
    {
        nombre: "Angular developers",
        foto: '/src/assets/images/angular.png',
        member: 123,
        role: "Designer"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/vue.png',
        member: 123,
        role: "Developer"
    },
    {
        nombre: "React developers",
        foto: '/src/assets/images/python.png',
        member: 123,
        role: "Marketing"
    },
]






const showUsers = (data, numero) => {
    return data.slice(0, numero)
}