import styles from "./App.module.css";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Layout from "./hoc/Layout";

function App() {
  return (
    <Layout>
      <div className={styles.App}>
        <Contact />
        <About />
      </div>
    </Layout>
  );
}

export default App;
