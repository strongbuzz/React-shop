import Products from "../components/products/Products";
import data from "../data";

export default function Home() {
    return (
        <div>
            <Products products={data}></Products>
        </div>
    );
}
