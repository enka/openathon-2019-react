import React from 'react';
import { Form } from '../../components';
import './Guestbook.css';

class Guestbook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(newEntry) {}

    render() {
        return (
            <div className="Guestbook" location={this.props.location}>
                <header className="Guestbook__header">
                    <h1>Guestbook</h1>
                </header>
                <section className="Guestbook__content">
                    <Form className="Guestbook__form" title="Guestbook Form" />
                </section>
            </div>
        );
    }
}

export default Guestbook;
