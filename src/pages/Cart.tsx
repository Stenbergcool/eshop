import { useState, useEffect } from 'react'


function Cart(props) {
    const [itemsInCart, setItemsInCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState<number>(1);
    const [shipping, setShipping] = useState<number>(0);

    useEffect(() => {
        let cartRows = makeRows();
        setItemsInCart(cartRows)
    }, [])

    useEffect(() => {
        let cartRows = makeRows();
        setItemsInCart(cartRows)
    }, [totalPrice])

    function makeRows() {
        let price = 0;
        let cartRows = props.cart.current.map((e, i) => {
            price += e.price
            return (
                <tr key={i}>
                    <td > <img src={e.image} alt="Producte picture" width="30" height="30" className="p-1"/></td>
                    <td >{e.title}</td>
                    <td >{e.price}$</td>
                    <td >
                    <button
                    type="button"
                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={(k) => {totalPriceSetter(i, price)}}
                    >
                        Remove
                    </button>
                    </td>
                </tr>
            )
        })
        setTotalPrice(price)
        return cartRows
    }

    function totalPriceSetter(i: number, price: number) {
        let takeAwaySum = props.cart.current[i].price
        let newTotalPrice = price - takeAwaySum
        props.cart.current.splice(i, 1)
        setTotalPrice(newTotalPrice)
    }

    return (
        <div className="grid grid-cols-3 gap-4 p-10 bg-slate-100">
        <div className="relative overflow-x-auto col-span-2 bg-white">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                </thead>
                <tbody>
                {itemsInCart}
                </tbody>
            </table>
        </div>
        <div className="text-left bg-white max-h-36">
            <div className="border-b">
            <p className="mb-4">Total price: {totalPrice}$</p>
            </div>
            <div className="border-b">
            <p className="mb-4">Shipping: {shipping}$</p>
            </div>
            <div className="border-b">
            <p className="mb-4">Total: {totalPrice + shipping}</p>
            </div>
            <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Place order
            </button>
            </div>
        </div>
        </div>
    )
}

export default Cart;