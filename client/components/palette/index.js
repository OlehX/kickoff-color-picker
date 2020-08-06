import "./styles.scss";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            blue: 0,
            green: 0
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col-6">{this.state.blue}</div>
            </div>);
    }

};

export default Palette;
