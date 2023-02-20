export default function CartBuyButton({ title = "Buy now" }) {
    const buy = () => {
        console.log("Buying now!");
    };
    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
            {title}
        </button>
    );
}
