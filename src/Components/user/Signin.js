import { React } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

function Signin() {
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
              {/* </div> */}
              {/* <div className="text-center">*/}
              <MDBBtn></MDBBtn>
              {/* <MDBBtn color="primary"></MDBBtn> */}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Signin;
