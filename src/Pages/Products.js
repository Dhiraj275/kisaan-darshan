import React, { useState } from 'react';
import ProductHeader from '../Component/ProductHeader';
import '../style/products.css';

function Product() {
    return (
        <>
            <ProductHeader />
            <div className="py-5">
                <hr />
                 <h3 className="text-center mt-4">
                    Fruits
                </h3>
                <div className="card-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <hr />
                 <h3 className="text-center mt-4">
                    Vegitables
                </h3>
                <div className="card-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <hr />
                 <h3 className="text-center mt-4">
                    Grains
                </h3>
                <div className="card-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
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
const ProductCard = () => {
    return (
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
                    <div className="col-xs-2"><button className="btn remove btn-success"><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button></div>
                </div>
            </div>
        </div>
    )
}
export default Product;