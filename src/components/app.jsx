import React from 'react'
import { ContactForm } from './contact-form'
import { Message } from './message'
import { UserPanel } from './user-panel'


export class App extends React.Component{

    CONTACT_FORM_DEFAULTS = {
        name: 'paula',
        email: 'maria',
        option:'A',
        select: 1,
        terms: true,
        message:''
    }
    constructor(props){
        super(props)
        this.state = {
            contact: {...this.CONTACT_FORM_DEFAULTS},
            sent: false,
            currentUser: null
        }
    }

    contactChanged = (contact) => {
        this.setState({
            contact
        })
    }

    sendContact = (contact) => {
        // For now just mark it as `sent`
        this.setState({
            sent: true
        })
    }

    logIn = () => {
        const currentUser = {
            name:'Test User',
            email:'user@example.com'
        }

        this.setState({
            currentUser,
            contact: {
                ...this.state.contact,
                ...currentUser
            }
        })
    }


    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pull-right">
                        <button class="btn btn-default" onClick={this.logIn}>
                            <i className="glyphicon glyphicon-user"></i> Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {
                        this.state.currentUser ? <UserPanel user={this.state.currentUser} />
                        : null
                    }
                    <h2>Contact us</h2>
                    <p>Please fill in form on the right to get fast reply</p>
                    <img style={{width:'100%'}} src="http://via.placeholder.com/300x200"/>
                </div>
                
                <div className="col-md-8">
                    {
                        this.state.sent
                        ? <Message text='We will reply to your message in next 24h. Have a nice day! ;-)' header='Thank You' />
                        : <ContactForm data={this.state.contact} onChange={this.contactChanged} onSubmit={this.sendContact}/>

                    }
                </div>
            </div>
        </div>
    }
}
