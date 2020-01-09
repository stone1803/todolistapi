import React, { Component } from "react";
import CourseItems from "../../Components/CourseItems";
import Axios from "axios";
import { connect } from "react-redux";

class HomeScreen extends Component {
  renderListAll = () => {
    let { listAllCourse } = this.props;
    return listAllCourse.map((item, index) => {
      return <CourseItems item={item} key={index}/>;
    });
  };

  componentDidMount() {
    // chay sau render va chay 1 lan dau tien
    // axios dung tra ve promise es6 - bat dong bo
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09"
    })
      .then(res => {
        // lay du lieu gui len store
        this.props.dispatch({
          type: "SHOW_ALL",
          payload: res.data
        });
      })
      .catch(err => {});
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">DANH SACH KHOA HOC</h1>
        <div className="row">{this.renderListAll()}</div>
      </div>
    );
  }
}

let mapStateToProps = state => ({listAllCourse: state.courses.courses});

export default connect(mapStateToProps, null)(HomeScreen);
