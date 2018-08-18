import React, { Component } from 'react';
import queryString from 'query-string';
import Aux from '../../hoc/Aux'


class Course extends Component {
    state = {
        finalVal:null,
       test:false,
       id:null
    }
    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
       // const finalVal = values.title;
        this.setState({
            finalVal:values.title,
           // test:true
        
        
        })

    }
    componentWillMount() {
       // const values = queryString.parse(this.props.location.search)
       // const finalVal = values.title;
        this.setState({
            //finalVal:values.title,
            test:true,
            id: this.props.match.params.id
        
        
        }) 
    } 
    
    
   
    render () {
        //console.log(finVal);
        let finVal=null;
        if(!this.state.id)
        finVal = <div>Select the course</div>;

        if(this.state.id)
        finVal = <div>Loading...</div>;

        if(this.state.test && this.state.id){
            finVal = <div>
        <h1>{queryString.parse(this.props.location.search).title}</h1>
        <p>You selected the Course with ID:{this.props.match.params.id}</p>
       </div>; 
        }
        
       // const compCourse= this.state.finalVal? finVal : ;
        console.log(this.props);
        return (
           <Aux> {finVal}</Aux>
        );
    }
}

export default Course;