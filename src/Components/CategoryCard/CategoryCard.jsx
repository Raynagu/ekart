import { useSelector, useDispatch } from "react-redux";
import { setCategorySelected } from "../../Store/features/categorySlice";

const CategoryCard = ({ title }) => {
    const dispatch = useDispatch();
    const { categorySelected } = useSelector((state) => state.categories);
    const active =
        title === categorySelected
            ? "bg-info text-white"
            : "bg-white text-dark";

    const selectCategoryHandler = (cat) => {
        if (title !== categorySelected) {
            dispatch(setCategorySelected(cat));
        }
    };

    return (
        <div className="col-12 col-md-3 my-1">
            <div
                className={`card shadow-sm rounded-pill ${active}`}
                role="button"
                onClick={() => selectCategoryHandler(title)}
            >
                <div className="card-body p-2">
                    <p className="card-title text-center text-capitalize m-0">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
