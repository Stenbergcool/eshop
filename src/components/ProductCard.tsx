function ProductCard(item) {
    console.log(item)
    return (
        <div className="flex justify-center max-h-56 w-56">
            <div
                className="block max-w-sm rounded-lg bg-slate-800">
                <a href="#!">
                <img
                    className="rounded-t-lg max-h-28"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                    alt="" />
                </a>
                <div className="p-6">
                <p
                    className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.title}
                </p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {item.description}
                </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;