import React, { useState, useEffect } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import {reactLocalStorage} from 'reactjs-localstorage';
import Course_Dashboard from "./course_dashboard.js";
function Add_Course() {

    const[c_name, setC_name] = useState("");
    const[c_image, setC_image] = useState("");
    const[c_description, setC_description] = useState("");

    function sendCourseData(e) {
        e.preventDefault();
        const addCourse ={
            c_name,
            c_image,
            c_description
        }
        axios.post("http://localhost:5000/Course/add", addCourse).then(() => {
            Swal.fire({  
                title: "Success!",
                text: "Course Added Successfully!",
                icon: 'success',
                confirmButtonText: "OK",
                confirmButtonColor: "#00B74A",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/course";
                    }
                    });
            }).catch((err)=>{
    
                Swal.fire({  
                title: "Error!",
                text: "Error! Try Again.",
                icon: 'error',
                confirmButtonText: "OK",
                confirmButtonColor: "#F93154",
                type: "success"})
        })
    }
    return(
        <div>
            <Course_Dashboard/>
            <div className="container-fluid">
                <div classNmae="container">
                    <form className="p-3 mt-2">
                        <div className="card mb-1" style={{maxWidth: "fixed"}}>
                            <div className="row g-0">
                                <div className="col-md-7 ">
                                    <div className="mt-0">
                                        <img src="https://www.vippng.com/png/detail/109-1091109_developer-cartoon-programmer.png" className="mt-0 img-fluid rounded-start" alt="update-image"/>
                                    </div>
                                </div>
                                <div className="col-md-5" >
                                    <div className="card-body">
                                        <div className="col-md-12">
                                        <h3 className="card-title ml-3 mb-2">New Course</h3>
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label text-left">Course: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-card-heading text-white"></i></span>
                                                    <input type="text" className="input-group form-control" id="c_name" name="c_name" 
                                                    onChange={(e) =>{
                                                        setC_name(e.target.value);
                                                    }} />
                                                </div> 
                                            </div>   
                                            <div className="col-md-8 mb-3">
                                                <label for="" className="form-label">Upload Image: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-file-image text-white"></i></span>
                                                    <input type="file" className="input-group form-control" name="c_image" id="c_image"
                                                    onChange={(e) =>{
                                                        setC_image(e.target.value);
                                                    }}/>
                                                </div> 
                                            </div>
                                            <div className="col-md-8 mb-5">
                                                <label for="" className="form-label text-left">Description: </label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-dark"><i className="bi bi-code text-white"></i></span>
                                                    <textarea className="input-group form-control" id="c_description" name="c_description" rows="5" cols="30"
                                                    onChange={(e) =>{
                                                        setC_description(e.target.value);
                                                    }}>
                                                    </textarea>
                                                </div> 
                                            </div>
                                            <div className="">
                                                    <button type="submit" name="submit" onClick={sendCourseData} className="btn btn-sm btn-outline-danger mb-3 mx-3">ADD COURSES</button>   
                                                    <input type="reset" value="RESET DATA" className="btn btn-sm btn-outline-dark  mb-3 mx-3"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Add_Course;