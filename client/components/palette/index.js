import "./index.scss";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }

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

        return (
            <div className="row">
                {userPalette}
            </div>
        );
    }

};

export default Palette;
