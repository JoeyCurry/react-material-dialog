import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import MaterialDialog from '../lib/materialDialog.js'
import '../lib/index.css'

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div onClick={()=>{
                        this.refs['dialog'].toggle()
                    }}>open</div>
                    <MaterialDialog
                        ref='dialog'
                        type="alert" />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('body'));
