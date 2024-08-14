export { users, teams, showUsers };

const users = [
    {
        nombre: "Pepe",
        foto: '/src/assets/images/personaBase.png',
        conexiones: 123,
        area: "UI Designer"
    },
    {
        nombre: "Andres",
        foto: '/src/assets/images/persona1.png',
        conexiones: 321,
        area: "Developer"
    },
    {
        nombre: "Felipe",
        foto: '/src/assets/images/persona2.png',
        conexiones: 521,
        area: "UI Designer"

    },
    {
        nombre: "Javier",
        foto: '/src/assets/images/persona3.png',
        conexiones: 621,
        area: "Developer"
    },
    {
        nombre: "Javier",
        foto: '/src/assets/images/persona4.png',
        conexiones: 621,
        area: "UI Designer"
    },
    {
        nombre: "Felipe",
        foto: '/src/assets/images/persona4.png',
        conexiones: 621,
        area: "UI Designer"
    },
    {
        nombre: "Camilo",
        foto: '/src/assets/images/persona4.png',
        conexiones: 621,
        area: "UI Designer"
    },
    {
        nombre: "Felipe",
        foto: '/src/assets/images/persona4.png',
        conexiones: 621,
        area: "UI Designer"
    },    {
        nombre: "Pepe",
        foto: '/src/assets/images/personaBase.png',
        conexiones: 123,
        area: "UI Designer"
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
        nombre: "UI Designers",
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
        nombre: "Vue developers",
        foto: '/src/assets/images/vue.png',
        member: 123,
        role: "Developer"
    },
    {
        nombre: "Python developers",
        foto: '/src/assets/images/python.png',
        member: 123,
        role: "Marketing"
    },
    {
        nombre: "UI Designers",
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
        nombre: "Vue developers",
        foto: '/src/assets/images/vue.png',
        member: 123,
        role: "Developer"
    }
]






const showUsers = (data, numero) => {
    return data.slice(0, numero)
}