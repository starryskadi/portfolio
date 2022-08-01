import "../styles/globals.css";
import Context from "context/app";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({ menu: false, activeNav: 0 });

  return (
    <Context.Provider value={{ state, setState }}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
