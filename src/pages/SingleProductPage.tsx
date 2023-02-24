function SingleProductPage(props) {
    console.log(props.articleId)
    console.log(props.products)
    let filteredProducts = props.products.filter(e => {
        return e.id == props.articleId.current
    })
    console.log(filteredProducts)
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
            <button class="bg-white w-96 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Buy
            </button>
        </div>

    </div>
    )
}

export default SingleProductPage;