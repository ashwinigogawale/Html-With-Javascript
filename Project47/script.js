const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
const testimonials = [
    {
        name:'Miyah ma',
        position:'Marketing',
        photo:'https://randomuser.me/api/portraits/women/46.jpg',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi voluptate repellendus fugit assumenda? Doloremque atque saepe eos similique quasi?",

    },
    {
        name:'HEO wen',
        position:'HR',
        photo:'https://images.unsplash.com/photo-1610642779504-0bb8a0e5763f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi voluptate repellendus fugit assumenda? Doloremque atque saepe eos similique quasi?",

    },
    {
        name:'Ramica',
        position:'photography',
        photo:'https://images.unsplash.com/photo-1610642433478-630fab962814?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi voluptate repellendus fugit assumenda? Doloremque atque saepe eos similique quasi?",

    },
    {
        name:'Marco',
        position:'developing',
        photo:'https://images.unsplash.com/photo-1610558789501-cab168d904ec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi voluptate repellendus fugit assumenda? Doloremque atque saepe eos similique quasi?",

    },
    {
        name:'Anna',
        position:'Marketing',
        photo:'https://images.unsplash.com/photo-1610573007685-e56716e3e4e7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis animi voluptate repellendus fugit assumenda? Doloremque atque saepe eos similique quasi?",

    },
]


let idx=1

function updateTestimonial() {
    const{ name, position, photo, text} = testimonials[idx]
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length-1) {
        idx=0
    }
}
setInterval(updateTestimonial,10000)