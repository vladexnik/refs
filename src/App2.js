import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import ReactDOM from 'react-dom';


class Form extends Component {

    state={
        advOpen: false
    }
  
    handleClick=()=>{
        this.setState(({advOpen})=>({
            advOpen: !advOpen
        }))
    }

    componentDidMount(){
        setTimeout(this.handleClick,3000)
    }


    render() {
        return (
            <Container>
                <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {
                        this.state.advOpen ? 
                            <Portal>
                                <Message/>
                            </Portal> : null
                    }
                    
                </form>
            </Container>
        )
    }
}

const Portal=(props)=>{
    const node=document.createElement('div');
    document.body.appendChild(node); 
    return ReactDOM.createPortal(props.children, node); // props.children отрендерит элементы, перед-ые внутрь Portal , props.children поместится в node
}

const Message=()=>{
    return(
        <div 
            style={{'width': '500px', 
                    'height': '150px', 
                    'backgroundColor': 'red', 
                    'position': 'absolute', 
                    'right': '20px', 
                    'bottom': '20px'}}>
                Hellaver
            </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
