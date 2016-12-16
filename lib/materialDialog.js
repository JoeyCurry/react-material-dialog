import React, { Component, PropTypes } from 'react';
import styles from './index.css';
import classnames from 'classnames';


class MaterialDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen:this.props.isOpen
        }
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    getClass(defaultStyle,propsStyle){
        let listStyle = [defaultStyle, propsStyle];
        return classnames(...listStyle);
    }

    _renderMain(){
        switch (this.props.type) {
            case "alert":
                return <div className={styles.mainContainer}>
                    <div className={this.getClass(styles.alertText,this.props.alertTextStyle)}>
                        {this.props.alertText ? this.props.alertText : "This is a alert,create by react"}
                    </div>
                </div>
                break;
            case "confirm":

                break;
            case "prompt":

                break;
            default:
                break;
        }
    }

    _renderButton(){
        switch (this.props.type) {
            case "alert":
                return <div
                        onClick={(e)=>{
                            e.stopPropagation();
                            this.toggle()
                        }}
                        className={styles.buttonContainer}>
                    <div className={this.getClass(styles.alertBtnText)}>
                        {this.props.alertBtnText ? this.props.alertBtnText : "ok"}
                    </div>
                </div>
                break;
            case "confirm":

                break;
            case "prompt":

                break;
            default:
                break;
        }
    }


    render(){
        return(
            <div
                style={{display:this.state.isOpen?"":"none"}}
                className={styles.container}>
                <div className={styles.content}>
                    {this._renderMain()}
                    {this._renderButton()}
                </div>
            </div>
        )
    }
}

MaterialDialog.propTypes = {
    type: PropTypes.string,
    alertText:PropTypes.string,
    alertTextStyle:PropTypes.string,
};

export default MaterialDialog
