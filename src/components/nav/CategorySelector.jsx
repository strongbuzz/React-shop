import { useSelector, useDispatch } from "react-redux";
import { actions as productsActions } from "../../global/slices/productsSlice";

export default function CategorySelector() {
    const title = "All";
    const dispatch = useDispatch();

    const { categories, selectedCategory } = useSelector(state => state.products);

    return (
        <div className="dropdown mb-3 mb-lg-0">
            <button
                className="btn btn-outline-success text-white dropdwon-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
            >
                {selectedCategory}
            </button>
            <ul className="dropdown-menu">
                {categories.map(category => (
                    <li
                        onMouseEnter={() =>
                            dispatch(productsActions.setSelectedCategory(category))
                        }
                        key={category}
                    >
                        <a href="#" className="dropdown-item pointer">
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
