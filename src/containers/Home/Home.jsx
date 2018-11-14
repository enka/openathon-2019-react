import React from 'react';
import { Fetch } from '../../services/api';
import { Info, Notification, Loader } from '../../components';

const FETCH_OPTIONS = {
    method: 'GET',
    headers: {}
};

class Home extends React.Component {
    render() {
        return (
            <div className="Home" location={this.props.location}>
                <div className="Home__info">
                    <Fetch path={'general'} options={FETCH_OPTIONS}>
                        {({ data, loading, error }) => {
                            if (error) {
                                return (
                                    <Notification type="error"
                                        message={error.message}
                                    />
                                );
                            }
                            if (loading) {
                                return <Loader />;
                            }
                            if (data) {
                                return (
                                    <Info title="About Accenture"
                                        data={data}
                                    />
                                );
                            }
                            return <Loader />;
                        }}
                    </Fetch>
                </div>
            </div>
        );
    }
}

export default Home;