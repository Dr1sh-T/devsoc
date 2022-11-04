const Home = () => {
  return (
    <div className="Home">

      <div className="flex">
        <h1>Blog Post</h1>

        <p>Greetings KGPians. "Assignment submission ka deadline kal hai, Society ka bohot load hai,Lectures samajh nahi aa raha hai, kal class test hai" is something we all are familiar with :).
        </p>
        <p>That doesn't mean we have to restrict ourselves in what we always do. Instead we should give ourselves the much needed break we deserve. Hanging out with our friends always remains the best option and eating at someone's expenses is icing on the cake.</p>
        <p>Now comes the main question "Which restaurant to pick". Depending upon your budget, mood and group's strength there are variety of restaurants to try for in IIT KGP. And everyone has something different and new to offer which in my opinion you should not miss out. Also each restaurant has its own special dish which you might find unique and second to none.</p>
        <p>So keeping in mind the above mentioned points it is quite diificult for someone to pick up the perfect restaurant if you do not have all of its information or cannot compare bewteen two if you are unaware of one of restaurants existence.</p>
        <p>So to address this issue I have attached all of KGP's restaurants in this blog with all of their available dishes,location, contact no. and pricing. I hope you would find this post helpful so compare and pick up your dream restaurant with much ease and enjoy every little moment with your friends:). I would highly appreciate your opinions about different restaurants in the comments section.</p>
        <h3>Have a nice day!!</h3>
      </div>
      <div className="header">
        <h1>Available Restaurants</h1>
      </div>
      <div className="grid">
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7O1qxYDUorB2_9YXCFhrCHM4ow3bGcFRLA&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Food City</h3></a>
          <h4>Location: Shop No. RKH-1, IIT Opp. R.K.Hall</h4>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzfClqNGWO3BaPv8sVHPg7a5gnbYJ7KtUB8A&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Taaz Biryani</h3></a>
          <h4>Location: Bus Stand, Plot 941</h4>
        </div>
        <div className="container">
          <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/CCD_IIT_Kharagpur.jpg/480px-CCD_IIT_Kharagpur.jpg" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Cafe Coffee Day</h3></a>
          <h4>Location: Scholars' Avenue opposite to Gokhle Hall of Residence </h4>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQuWtU9jwAbdldkJzk5-qKzDJU41fIWDdMw&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Food Studio</h3></a>
          <h4>Location: REGENT MALL, near kharagpur municipality</h4>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oNqNn4d8WfsPsSYqUnbz32nbMyItsDfTcw&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Waldorf</h3></a>
          <h4>Location: Chota Tengra, Kharagpur</h4>
        </div>
        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvB_qydTLX_5MUCrmyZ_oUvZM_ALoqGUxPQ&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>The Prince</h3></a>
          <h4>Location: SH 5, Prembazar, Kharagpur</h4>
        </div>

        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCzWnilhtc_INYUcPpc7r3uwJKII6P2ufSg&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Havana Bar and Restaurant</h3></a>
          <h4>Location: 88HQ+PWH, Kharagpur City Rd</h4>
        </div>

        <div className="container">
          <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpx4pXXxhQp2BQ3moODZ1THhNPpYRfeltUw&usqp=CAU" alt="" height="150px" /></div>
          <a href="/Menu"><h3>Himalayan Delight</h3></a>
          <h4>Location: South Side, Kharagpur</h4>
        </div>

        <div className="container">
          <div><img src="https://media-cdn.tripadvisor.com/media/photo-p/1c/88/78/f5/photo1jpg.jpg" alt="" height="150px" /></div>
          <a href="/Menu"><h3>The Curry Room</h3></a>
          <h4>Location: Jhapatapur South Side, Kharagpur</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;