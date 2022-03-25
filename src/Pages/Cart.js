import "../style/Cart.css";
import ProductHeader from '../Component/ProductHeader';
import '../style/products.css';
import { useState } from "react";
function Cart() {
    return (
        <>
            <ProductHeader />
            <div>
                <div className="container-block heading">
                    <h3>Items added to cart</h3>
                </div>
                <main id="Product-container">
                    <div className="cart cart1">
                       
                    <CartProduct />

                    <CartProduct /><CartProduct /><CartProduct />
                    </div>
                    <hr />
                    <div className="card total">
                        <table className="billing">
                            <tbody><tr>
                                <td>Total:</td>
                                <td className="amount">1200</td>
                            </tr>
                                <tr>
                                    <td>Delivery charges:</td>
                                    <td className="amount">60</td>
                                </tr>
                                <tr>
                                    <td className="net font-weight-bold">Net Total:</td>
                                    <td className="net amount font-weight-bold">1260</td>
                                </tr>
                            </tbody></table>
                        <br />
                        <button className="btn font-weight-bold buy">Place Order</button>
                    </div>
                    <hr />
                </main>
            </div>
        </>
    );
}
const QualityControl = () => {
    const [currentQuantity, setCurrentQuantity] = useState(1)
    const increase = () => {
        setCurrentQuantity(currentQuantity + 1)
    }
    const decrease = () => {
        if (currentQuantity > 1) {
            setCurrentQuantity(currentQuantity - 1)
        }
    }
    return (
        <div className="quantity-control">
            <button onClick={decrease} className="btn btn-primery">
                -
            </button>
            <input type="number" value={currentQuantity} onChange={e => setCurrentQuantity(e.target.value)} maxLength={2} />
            <button onClick={increase} className="btn btn-primery">
                +
            </button>
        </div>
    )
}
const CartProduct = () =>{
    return(
        <div className="card products">
        <img className="card-img-top" src="https://qph.fs.quoracdn.net/main-qimg-29f5a40fb5a176dff29078d550b822ff.webp" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="price">Rs. 12/Kg</p>
            <div className="row">
                <QualityControl />
            </div>
            <br />
            <div className="row">
                <div className="col-xs-2"><button className="btn remove btn-danger"><i className="fa-solid fa-trash"></i> Remove Item</button></div>
            </div>
        </div>
    </div>
    )
}
export default Cart;