import "./boardingStyle.css";
import qrcode from "../assets/qr-code.png";
import airplane from "../assets/airplane.svg";

export function BoardingPass() {
  return (
    <div id="boarding-pass">
      <h1>Cartão de embarque</h1>
      <main id="ticket">
        <section className="top grid">
          <div className="flight grid column">
            <div className="number">
              <p>Voo</p>
              <strong>RS995</strong>
            </div>
            <div className="date text-right">
              <p>Data</p>
              <strong>23/05/2023</strong>
            </div>
          </div>
          <div className="grid column">
            <div className="departure grid">
              <p>São Paulo, Brasil</p>
              <strong>GRU</strong>
              <time>17:00</time>
            </div>
            <div className="airplane grid">
              <img src={airplane} alt="ícone de um avião" />
            </div>
            <div className="arrival text-right grid">
              <p>São Francisco, EUA</p>
              <strong>SFO</strong>
              <time>
                04:48 <sup>+1</sup>
              </time>
            </div>
          </div>
        </section>
        <section className="middle grid column">
          <div className="name">
            <p>Passageiro</p>
            <strong>Rodrigo Terron</strong>
          </div>
          <div className="seat text-right">
            <p>Assento</p>
            <strong>28A</strong>
          </div>
        </section>
        <section className="bottom">
          <div className="container grid column">
            <dl className="grid">
              <dt>
                <p>Embarque</p>
                <time>16:15</time>
              </dt>
              <dt>
                <p>Terminal</p>
                <strong>2</strong>
              </dt>
              <dt>
                <p>Portão</p>
                <strong>15</strong>
              </dt>
            </dl>

            <div className="qrcode grid">
              <img src={qrcode} alt="imagem de um qrcode" />
              <p>Grupo de embarque: 3</p>
            </div>
          </div>
          <p>
            <strong>Atenção:</strong> o portão fecha 16:45
          </p>
        </section>
      </main>
      <footer>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </footer>
    </div>
  );
}
