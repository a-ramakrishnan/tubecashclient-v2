import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">TubeCash</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
         Tubecash Description
        </p>
        <address className="public__addr">
          Somewhere
          <br />
          in
          <br />
          Mumbai
          <br />
          <a href="tel:+15555555555">99999 99999</a>
        </address>
        <br />
        <p>(C) Tubecash</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
