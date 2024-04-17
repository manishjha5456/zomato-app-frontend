import { useNavigate } from "react-router-dom";
import brandlogo from "../images/brandlogo.png";
import logo from "../images/logo.png";

function Header() {
  let navigate = useNavigate();

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle1"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel1"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel1">
                User Registation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <i
                  class="input-group-text fa fa-envelope pt-2"
                  id="basic-addon1"
                ></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <i
                  class="input-group-text fa fa-phone pt-2"
                  id="basic-addon1"
                ></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="MobileNumber"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <i
                  class="input-group-text fa fa-key pt-2"
                  id="basic-addon1"
                ></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <i
                  class="input-group-text fa fa-key pt-2"
                  id="basic-addon1"
                ></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Confirm Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label className="" for="floatingInput">
                  Address
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div>
                <span>Already have an Account</span>
                <button
                  className="btn btn-link"
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                >
                  Login
                </button>
              </div>
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel3">
                Login Page
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <div>
                <span>I am new Here</span>
                <button
                  className="btn btn-link"
                  data-bs-target="#exampleModalToggle1"
                  data-bs-toggle="modal"
                >
                  Registaion
                </button>
              </div>
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle1"
                data-bs-toggle="modal"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* <Header bgColor="bg-danger" />  */}
        <div className="row bg-danger justify-content-center">
          <div className="col-10 d-flex justify-content-between py-2">
            {/* <p role="button" className="m-0 brand" onClick={()=>navigate('/')}>m</p> */}
            <div>
              <img
                style={{ borderRadius: "50%" }}
                src={logo}
                width={"170px"}
                height={"40px"}
                alt="logoimg"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <button
                className="btn text-white me-2"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
              >
                Login
              </button>
              <button
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                href="#exampleModalToggle1"
              >
                Create a Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
