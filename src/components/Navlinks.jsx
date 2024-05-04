import { Link, NavLink } from "react-router-dom"

const links =[
    {
        id:1,
        text: "Home",
        link: "/"
    },
    {
        id:2,
        text:"About",
        link:"/about",
    },
    {
      id:5,
      text:"Products",
      link:"/products"
  },
    {
        id:3,
        text:"Cart",
        link:"/cart"
    },

    {
      id:4,
      text:"Checkout",
      link:"/checkout"
  },
 
  {
    id:6,
    text:"Orders",
    link:"/orders"
}
]

function NavLinks() {
  return (
    <>
   
    {links.map((link)=>{
       return <li key={link.id}>
        <NavLink className="px-5 py-2 text-1xl font-semibold hover:bg-base-content hover:text-white rounded-x"  to={link.link}>{link.text}</NavLink>
       </li>
    })}
   
    </>
  )
}

export default NavLinks