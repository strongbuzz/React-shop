import { useNavigate } from "react-router-dom";
import ProductButton from "./ProductButton";
export default function ({ product = {} }) {
    const nav = useNavigate();
    return (
        <div className="col">
            <div className="card h-100" id="product">
                <img
                    src={require(`../../images/${product.id}.jpg`)}
                    className="card-img-top pointer"
                    onClick={() => nav(`/single/${product.id}`)}
                    title={product.name}
                />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h6 className="fw-bolder">{product.name}</h6>
                        <span>{product.price}</span>
                    </div>
                </div>
                <div className="card footer p-4 pt-0 border-top-0 bg-transparent ">
                    <ProductButton />
                </div>
            </div>
        </div>
    );
}
