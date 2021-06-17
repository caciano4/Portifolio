import React,{useState,useEffect} from 'react'
import AreaCubics from "./StyledCubic";
import Modal from "../Modal/Modal";

export default class Cubics extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }
    }
    show(){
        this.setState({
            showModal: this.state.showModal = true
        })
        console.log('True')
    }
    notShow(){
        this.setState({
            showModal: this.state.showModal = false
        })
        console.log('False')
        window.location = '/sobre'
        this.useEffect(()=> {
                this.setState({
                    showModal:this.state.showModal = false
                })
        },[] )
    }

    

render() {
    return (
        <AreaCubics>
            <code onClick={()=> this.show()}>
                <img className="skills" src={this.props.img} alt="Skills"/>
                {this.state.showModal ?
                    (
                        <Modal onClose={()=> this.notShow()}>
                            <div>
                                <img src={this.props.img} alt="icons"/>
                                <h1>{this.props.title}</h1>
                                <p>{this.props.children}</p>
                                <a target="blank" href={this.props.link}>{this.props.title}</a>
                            </div>
                        </Modal>
                    ) : null}
            </code>

        </AreaCubics>
    );
}
}

// let [isModalVisible, setIsModalVisible] = useState(false)
// ({children, title, img,link}) =>