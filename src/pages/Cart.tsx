import { useState, useEffect } from 'react'


function Cart(props) {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState<number>(1);
    console.log(props.cart)

    useEffect(() => {
        let cartRows = props.cart.current.map((e, i) => {
            return (
                <tr key={i}>
                    <td > <img src={e.image} alt="Producte picture" width="30" height="30"/></td>
                    <td >{e.title}</td>
                    <td >{e.price}$</td>
                    <td >
                    <button
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={(k) => {props.cart.current.splice(i, 1)}}
                    >
                        Remove
                    </button>
                    </td>
                </tr>
            )
        })
        setItemsInCart(cartRows)
    }, [])

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                {itemsInCart}
                </tbody>
            </table>
        </div>
    )
}

export default Cart;