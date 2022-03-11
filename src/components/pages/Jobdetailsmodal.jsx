import React from 'react';
import ReactDOM from 'react-dom';
import { SiAddthis } from "@react-icons/all-files/si/SiAddthis";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { AppBar } from '@material-ui/core';
import BasicTabs from './Employeetabs';
import job_validation from '../validation/job_validation';
import Jobform from './Jobform';
import 'react-tabs/style/react-tabs.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    boarder: '0',
    color: '#000'
  },
};




export default function Jobdetailsmodal({location, method}) {
  console.log(location);
  const CustomTab = ({ children }) => (
    <Tab >
      <div >{children}</div>
    </Tab>
  );
  CustomTab.tabsRole = 'Tab';
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    method();
   // window.location.reload();
  }

  const [value, setValue] = React.useState(0)
  const handlesTabs = (e, val) => {
    console.warn(val)
    setValue(val)
  }
  const { handleChange, values, handleSubmit, errors, post } = Jobform(job_validation);
 
  return (
    <div>

      <button type="button" class="btn  btn-maincolor btn-block" onClick={openModal} > <SiAddthis className="add-btn-icon" /> ADD</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="job-detils-modal"
        contentLabel="Example Modal" >
        <form onSubmit={handleSubmit} className='form' noValidate>
          <div className="popup-head-sty modal-button-bg">
            <div className="popup-head-content-sty">
              <h4 ref={(_subtitle) => (subtitle = _subtitle)} className="popup-head-h4">Job Settings</h4>
            </div>
            <div className="popup-head-icon-sty">
              <MdClose className="popup-close-btn" onClick={closeModal} />
            </div>
          </div>
          <div className="popup-content-bg">
            <div class="row">
              <div class="col-md-12">
                <div class="row popup-content-height">
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Job ID</label>
                      <input type="text" name="job_id" onChange={handleChange} value={values.job_id} class="form-control" ></input>
                      {errors.job_id && <p>{errors.job_id}</p>}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Post</label>
                      <select id="dropdown" name="job_post" onChange={handleChange} value={values.job_post} class="form-control">
                        <option value="">Select Post</option>
                        {post.map(({ post_name, id }, index) =>
                          <option value={id} >{post_name}</option>
                        )}
                      </select>
                      {errors.job_post && <p>{errors.job_post}</p>}
                    </div>
                    
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Skill Set</label>
                      <input type="text" name="job_skillset" onChange={handleChange} value={values.job_skillset} class="form-control" ></input>
                      {errors.job_skillset && <p>{errors.job_skillset}</p>}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Experience</label>
                      <input type="text" name="job_experience" onChange={handleChange} value={values.job_experience} class="form-control" ></input>
                      {errors.job_experience && <p>{errors.job_experience}</p>}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Openings</label>
                      <input type="email" name="job_openings" onChange={handleChange} value={values.job_openings} class="form-control" ></input>
                      {errors.job_openings && <p>{errors.job_openings}</p>}
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Status</label>
                      <select id="dropdown" name="job_status" onChange={handleChange} value={values.job_status} class="form-control">
                        <option value="">Choose status</option>

                        <option value="1">open</option>
                        <option value="0">close</option>
                      </select>
                      {errors.job_status && <p>{errors.job_status}</p>}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Date Open</label>
                      <input type="date" name="job_date_open" onChange={handleChange} value={values.job_date_open} class="form-control" ></input>
                      {errors.job_date_open && <p>{errors.job_date_open}</p>}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Date Close</label>
                      <input type="date" name="job_date_close" onChange={handleChange} value={values.job_date_close} class="form-control" ></input>
                      {errors.job_date_close && <p>{errors.job_date_close}</p>}
                    </div>
                  </div>
                  <div class="col-md-4 mob-full">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Location</label>
                      <select id="job_location" name="job_location" onChange={handleChange} value={values.job_location} class="form-control">
                        <option value="">Select Location</option>
                        {location.map(({ branch_name, id,branch_location }, index) =>
                          
                          <option value={id} >{branch_name}-{branch_location}</option>
                        )}

                      </select>
                      {errors.job_location && <p>{errors.job_location}</p>}
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Description</label>
                      <input type="email" name="job_description" onChange={handleChange} value={values.job_description} class="form-control" ></input>
                      {errors.job_description && <p>{errors.job_description}</p>}
                    </div>
                  </div>


                </div>
              </div>
            </div>

          </div>
          <div className=" modal-footer-button-bg">
            <button type="submit" class="btn  btn-save "  >Save</button>
            <button type="button" class="btn  btn-cancel " onClick={closeModal} > Cancel </button>
          </div>


        </form>
      </Modal>
    </div>
  );
}
