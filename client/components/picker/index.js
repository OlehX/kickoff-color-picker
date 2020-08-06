//import Palette from "../components/palette";
import "./index.scss";

class Picker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            blue: 0,
            green: 0,
        }

        this.changeRed = this.changeRed.bind(this);
        this.changeBlue = this.changeBlue.bind(this);
        this.changeGreen = this.changeGreen.bind(this);
        this.addColor = this.addColor.bind(this);
    }

    changeRed(event) {
        if (event.target.value > 255) event.target.value = 255;
        this.setState({ red: event.target.value });
    }
    changeGreen(event) {
        if (event.target.value > 255) event.target.value = 255;

        this.setState({ green: event.target.value });
    }
    changeBlue(event) {
        if (event.target.value > 255) event.target.value = 255;

        this.setState({ blue: event.target.value });
    }
    addColor() {
        event.preventDefault();
    }

    render() {
        return (
            <div className="picker">
                <div className="row">
                    <div className="picker__color col-6 col-xs-12">
                        <form onSubmit={this.addColor}>
                            <div className="row">
                                <div className="col-4">
                                    <label>
                                        Red: <input type="number" value={this.state.red} min="0" max="255" onChange={this.changeRed} />
                                    </label>
                                </div>
                                <div className="col-4">
                                    <label>
                                        Green: <input type="number" value={this.state.green} min="0" max="255" onChange={this.changeGreen} />
                                    </label>
                                </div>
                                <div className="col-4">
                                    <label>
                                        Blue: <input type="number" value={this.state.blue} min="0" max="255" onChange={this.changeBlue} />
                                    </label>
                                </div>
                            </div>
                            <div className="picker__circle-bg" style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>  <input type="submit" value="Add ->" /></div>

                        </form>
                    </div>
                    {/* <div className="col-6"><Palette /></div> */}
                </div>
            </div>
        );
    }

};

export default Picker;
