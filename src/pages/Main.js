import React from 'react';
import {Link} from 'react-router-dom';

function Main(){

    return(


    <React.Fragment>

        <h3>Hi, Please select your language</h3>
        <h3>Hola, Por favor seleccione un idioma</h3>
        <div id='buttons'>
        <Link to="./English" class="waves-effect waves-light btn">English</Link>
        <Link to="./Spanish" class="waves-effect waves-light btn">Español</Link>
        </div> 


    </React.Fragment>    

    )

}

export default Main;