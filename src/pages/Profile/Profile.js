import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import './profile.css'

function Profile() {
  return (
    <>
      <div className="container">
        <Card className="card-profile shadow col-log-6 mx-auto mt-5">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center">
                  <img src="" alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Maha</h3>
              <h4>
                <i class="fa-solid fa-envelope email"></i>&nbsp;:-{" "}
                <span>maha@gmail.com</span>{" "}
              </h4>
              <h5>
                <i class="fa-solid fa-mobile"></i>&nbsp;:- <span>.mobile</span>{" "}
              </h5>
              <h4>
                <i class="fa-solid fa-person"></i>&nbsp;:- <span>.gender</span>{" "}
              </h4>
              <h4>
                <i class="fa-solid fa-location-pin location"></i>&nbsp;:-{" "}
                <span>location</span>{" "}
              </h4>

              <h4>
                Status &nbsp; :- <span>Active</span>
              </h4>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i>Date Created &nbsp; :-{" "}
                <span>9/10/23</span>
              </h5>
              <h5>
                <i class="fa-solid fa-calendar-days calendar"></i>Date Updated &nbsp; :-{" "}
                <span>30/10/23</span>
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Profile;
