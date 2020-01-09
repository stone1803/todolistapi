import React, { Component } from "react";

export default class CourseItems extends Component {
  render() {
    return (
      <div className="card col-4 m-auto" >
        <img className="card-img-top" src={this.props.item.hinhAnh} alt="Card image cap"style={{width:"100%",height:"250px"}}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.item.tenKhoaHoc}</h5>
          <p className="card-text">
            {this.props.item.moTa}
          </p>
          <a href="#" className="btn btn-primary">
            Chi Tiết
          </a>
        </div>
      </div>
    );
  }
}
