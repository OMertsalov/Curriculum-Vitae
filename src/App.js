import styles from "./App.module.css";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import { agreement } from "./data/data";
import Layout from "./hoc/Layout";

function App() {
  return (
    <div>
      <Layout>
        <div className={styles.App}>
          <Contact />
          <About />
        </div>
      </Layout>

      <p className={styles.Agreement}>{agreement}</p>
    </div>
  );
}

export default App;
