
import axios from "axios";
import { useState, useEffect } from "react";
import { SERVER_URL } from "../../constants";
import "./index.scss";

class Palette extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            palettes: [],
            isLoading: false,
            isEdit: false,
            selectedColor: 0,
            numberPalettes: 0
        }
        //    this.editColor = this.editColor.bind(this);
    };


    async componentDidMount() {
        await this.getPalettes();
    }

    componentDidUpdate(prevProps) {

        if (!this.props.color)
            return;
        else if (!prevProps.color) {
            const colors = [this.props.color];
            this.setState({ ...this.state, colors: colors });
            return;
        }

        if (prevProps.color.red !== this.props.color.red ||
            prevProps.color.blue !== this.props.color.blue ||
            prevProps.color.green !== this.props.color.green) {

            let colors = this.state.colors;

            if (this.props.isEdit)
                colors[this.state.selectedColor - 1] = this.props.color;
            else {
                if (colors.length > 4)
                    colors = colors.slice(1, 5);

                colors.push(this.props.color);
            }

            this.setState({ ...this.state, colors, isEdit: false });
        }
    }

    async getPalettes() {
        this.setState({ ...this.state, isLoading: true })

        await axios.get(`${SERVER_URL}/colors`).then(res => {
            if (res.status === 200) {
                const numberPalettes = res.data.length / 5;
                let palettes = [];
                let palette = [];

                res.data.forEach((color, index) => {
                    palette.push({
                        red: color.red,
                        blue: color.blue,
                        green: color.green
                    })

                    if (index % 5 === 4) {

                        palettes.push(palette);
                        palette = [];
                    }

                });

                this.setState({ ...this.state, palettes: palettes, numberPalettes, isLoading: false })
            }
            else {
                throw new Error("Error connecting to server");
            }
        });
    }

    async addPalette() {
        const colors = this.state.colors;

        await axios.post(`${SERVER_URL}/`, { colors })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        this.getPalettes();
    }

    editColor(index) {
        const colorIndex = index + 1;
        const isEdit = this.state.selectedColor !== 0 && colorIndex !== this.state.selectedColor ? this.state.isEdit : !this.state.isEdit;
        const selectedColor = isEdit ? colorIndex : 0;
        this.setState({ ...this.state, isEdit, selectedColor });
        const colorData = { index, isEdit, color: this.state.colors[index] };
        this.props.onEditColor(colorData);
    }



    render() {
        const newPalette = this.state.colors.map((color, index) => (
            <div key={index} className={`col-palette${this.state.selectedColor === index + 1 ? ` selected` : ``}`}>
                <div className="color" onClick={() => this.editColor(index)} style={{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }}>
                </div>
            </div>

        ));

        const allPalettes =
            this.state.palettes.map((item, index) => (
                <React.Fragment key={index}>
                    <h2>Palette {index + 1}</h2>
                    <div className="row">
                        {item.map((color, index) => (
                            <div key={index} className="col-palette">
                                <div className="color" style={{ backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }}>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ));


        return (
            <div className="palettes">
                <h2> New palette</h2>
                <div className="row palettes__new">
                    {newPalette}

                </div>
                {<button onClick={() => this.addPalette()} disabled={newPalette.length === 5 ? false : true}>Add Palette</button>}

                <h2> Saved palettes</h2>

                <div>
                    {this.state.isLoading ? `Loading...` :
                        allPalettes}
                </div>

            </div>

        );
    }

};

export default Palette;
