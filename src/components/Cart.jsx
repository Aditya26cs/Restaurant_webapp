import {useSelector} from "react-redux"
 
 
const Cart = () => {

    const cartItems = useSelector((store) => store?.cart?.items);
    console.log(cartItems); 
     

  
    return (
        <div>
            <h1 className="font-bold text-3xl m-5">Cart items - {cartItems?.length}</h1>
            
           <ul className="flex flex-col p-6 border w-fit m-4 border-blue-500 hover:shadow-2xl hover:bg-black-100">
             {cartItems.map((item , index) => {
                return  <li key={index}>{item}</li>
            })}
           </ul>

        </div>
    );
}

export default Cart;