import React from 'react';
import axios from 'axios';

const API_HOST = 'http://localhost:3001/';

class Fetch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: null,
            loading: false,
            error: null
        };
    }

    fetchData = async() => {
        this.setState({ loading: true });
        try {
            const response = await axios.get(`${API_HOST}${this.props.path}`, this.props.options);
            this.setState({ data: response.data, loading: false});
        } catch (error) {
            this.setState({ error, loading: false});
        }
    }
    
    componentDidMount() {
        this.fetchData();
    }

    render() {
        return this.props.children(this.state);
    }
}

export default Fetch;