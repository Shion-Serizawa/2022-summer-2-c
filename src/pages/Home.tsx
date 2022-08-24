import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Footer } from "../component/footer.tsx";
import { HeaderS } from "../component/Header.tsx";
import { savingRouteData } from "../function/SavingRouteData.tsx";
import { getStoredRouteData } from "../function/GetStoredRouteData.tsx";




export const Home = (): React.ReactElement => (
  
  <div>
    <HeaderS />
    <h1>
      Example{" "}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>{" "}
      apps
    </h1>
    <p>
      {"This app bundled on "}
      <a href="https://deno.land/" target="_blank" rel="noopener noreferrer">
        deno
      </a>
      .
    </p>
    <ul>
      <li>
        <Link to="/history">History</Link>
      </li>
    </ul>
    <Footer />
  </div>
);