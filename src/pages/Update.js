import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import supabase from "../config/supabaseClient";

const Update = () => {
  const [orderName, setOrderName] = useState("");
  const [method, setmethod] = useState("");
  const [price, setprice] = useState(null);
  const navigate = useNavigate();
  const {id}=useParams();
  useEffect(()=>{
    async function getOrderById(){
      let { data: order, error } = await supabase
      .from('orders')
      .select("*")
      .eq('id',id).single();

      if(error){
        toast.error("somethig went wrong")
      }
      if(order){
        setOrderName(order.order_name);
        setmethod(order.method);
        setprice(order.price);
      }
    }
    getOrderById();  
  },[id]);

  async function sumbitHandler(e) {
    e.preventDefault();
    if (!orderName || !method || !price) {
      toast.error("Please enter all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from('orders')
      .update({ id,order_name:orderName,price:price,method:method })
      .eq('id', id)
      .select()

    if (error) {
      toast.error("something went wrong PLease try again");
      return;
    }
    if (data) {
      navigate("/");
      toast.success(`order No ${id} successfully Updated`);
      return;
    }
  }

  return (
    <div className="page create">
    <form
      action=""
      className="create__form"
      onSubmit={(e) => sumbitHandler(e)}
    >
      <div className="create__title">Update Order</div>
      <div className="create__form__item">
        <label htmlFor="order_name">Order Name</label>
        <input
          type="text"
          id=""
          className="form-control"
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
      </div>

      <div className="create__form__item">
        <label htmlFor="method">Order Method/Description</label>
        <textarea id="method" onChange={(e) => setmethod(e.target.value)} className="form-control" value={method}/>
      </div>

      <div className="create__form__item">
        <label htmlFor="price">Food Price</label>
        <input
          className="form-control"
          id="price"
          type="number"
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </div>
      <div className="create__form__footer">
        <button type="submit" className="bluePill">Submit</button>
      </div>
    </form>
  </div>
  )
}

export default Update