const NavBar = () => {
  return ( 
    <div className="NavBar">
        <div className="Title">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53Vr2EWfvdbP1_x6OQN2ZgEz-Hu6DsjvTjQ&usqp=CAU" alt="" height="80px" />
          <h1>RestaurantPedia</h1>
        </div>
        <div className="main">
          <a href="/"><h2>Home</h2></a>
          <h2>About Us</h2>
          <h2>Comments</h2>
        </div>
      </div>
   );
}
 
export default NavBar;