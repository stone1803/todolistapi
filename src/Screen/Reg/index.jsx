import React, { Component } from "react";
import { Formik, Form, Field } from "formik";

export default class Registration extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-4">ĐĂNG KÝ THÀNH VIÊN </h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP09",
            email: ""
          }}
          onSubmit={()=>{

          }}
          render={() => (
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tài khoản </label>
                <input type="text" className="form-control" 
                name="taiKhoan"
                
                
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Họ Tên</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">SĐT</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" />
              </div>

              <button type="submit" className="btn btn-primary">
                Đăng Ký
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}
