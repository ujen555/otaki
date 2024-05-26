import OrderCard from "../components/OrderCard";


const Home = () => {
  //fetch orders 
  //create error conditions
  // show all the order cards and pass order details and delete handler as prop

  return (
    <div className="page home">

      <div className="orderList">
        <OrderCard ></OrderCard>
      </div>
    </div>
  )
}

export default Home