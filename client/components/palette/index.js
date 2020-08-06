
import axios from "axios";
import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";
import "./index.scss";

class Palette extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            palette: []
        }


    };


    async componentDidMount() {
        await axios.get(`${SERVER_URL}/colors`).then(res => {
            if (res.status === 200) {

                const palette = res.data.map(color =>
                    (
                        {
                            red: color.red,
                            blue: color.blue,
                            green: color.green
                        }

                    ));
                this.setState({ ...this.state, palette: palette })
            }
            else {
                throw new Error("Error connecting to server");
            }
        });

    }

    componentDidUpdate(prevProps) {

        if (!this.props.addColor)
            return;
        else if (!prevProps.addColor) {
            const colors = [this.props.addColor];
            this.setState({ ...this.state, colors: colors });
            return;
        }

        if (prevProps.addColor.red !== this.props.addColor.red ||
            prevProps.addColor.blue !== this.props.addColor.blue ||
            prevProps.addColor.green !== this.props.addColor.green) {
            let colors = this.state.colors;
            if (colors.length > 4)
                colors = colors.slice(1, 5);

            colors.push(this.props.addColor);
            this.setState({ ...this.state, colors });
        }
    }



    render() {
        const userPalette = this.state.colors.map((color, index) => (
            <div key={index} className="col-palette">
                <div className="color" style={{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }}>
                </div>
            </div>

        ));
        const givenPalette =
            this.state.palette.map((color, index) => (
                <div key={index} className="col-palette">
                    <div className="color" style={{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }}>
                    </div>
                </div>

            ));

        return (
            <div className="palettes">
                <div className="row">
                    {userPalette}

                </div>
                {/* <button onClick={this.addColor}>Add Palette</button> */}

                <h2> Saved palettes</h2>
                <div className="row">
                    {givenPalette}
                </div>
            </div>

        );
    }

};

export default Palette;
