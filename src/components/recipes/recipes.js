import React, {Component} from 'react';
import Recipe from './recipe';
import {Button, Well} from 'react-bootstrap';
import axios from 'axios';

"use strict";
const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";
class Recipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            cook: '',
            title: '',
            ingredients: [],
            instructions: '',
            likes: '',
            selected: ''
        }
        this.getRecipesByUsername = this.getRecipesByUsername.bind(this);

        this.selectSearch = this.selectSearch.bind(this);
    }

    selectSearch() {
        this.setState({selected: 'srch'},
        () => {
            this.props.selected(this.state.selected);
        });
    }

    getRecipesByUsername() {
        console.log(this.props.username);
        console.log(this.props.password);
        console.log("hace el get");
        axios.post(ROOT_URL + "/recipes/getRecipesByUser", {
            nickName: this.props.username,
            password: this.props.password
        }).then(response => {
          console.log("la response es: "+response);
          console.log(response.data.carpetas[0].recetasDelFolder);
            this.setState({recipes: response.data.carpetas[0].recetasDelFolder})
        })
    }

    render() {
        return (

            <div>
              <div className="row"><Well></Well></div><br/>
              <h3>Adjunte la factura para revisar</h3>
              <input className="subir" id="input-2" name="input2[]" type="file" class="file" multiple data-show-upload="false" data-show-caption="true"/>
              <Button className="boton" bsStyle="primary" bsStyle="large" onClick={this.selectSearch.bind(this)}>Continuar </Button>
            </div>

        );
    }
}

export default Recipes;
