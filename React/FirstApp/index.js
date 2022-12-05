// ExampleButton component
class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isCLicked: false };
    }
    render() {
        if (this.state.isCLicked) {
            return 'You clicked this';
        }
        // lkglh
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isCLicked: true }) },
            'Click me!'
        );
    }
}

