import Welcome from "../components/welcome";
import Picker from "../components/picker";
import "./styles.scss";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Welcome />
        <Picker />
      </div>
    </div>
  );
};

export default Home;