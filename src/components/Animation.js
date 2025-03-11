import { gsap } from "gsap"

// setTimeout()

const Animation = () =>{
    gsap.fromTo('.logo',{opacity:0, x:-30 }, {opacity: 1 , x: 2 , duration: 2 })
    return (
    <div className='logo'>Trinadh Weather<br></br></div>)
}
export default Animation