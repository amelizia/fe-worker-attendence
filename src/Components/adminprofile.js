import React, { Component, useState, useEffect } from 'react';
import Cookies from "js-cookie";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      full_name: '',
      role_description: '',
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://ipe8-worker-attendance-be.herokuapp.com/api/dashboard",
      {
        method: "GET",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: Cookies.get("jwt"), 
        },
      }
    );
    
    const data = await res.json();
    this.setState({ 
        data,
        full_name: data.data.full_name,
        role_description: data.data.role_description,
    });
  }

render(){
    console.log('Render Method Called')
    const { full_name, role_description } = this.state;

    return (
        <div className="content">
            <div> 
              <h1 className="2xl:text-2xl md:text-xl text-lg font-bold"> Hello, {full_name} </h1>
              <h1 className="2xl:text-xl md:text-lg text-base font-semibold"> Role: {role_description}</h1>
            </div>
        </div>
      
    )
}

}

export default Admin;