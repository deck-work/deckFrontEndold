import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const SidebarLayout = (props) => {
  const size = {
    width: "261px", // Set the fixed width
    height: "90vh", // Set the fixed height to the full viewport height
    backgroundColor: "#121212", // Set the background color to black
    color: "white", // Set the text color to white
  };

  //   const { userDetail } = useSelector((state) => ({ userDetail: state?.userData?.loginUser }))

  //   const userType = JSON.parse(localStorage.getItem("loginUser")).type

  return (
    <>
      <Header />
      {/* <SidebarNav/>
  {props.children} */}

      {/* <div className={` ${(userType == 'teacher') ? 'schedule schedule_teacher py-3' : "schedule  py-3"} `}>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="schedule_date text-center">
              <i class="icofont-ui-calendar me-2"></i><span>Your next class schedule at 11:30am</span>
            </div>
          </div>
        </div>
      </div>
    </div> */}

      <section class="main_center_content" style={size}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="d-flex align-items-start">
                <div class="nav flex-column nav-pills me-3 left-sec">
                  <div class="student_profile d-flex justify-content-center">
                    {/* <div class="position-relative"> */}
                    {/* <img src={userDetail?.Profile_Image} class="img-fluid" alt="" /> */}
                    {/* <Link to="/"><i class="icofont-home-alt-2 position-absolute top-0 end-0"></i></Link> */}

                    {/* <h2 class="stud_name text-center mt-3 mb-0">{userDetail?.User_Name || userDetail?.First_Name}</h2>
                    <span class="stud_id d-block text-center">{userDetail?.student_id || userDetail?.teacher_id}</span> */}
                    {/* </div> */}
                  </div>

                  <ul class="nav nav-tabs flex-column border-bottom-0">
                    {/* <li class="nav-item">
                    <Link class="nav-link" to="/chapter">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span> Math (Year
                      1)
                    </Link>
                  </li> */}
                    {/* {(userType == 'teacher') ? <li class="nav-item">
                    <a class="nav-link mb-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span>Active Classes<i class="icofont-simple-down ms-3"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                      <ul class="collapse_links">
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Science (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Math (Year2)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year3)</a></li>
                      </ul>
                    </div>
                  </li> : <li class="nav-item">
                    <a class="nav-link mb-0" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      <span class="d-inline-block me-3"><i class="icofont-architecture-alt i-cutom"></i></span> Math (Year
                      1)<i class="icofont-simple-down ms-3"></i>
                    </a>
                    <div class="collapse" id="collapseExample">
                      <ul class="collapse_links">
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Science (Year1)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>Math (Year2)</a></li>
                        <li><a href=""><i class="icofont-long-arrow-right me-2 fs-5"></i>English (Year3)</a></li>
                      </ul>
                    </div>
                  </li>}

 */}

                    <li class="nav-item">
                      <Link class="nav-link" to="/drag">
                        <span class="d-inline-block me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-easel"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
                          </svg>
                        </span>{" "}
                        decks
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/presenters">
                        <span class="d-inline-block me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-people"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                          </svg>
                        </span>{" "}
                        Presenters
                      </Link>
                    </li>
                    <li class="nav-item" style={{ marginTop: "18rem" }}>
                      <a class="nav-link" href="">
                        <span class="d-inline-block me-2">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-sliders"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                            />
                          </svg>
                        </span>{" "}
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SidebarLayout;
