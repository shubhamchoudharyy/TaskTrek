import React, { useState } from 'react'
import './profile.css'
import Header from "./Header.js";
import Sidebar from './Sidebar.js';


const Profile = () => {

  const initialFormData = {
    id: '',
    name: '',
    email: '',
    phoneNumber: '',
    instituteName: '',
    course: '',
    branch: '',
    graduationYear: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setIsEditable(false);
  };
  return (
    <>
      <Header />
      <div>
        <div id='outer'>
          <div id='left'>
            <div id='picture'>
              <img src='https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg' style={{ width: '100%', height: '100%', objectFit: 'contain' }}  />
            </div>

            <div id='name'>
              <h1>Name</h1>
              <p id='designation'>designation</p>
            </div>

          </div>

          <div id='center'>
            <form onSubmit={handleSubmit} style={{width:"100%"}}>
              <label>
                Unique ID:
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Institute Name:
                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Course:
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Branch:
                <input
                  type="text"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />

              <label>
                Graduation Year:
                <input
                  type="text"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  disabled={!isEditable}
                />
              </label>
              <br />
              <br />
              {isEditable ? (
                <button type="submit">Save</button>
              ) : (
                <button type="button" onClick={handleEditClick}>
                  Edit
                </button>
              )}

              {isEditable && (
                <button type="button" onClick={resetForm}>
                  Cancel
                </button>
              )}
            </form>

          </div>
          <div id='right'>

            <div id='projects'>

              <div id='right-head'>
                <h4>Active Projects</h4>
                <h4>5</h4>
              </div>
              <div >
                <h5>2 Upcoming Milestones</h5>
              </div>

              <br />
              <div id='right-head'>
                <h4>Total Team Members</h4>
                <h4>5</h4>
              </div>
              <div>
                <h5>12 team members</h5>
              </div>

              <br />
              <div id='right-head'>
                <h4>Total Events</h4>
                <h4>5</h4>
              </div>
              <div>
                <h5>2 events participated</h5>
              </div>

              <br />
              <h3>Upcoming Milestones</h3>


              <h4>Thu, Dec 20</h4>
              <h5>Project 1 milestone 3 is due</h5>
            </div>


            {/* <Sidebar/> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default Profile