import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = this.name.value;
    let teacherTopic = this.topic.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="main-content home">
        <h2>Front End Course Directory</h2>
        <p>This fun directory is a project for the <em>React & React Router Basics</em>.</p>
        <p>Learn front end web development and much more! This simple directory app offers a preview of how React works.</p>
        <p>Integer sodales libero ac urna porttitor consectetur. Curabitur pellentesque quam elit, id fermentum lorem pretium sit amet. Nulla facilisi. Etiam nisl massa, dignissim in vulputate viverra, lacinia ut magna. Aliquam sit amet nunc et diam fringilla maximus non non urna. Nulla semper eu dui et viverra. Donec porttitor augue eget posuere vulputate. Integer tempus vitae lectus non interdum.</p>
        <hr />
        <h3>Featured Teachers</h3>
        <Link to={"teachers/HTML/Tommy"} > Tommy Wingo </Link>
        <Link to={"teachers/HTML/Tommy-Wingo"} > Tommy Wingo </Link>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" ref={(input) => this.name = input} />
          <input type="text" placeholder="Topic" ref={(input) => this.topic = input} />
          <button type="submit">Go!</button>
        </form>
      </div>
    );
  }
}

export default Home;