import HeroImage from "@/assets/Step1/hero.png";
import { Header } from "../../../common/components/Header";

export const Step1 = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          margin: "1rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>
          <img src={HeroImage} alt="Step1" height={"650"} />
        </div>
        <div>
          <h2>¡Seguro Salud Flexible!</h2>
          <h2>Creado para ti y tu familia</h2>
          <h2>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </h2>
        </div>
      </div>
    </div>
  );
};
