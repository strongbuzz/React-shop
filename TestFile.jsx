export default function SearchBar() {
    return (
        <form className="d-flex ms-md-0 ms-lg-3">
            {" "}
            <input
                type="text"
                placeholder="Search Products"
                onChange={e => {
                    e.preventDefault;
                }}
                className="form-control ms-md-auto me-2"
            />
            hello
        </form>
    );
}