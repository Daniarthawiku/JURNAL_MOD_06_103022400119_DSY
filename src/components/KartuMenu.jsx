function KartuMenu({nama, harga, kategori = 'Makanan' }) {

return (
        <div className="card">
            <h3>{nama}</h3>
            <p>HARGA: {harga}</p>
            <p>Kategori: {kategori}</p>
        </div>
    );
}