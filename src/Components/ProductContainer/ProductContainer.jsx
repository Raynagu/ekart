import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ products }) => {
    return (
        <>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            ) : (
                <div className="col-12">
                    <h4 className="text-center">No products found</h4>
                </div>
            )}
        </>
    );
};

export default ProductContainer;
