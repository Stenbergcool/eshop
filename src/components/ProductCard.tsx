function ProductCard(item) {
    console.log(item)
    return (
        <div className="flex justify-center h-64 w-56 drop-shadow-l">
            <div
                className="block max-w-sm rounded-lg bg-slate-200">
                <a href="#!">
                <img
                    className="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
                </a>
                <div className="p-6">
                <p
                    className="mb-2 text-base font-medium leading-tight text-neutral-800">
                    {item.title}
                </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;