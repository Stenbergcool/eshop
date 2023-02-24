import { useState, useEffect, useRef } from 'react'


function SingleProductPage(props) {

    let filteredProducts = props.products.filter(e => {
        return e.id == props.articleId.current
    })

    return (
        <div className="grid grid-cols-2 gap-4 mt-10">
            <div>
                <img src={filteredProducts[0].image} alt="" />
            </div>
            <div>
                <h3 className="font-medium text-2xl text-left">
                    {filteredProducts[0].title}
                </h3>
                <p className="text-left">
                {filteredProducts[0].description}
                </p>
                <p className="float-left">
                {filteredProducts[0].price}$
                </p>
                <p className="">
                Rating {filteredProducts[0].rating.rate} <br></br> {filteredProducts[0].rating.count}
                </p>
                <button
                className="bg-white w-96 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={(e) => {props.cart.current.push(filteredProducts[0])}}
                >
                    Buy
                </button>
            </div>

        </div>
    )
}

export default SingleProductPage;