import NoContent from "../components/extra/NoContent";
import data from "../data";
import CartItem from "../components/cart/CartItem";
import CartNumbers from "../components/cart/CartNumbers";
import CartBuyButton from "../components/cart/CartBuyButton";

export default function Cart() {
    const items = data.slice(0, 1);

    if (items.length === 0) {
        <NoContent text="Nothing In Your cart" btnText="Browse Products" />;
    }
    return (
        <div className="row py-3">
            <div className="col-12 col-md-10 col-xl-8 mx-auto">
                <div
                    id="cart"
                    className="border p-3 bg-white text-dark my-3 my-md-0 rounded"
                >
                    <h4 className="mb-3 px-1">Cart</h4>
                    <ul className="list-group mb-3 cart-list">
                        {items.map(i => (
                            <CartItem key={i.id} item={i} />
                        ))}
                    </ul>
                    <CartNumbers />
                    <CartBuyButton />
                </div>
            </div>
        </div>
    );
}
