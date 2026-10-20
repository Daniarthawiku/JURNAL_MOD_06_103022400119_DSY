import { useState } from 'react'
import './index.css'
import Panel from "./components/Panel";

function KantinCard() {
  const namaKantin = "Daniartha Wikus Nugroho";
  const [jumlah, setJumlah] = useState(0);

  const jam = 9;
  const sapaan = (jam < 12) ? "selamat pagi" : "selamat siang";

  const N = 19;

  return (
    <>

        <div className="hero">
          <h1 className="judul">
              Kantin {namaKantin}
          </h1>
        </div>

        <div>
          <p>Saldo awal Kartu Kantin: Rp {N * 1000}</p>
        </div>
        
        <div>
          <p>{sapaan}</p>
        </div>

        <div>
          <button type="button" disabled>Bayar</button>
        </div>

        <Panel></Panel>
    </>
  );
}

export default KantinCard;
