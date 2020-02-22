import React from 'react'
import Cards from '../../components/Cards/Cards'
import axios from 'axios'

class Tasks extends React.Component {

    state = {
        tasksData:[]
    };

    componentDidMount(){
        //Se ejecuta justo despues de que la vista se ha renderizado
        console.log('[Task!] en DidMount')
        axios.get('http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks',
        { headers:{'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzg2MTIsImV4cCI6MTU4Mjk4MzQxMn0.h4fHHjjN1y9v-ErctZfzHUIXJ2UvuuxMNxHUAj8Z8AU'}}
        ).then(res => {

            this.setState({
                tasksData: res.data.results
            });

            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        });        
    }

    render(){
        //Operador ternario     condicion? ejecuta: NoEjecuta
        // Similar al tradicional   if(condicion){ejecuta}else{NoEjecuta}
        const cardsView = (this.state.tasksData.length ?
            <Cards data={this.state.tasksData}/>
            :null);

            //Esto estaba antes de cardsView, dentro del div <!--<Cards data={this.state.tasksData}/>-->
        return(
            <div>
                
                {cardsView}
            </div>
        );
    }
}

export default Tasks