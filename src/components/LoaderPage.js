import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";
import "../styles/Loader.css";
import Logo from "../resources/portfoliologo.png";

const LoaderPage = () => {
  return (
    <div className="loader">
      <section>
        <BarLoader
          color="white"
          loading={true}
          width={163}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <img src={Logo} />
        <BarLoader
          color="white"
          loading={true}
          width={163}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </section>
    </div>
  );
};

export default LoaderPage;
