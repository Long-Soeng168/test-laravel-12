const products = [
    {
        id: 1,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$100",
        image: "assets/demo-images/90.png"
    },
    {
        id: 2,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$100",
        image: "assets/demo-images/90.png"
    },
    {
        id: 3,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$100",
        image: "assets/demo-images/90.png"
    },
    {
        id: 4,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$100",
        image: "assets/demo-images/90.png"
    },
    {
        id: 5,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        price: "$100",
        image: "assets/demo-images/90.png"
    }
];

const MyAllFeatureProducts = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {products.map((product) => (
                <div key={product.id} className="w-full max-w-xs rounded-lg border border-gray-400 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <a href="#">
                        <img className="rounded-t-lg aspect-square object-cover" src={product.image} alt={product.name} />
                    </a>
                    <div className="px-5 py-5">
                        <a href="#">
                            <h5 className="text-base line-clamp-2 font-noto-san-regular tracking-tight text-gray-900 dark:text-white">
                                {product.name}
                            </h5>
                        </a>
                        <div className="flex text-base items-center justify-between font-proxima-nova-regular text-color">
                            Price: <span className="dark:text-white">{product.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyAllFeatureProducts;
