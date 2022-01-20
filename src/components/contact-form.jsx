import React from 'react';
import { object,func } from 'prop-types';

export class ContactForm extends React.Component{

    static defaultProps = {
        data:{
            name: '',
            email: '',
            option: '',
            select: '',
            message: '',
            terms: false,
        }
    }

    static propTypes = {
        onChange: func.isRequired,
        onSubmit: func.isRequired,
        data: object.isRequired
    }

    constructor(props){
        super(props)
        this.fieldChange = this.fieldChange.bind(this)
    }

    /**
     * When form is submitted forward contact data to parent
     * @param {event} DOMEvent
     */
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.props.data)
    }

    fieldChange (event) {
        let target = event.target;
        let value = target.type ==='checkbox' ? target.checked : target.value;
        this.props.onChange({
            ...this.props.data,
            [event.target.name]: value,
            
        })
    }

    isSelected = (event) => {
        const id = event.target.value;
        this.props.onChange({
            ...this.props.data,
            select: id
        })
    }

    options = [
        {id:1, label:'I have question about my membership'},
        {id:2, label:'I have technical question'},
        {id:3, label:'I would like to change membership'},
        {id:4, label:'Other question'},
    ]

    render(){
        let data = this.props.data;

        return <form onSubmit={this.handleSubmit}>

        <h3>Contact Form</h3>

        <div class="form-group">
            <label className="form-label">Your Name:</label>
            <input onChange={this.fieldChange} name="name" value={data.name} className="form-control" />
        </div>

        <div class="form-group">
            <label className="form-label">Your Best Email:</label>
            <input onChange={this.fieldChange} name="email" value={data.email} className="form-control" />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div class="form-group row">
            <label className="form-label col-xs-4">
            <input onChange={this.fieldChange} type="radio" name="option" checked={data.option === 'A'} value="A"/> Option A</label>
            <label className="form-label col-xs-4">
            <input onChange={this.fieldChange} type="radio" name="option" checked={data.option === 'B'} value="B"/> Option B</label>
            <label className="form-label col-xs-4">
            <input onChange={this.fieldChange} type="radio" name="option" checked={data.option === 'C'} value="C"/> Option C</label>
        </div>

        <hr/>

        <div class="form-group">
            <label className="form-label">What can we help you with:</label>
            <select onChange={this.isSelected} className="form-control" name="select" value={data.select}>
                {this.options.map(option => (
                    <option value={option.id}>{option.label}</option>
                ))}
            </select>
        </div>

        <div class="form-group">
            <label className="form-label">Message:</label>
            <textarea onChange={this.fieldChange} name="message" rows="10" placeholder="Please type your question here" value={this.props.data.message} className="form-control"/>
        </div>

        <div class="form-group">
            <label className="form-label"> <input onChange={this.fieldChange} type="checkbox" name="terms" /> I agree to terms and conditions </label>

        </div>

            <input type="submit" value="Send" className="contactform-submit" />
        </form>
    }
}
