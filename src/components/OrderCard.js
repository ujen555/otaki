import React from 'react'
import { BiTrash } from 'react-icons/bi';
import { IoPricetag } from 'react-icons/io5'
import { PiPencil } from 'react-icons/pi';
function OrderCard({order,deleteHandler}) {
    //         use navigate hook 
    //          use the the props passed for this component
  return (
    <div className='orderCard'>
        <div className="orderCard__header">
            <div className="orderId">order No:<span className='bluePill'> 
            {/* order id  */}
            </span></div>
            <h2 className="orderName">
                {/* order name  */}
            </h2>
        </div>

        <div className="orderCard__body">
            {/* order method  */}
        </div>
        <div className="orderCard__footer">
            <span className='bluePill priceTag'>
                <IoPricetag className='icon'></IoPricetag>
                Rs.   {/* order price  */}
            </span>
            <div className="orderCard__footer__actions">
                <button  className='bluePill baseBtn editBtn'>
                    <PiPencil></PiPencil>
                </button>
                <button  className='bluePill baseBtn deleteBtn'>
                    <BiTrash></BiTrash>
                </button>
            </div>
        </div>
    </div>
  )
}

export default OrderCard;