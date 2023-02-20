import { useParams } from "react-router-dom";
import data from "../data";
import ProductButton from "../components/products/ProductButton";
import Line from "../components/extra/Line";
import Products from "../components/products/Products";

export default function Single() {
    const { id } = useParams();
    const product = data.find(product => product.id === +id);
    return (
        <div>
            <div
                id="single"
                className="row justify-content-center align-items-center text-white mx-auto"
            >
                <div className="col-md-6">
                    <img
                        src={require(`../images/${product.id}.jpg`)}
                        className="card-img-top mb-5 mb-md-0"
                    />
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">{product.name}</h2>
                    <div className="fs-5 mb-2">{product.price}</div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                        iure porro explicabo eaque accusantium atque nulla omnis delectus,
                        id consequuntur ipsam, deserunt ad vitae cumque nobis. Ex saepe
                        facilis labore.
                    </p>
                    <ProductButton />
                </div>
            </div>
            <Line />
            <h2 className="text-white my-4 text-center">Similiar Products Like This</h2>
            <Products products={data.slice(0, 4)} />
        </div>
    );
}
