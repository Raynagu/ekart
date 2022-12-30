import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryContainer = ({ categories }) => {
    return (
        <>
            {categories.length > 0 ? (
                categories.map((category, index) => (
                    <CategoryCard key={index} title={category} />
                ))
            ) : (
                <div className="col-12">
                    <h4 className="text-center">No categories found</h4>
                </div>
            )}
        </>
    );
};

export default CategoryContainer;
