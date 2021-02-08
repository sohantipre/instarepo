import React from "react";
import { Grid } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import "../index.css";
import Slideshow from "../components/slideshow";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Input } from "@material-ui/core";

const Signupscreen = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <div className='formcontainer'>
            <h1
              style={{
                marginLeft: "90px",
                height: "30px",
                fontStyle: "italic",
                fontSize: "40px",
              }}
            >
              PhotoGram
            </h1>
            <div className='form'>
              <form>
                <input
                  type='text'
                  style={{
                    width: "300px",
                    height: "30px",
                    border: "1px solid gray",
                    marginBottom: "20px",
                  }}
                  placeholder='name'
                  required
                ></input>
                <input
                  type='text'
                  style={{
                    width: "300px",
                    height: "30px",
                    border: "1px solid gray",
                  }}
                  placeholder='username,phone number or email'
                  required
                ></input>
                <input
                  type='text'
                  style={{
                    width: "300px",
                    height: "30px",
                    marginTop: "20px",
                    border: "1px solid gray",
                  }}
                  placeholder='password'
                  required
                ></input>
                <button
                  style={{
                    width: "300px",
                    marginTop: "20px",
                    backgroundColor: "lightblue",
                    border: "0px",
                    height: "30px",
                  }}
                  type='submit'
                >
                  Sign Up
                </button>
              </form>
              {/* <h1 style={{ fontSize: "20px", color: "gray" }}>
                -----------------OR----------------
              </h1> */}
              {/* <a
                href=''
                style={{
                  color: "black",
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FacebookIcon
                  style={{
                    color: "blue",
                    marginRight: "10px",
                    marginTop: "5px",
                  }}
                />
                Login with facebook
              </a> */}
            </div>
          </div>
          <div className='formcontainer'>
            <p style={{ marginLeft: "25px" }}>
              Already have an account?
              <a style={{ textDecoration: "none", color: "blue" }} href='/'>
                Log In
              </a>
            </p>
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <div className='mobile'>
            <Slideshow />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signupscreen;
