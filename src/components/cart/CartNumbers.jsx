export default function CartNumbers() {
    const cartNumbers = {
        subtotal: 119.0,
        shipping: 2.0,
        tax: 11,
        total: 132,
    };

    const rows = [
        { title: "Subtotal", price: cartNumbers.subtotal },
        { title: "Shipping", price: cartNumbers.shipping },
        { title: "Tax", price: cartNumbers.tax },
        { title: "Total (USD)", price: cartNumbers.total },
    ];
    return (
        <div id="cart-numbers" className="list-group">
            {rows.map(({ title, price }) => (
                <li
                    key={title}
                    className="list-group-item d-flex justify-content-between"
                >
                    <span>{title}</span>
                    <span className="text-muted">{price}</span>
                </li>
            ))}
        </div>
    );
}
