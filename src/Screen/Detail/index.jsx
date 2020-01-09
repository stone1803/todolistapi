import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111"
    })
      .then(res => {
        console.log(res.data);
        this.props.dispatch({
          type: "DETAIL_COURSE",
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    let { detail } = this.props;
    return (
      <div className="container">
        <h1 className="text-center ">
          CHI TIẾT KHÓA HỌC
          <div>
            <h1>{detail.tenKhoaHoc}</h1>
            <img src={detail.hinhAnh}></img>
          </div>
        </h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  detail: state.courses.detailCourse
});

export default connect(mapStateToProps, null)(Detail);
