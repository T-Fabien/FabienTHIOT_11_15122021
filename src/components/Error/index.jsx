import React from "react";
import { Link } from "react-router-dom";

import '../../styles/Error.css';
class Error extends React.Component {
    render() {
  return (
    <div className="error">
      <h1 className="error__404">404</h1>
      <p className="error__msg">
          Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retournez sur la page d'accueil</Link>

    </div>
  );
};
}

export default Error;
