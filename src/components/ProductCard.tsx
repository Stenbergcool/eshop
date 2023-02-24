import { Link, Route, Routes } from 'react-router-dom'

function ProductCard(item) {
    return (
        <div className="flex justify-center w-72 min-h-96 w-56 cursor-pointer" onClick={e => {item.articleId.current = item.id}}>
            <Link to="/SingleProductPage">
            <div className="block max-w-sm rounded-lg grid justify-items-center bg-white">
                <div className="h-72">
                <img
                    className="max-h-72"
                    src={item.image}
                    alt="" />
                </div>
                <div className="p-6">
                <p
                    className="mb-2 text-base font-medium leading-tight text-neutral-800 text-clip">
                    {item.title}
                </p>
                <p className="">
                    {item.price}$
                </p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard;