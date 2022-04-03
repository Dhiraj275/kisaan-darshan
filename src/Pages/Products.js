import React, { useState } from 'react';
import ProductHeader from '../Component/ProductHeader';
import '../style/products.css';
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

var Machinerires = [
    {
        name: "Kraft Seeds Pruning Shear Cutter",
        price: 299,
        url: "https://m.media-amazon.com/images/I/61ko0r4GTPL._AC_UL320_.jpg",
        description: "All Purpose Garden Use with Smart Lock (9.5cm, 9cm)"
    },
    {
        name: "Sharpex Telescopic Metal Rake",
        price: 699,
        url: "https://m.media-amazon.com/images/I/71Rg+O39m3L._AC_UL320_.jpg",
        description: "Adjustable Rake for Quick Clean Up of Lawn and Yard, Garden Leaf Rake, Expanding Handle"
    },
    {
        name: "Wolf-Garten Steel Multi Star",
        price: 1270,
        url: "https://m.media-amazon.com/images/I/31D3ymZ6h8L._AC_UL320_.jpg",
        description: "Scarifying Rake without Handle (Silver) , Width - 30 cm"
    }
];

var Pesticides = [
    {
        name: "Agro Plus Am003_1 Pesticide (100 ml)",
        url: "https://m.media-amazon.com/images/I/71tDkDVZKHL._AC_UY218_.jpg",
        price: 119,
        description: ""
    },
    {
        name: "SURYA NEEM Organic Neem Oil Pesticide",
        url: "https://m.media-amazon.com/images/I/81pCViAJikL._AC_UY218_.jpg",
        price: 449,
        description: ""
    },
    {
        name: "Katyayani Acetamiprid 20% SP Insecticide Pesticide",
        url: "https://m.media-amazon.com/images/I/61-1gefjMZL._AC_UY218_.jpg",
        price: 349,
        description: " Thrips whitefly jassid aphids Leafhoppers Leafminers Scalespest Insect Killer for Gardening Plants and Agriculture "
    }
]
var Vegetables = [
   
    {
        name: "Potato",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPnurHr-vd0_SON07UgC-HysOPA1A9B3zqg&usqp=CAU",
        price: 8,
        description: ""
    },
    {
        name: "Okra/Bindi",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_w6HDqVc0sZ3LNZX6sd3rO-ZACCOD6fBMuA&usqp=CAU",
        price: 20,
        description: ""
    },
    {
        name: "Tomato",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVU-GFStOSmXTIp1pnOnNvR2ykxp-DY1a4w&usqp=CAU",
        price: 10,
        description: ""
    },
    {
        name: "Methi/ Fenugreek",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qcag0IhfMqfeKTk3fwSiBWJszF8qq63diA&usqp=CAU",
        price: 10,
        description: ""
    }
]
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
                    {
                        Fruits.map((item, index) => {
                            return (
                                <ProductCard index={index} data={item} />
                            )
                        })
                    }
                </div>
                <hr />
                <h3 className="text-center mt-4">
                    Vegitables
                </h3>
                <div className="card-wrap">
                    {
                        Vegetables.map((item, index) => {
                            return (
                                <ProductCard index={index} data={item} />
                            )
                        })
                    }
                </div>
                <hr />
                <h3 className="text-center mt-4">
                    Machineries
                </h3>
                <div className="card-wrap">
                {
                        Machinerires.map((item, index) => {
                            return (
                                <ProductCard index={index} data={item} />
                            )
                        })
                    }
                </div>
                <h3 className="text-center mt-4">
                    Pesticides
                </h3>
                <div className="card-wrap">
                {
                        Pesticides.map((item, index) => {
                            return (
                                <ProductCard index={index} data={item} />
                            )
                        })
                    }
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
const ProductCard = (props) => {
    var itemData = props.data
    return (
        <div key={props.index} className="card products">
            <img className="card-img-top" src={itemData.url} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{itemData.name}</h5>
                <p className="price">Rs. {itemData.price}</p>
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
export {Vegetables, Pesticides, Machinerires, Fruits, ProductCard}