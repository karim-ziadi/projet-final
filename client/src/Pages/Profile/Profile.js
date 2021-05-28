import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="profile">
      <div className="row">
        <div className="col-lg-7 mx-auto text-white text-center pt-5"></div>
      </div>
      {/* End */}
      <div className="row">
        <div className="col-xl-8 col-md-6 col-sm-10 mx-auto">
          {/* Profile widget */}
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 bg-blue">
              <div className="media align-items-end profile-header">
                <div className="profile mr-3">
                  <img
                    src="https://via.placeholder.com/130"
                    alt="..."
                    width={130}
                    className="rounded mb-2 img-thumbnail"
                  />
                  <a href="./EditProfile" className="btn btn-dark btn-sm btn-block">
                    Edit profile
                  </a>
                </div>
                <div className="media-body mb-5 text-white">
                  <h3 className="mt-0 mb-0">Welcome! {user && user.name}</h3>
                  <h4 className="small mb-4">
                    {" "}
                    <i className="fa fa-map-marker mr-2" />
                    {user && user.email}
                  </h4>{" "}
                  <h4 className="small mb-4">
                    {" "}
                    <i class="fas fa-phone"></i>
                    {user && user.phone}
                  </h4>
                </div>
              </div>
            </div>
           
            <div className="py-4 px-4">
              <div className="row">
                <div className="col-lg-3">
                <a href="#" className="btn btn-dark btn-sm btn-block">
                    ADD LOST ITEM
                  </a>
                </div>
                <div className="col-lg-3">
                <a href="#" className="btn btn-dark btn-sm btn-block">
                    ADD FOUND ITEM
                  </a>
                </div>
              </div>
                <div className="lost-item">
                    <div className="col-lg-12 items">
                        <div className="col-lg-6">
                            <h5 className="mb-3">LOST ITEMS</h5>
                            <div className="tn-news">
              <div className="tn-img"><img src="https://via.placeholder.com/150" alt="website template image"
              width={120}/></div>
              <div className="tn-title">Test</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="mb-3">FOUND ITEMS</h5>
                            <div className="tn-news">
              <div className="tn-img"><img src="https://via.placeholder.com/150" alt="website template image"
              width={120}/></div>
              <div className="tn-title">Test</div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
          </div>
          {/* End profile widget */}
        </div>
      </div>
    </div>
  );
};

export default Profile;