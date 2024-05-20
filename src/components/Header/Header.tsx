import ShoppingIcon from "../../assets/shoppingHomepage.avif"

const Header = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="text-indigo-800 text-center my-3">Shopping List</h1>
      <img src={ShoppingIcon} className="img-thumbnail responsive-img bg-success" />
    </div>
  )
}

export default Header
