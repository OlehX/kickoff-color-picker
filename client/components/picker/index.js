import Palette from "../palette";
import "./index.scss";

class Picker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            red: 0,
            blue: 0,
            green: 0,
            color: null,
            colorIndex: 0,
            isEdit: false
        }

        this.changeRed = this.changeRed.bind(this);
        this.changeBlue = this.changeBlue.bind(this);
        this.changeGreen = this.changeGreen.bind(this);
    }

    changeRed(event) {
        if (event.target.value > 255) event.target.value = 255;
        this.setState({ ...this.state, red: event.target.value });
    }
    changeGreen(event) {
        if (event.target.value > 255) event.target.value = 255;

        this.setState({ ...this.state, green: event.target.value });
    }
    changeBlue(event) {
        if (event.target.value > 255) event.target.value = 255;

        this.setState({ ...this.state, blue: event.target.value });
    }

    addColor() {
        const color = {
            red: this.state.red,
            green: this.state.green,
            blue: this.state.blue
        };
        this.setState({ ...this.state, color });

    };


    editColor(colorData) {
        this.setState({
            ...this.state,
            colorIndex: colorData.index,
            isEdit: colorData.isEdit,
            red: colorData.color.red,
            green: colorData.color.green,
            blue: colorData.color.blue
        });
    };


    render() {
        return (
            <div className="picker">
                <div className="row">
                    <div className="picker__color col-6 col-xs-12">
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
                        <div className="picker__circle-bg" style={{ backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>
                            <button onClick={() => this.addColor()}>  {!this.state.isEdit ? "Add" : "Edit"} Color -&gt;</button>
                        </div>

                    </div>
                    <div className="col-6">
                        <Palette
                            color={this.state.color}
                            isEdit={this.state.isEdit}
                            colorIndex={this.state.colorIndex}
                            onEditColor={(colorData) => this.editColor(colorData)}
                        />
                    </div>
                </div>
            </div>
        );
    }

};

export default Picker;
