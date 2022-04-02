import "../style/Cart.css";
import ProductHeader from '../Component/ProductHeader';
import '../style/products.css';
import { useState } from "react";
var Fruits = [
    {
        name: "Apple",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVae5_T-0OTRxwQAbZByo9noC0LdLTh4BI-w&usqp=CAU",
        price: 60,
        description: ""
    },
    {
        name: "Mango",
        url: "https://cdn.shopify.com/s/files/1/0506/9032/6708/products/MANGOEGYPT.jpg?v=1605624440",
        price: 30,
        description: ""
    },
    {
        name: "PineApple",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9MSb7D0YsI7efHRbRZnKR8rUyyNjwb_1JtA&usqp=CAU",
        price: 50,
        description: ""
    },
    {
        name: "Oranges",
        url: "https://cdn-prod.medicalnewstoday.com/content/images/articles/272/272782/oranges-in-a-box.jpg",
        price: 20,
        description: ""
    },
    {
        name: "Banana",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wnfGPM_ekCoVWbHPvZyi_Oojr6tMXQTOLg&usqp=CAU",
        price: 10,
        description: ""
    }
];
function Cart() {
    return (
        <>
            <ProductHeader />
            <div>
                <div className="container-block heading">
                    <h3>Items added to cart</h3>
                </div>
                <div id="Product-container">
                    <div className="cart cart1">
                    {
                        Fruits.map((item, index) => {
                            return (
                                <CartProduct index={index} data={item} />
                            )
                        })
                    }
                    </div>
                    <hr />
                   
                    <hr />
                </div>
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
                        <button className="btn btn-primary profile-button" type="button">
                            Place Order
                        </button>
                    </div>
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
const CartProduct = (props) => {
    var productData = props.data
    return (
        <div className="card products">
            <img className="card-img-top" src={productData.url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{productData.name}</h5>
                <p className="price">Rs. {productData.price}</p>
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