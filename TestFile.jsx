export default function SearchBar() {
    return (
        <form
            onSubmit={e => e.preventDefault}
            className="d-flex ms-md-0 ms-lg-3"
        >
            {" "}
            <input
                type="text"
                placeholder="Search Products"
                onChange={e => {}}
                className="form-control ms-md-auto me-2"
            />
            giyun i hyuong
        </form>
    );
}
