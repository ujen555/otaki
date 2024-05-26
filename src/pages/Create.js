
const Create = () => {
  //create controlled Elements
  // use navigate hook
  // create a async submit handler function that creates a order and navigates back to the home page
 
  return (
    <div className="page create">
      <form
        action=""
        className="create__form"
      >
        <div className="create__title">Create Order</div>
        <div className="create__form__item">
          <label htmlFor="order_name">Order Name</label>
          <input
            type="text"
            id=""
            className="form-control"
          />
        </div>

        <div className="create__form__item">
          <label htmlFor="method">Order Method/Description</label>
          <textarea id="method"  className="form-control"/>
        </div>

        <div className="create__form__item">
          <label htmlFor="price">Food Price</label>
          <input
            className="form-control"
            id="price"
            type="number"
          />
        </div>
        <div className="create__form__footer">
          <button type="submit" className="bluePill">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
