
import React from 'react'
import "./../css/main.css";
import "./../css/util.css";
import Image_bg from "./../images/bg-01.jpg";
import Name from "./../images/Name.PNG";
import Logo from "./../images/logo.png";
function index() {
    return (
        <body>
            <nav id="navbar_top1" class="navbar navbar-expand-lg navbar-light bg-success p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={Logo} alt="logo" style={{width: '150px'}} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <img src={Name} alt="eSheat" />
                        </ul>
                        <ul class="navbar-nav ms-auto d-none d-lg-inline-flex">
                            <li class="nav-item mx-2">
                                <a class="nav-link text-dark h5" href="" target="blank"><i
                                    class="fab fa-gole-plus-square"></i></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-twi"></i></a>
                            </li>
                            <li class="nav-item mx-2">
                                <a class="nav-link text-dark h5" href="" target="blank"><i class="fab fa-facebo-square"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div class="limiter">
                <div class="container-login100">
                    <div class="login100-more" style={{backgroundImage: `url(${Image_bg})`}}></div>
                    <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-59">
                                Sign Up
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Name is required">
                                <span className="label-input100">Full Name</span>
                                <input className="input100" type="text" name="name" placeholder="Name..." />
                                <span className="focus-input100" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="text" name="email" placeholder="Email addess..." />
                                <span className="focus-input100" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                                <span className="label-input100">Username</span>
                                <input className="input100" type="text" name="username" placeholder="Username..." />
                                <span className="focus-input100" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="text" name="pass" placeholder="*************" />
                                <span className="focus-input100" />
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                                <span className="label-input100">Repeat Password</span>
                                <input className="input100" type="text" name="repeat-pass" placeholder="*************" />
                                <span className="focus-input100" />
                            </div>
                            <div className="flex-m w-full p-b-33">
                                <div className="contact100-form-checkbox">
                                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                                    <label className="label-checkbox100" htmlFor="ckb1">
                                        <span className="txt1">
                                            I agree to the
                                            <a href="" className="txt2 hov1">
                                                Terms of User
                                            </a>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn" />
                                    <button className="login100-form-btn">
                                        Sign Up
                                    </button>
                                </div>
                                <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                                    Sign in
                                    <i className="fa fa-long-arrow-right m-l-5" />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default index


