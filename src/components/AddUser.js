import React from 'react'
//import "src/AddUser.css";

export default function AddUser() {
  return (
  <div className='container  margin-top-30'>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add User</title>

    {/* <!-- Latest compiled and minified CSS --> */}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

{/* <!-- Latest compiled and minified JavaScript --> */}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</head>
<body className='body'>
<div className="container">
      <form id="addUserForm">
        <div className="card-body">
          <div className="card mb-4">
            <div className="col-md-12 userMain">
              <div className="row userInnerRow">
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="UserID1">User ID</label>{" "}
                    <input
                      type="number"
                      name="UserID1"
                      className="form-control"
                      maxlength="13"
                      id="UserID1"
                      placeholder="Enter User ID"
                    
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">Name</label>{" "}
                    <input
                      type="text"
                      name="UserName"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Enter Name"
              
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputFather1">Father Name</label>{" "}
                    <input
                      type="text"
                      name="FatherName"
                      className="form-control"
                      id="exampleInputFather1"
                      placeholder="Enter Father Name"
                
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>{" "}
                    <input
                      type="email"
                      name="UserEmail"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
               
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <input
                      type="password"
                      name="UserPassword"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter password"
                      
                    />
                  </div>
                </div>
                <div className="col-md-3" >
                  <div className="form-group">
                    <label htmlFor="exampleInputRoll1">Role</label>
                    <select
           
                      name="UserRoll"
                      id="exampleInputRoll1"
                   
                    >
                      <option >Select Roll</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3" >
                  <div className="form-group">
                    <label htmlFor="exampleInputLineManager1">
                      Line Manager
                    </label>
                    <select
                      name="UserLineManager"
                      id="exampleInputLineManager1"
                   
                    >
                      <option >Select</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3" >
                  <div className="form-group">
                    <label htmlFor="exampleInputDesignation1">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="UserDesignation"
                      className="form-control"
                      id="exampleInputDesignation1"
                      placeholder="Designation"
                    />
                  </div>
                </div>

                <div className="col-md-3" >
                  <div className="form-group">
                    <label htmlFor="exampleInputSite1">Site Code</label>
                    <select
                      name="UserSiteName"
                      id="exampleInputSite1"
                   
                    >
                      <option value="-1">Select Site</option>

                      <option ></option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3" >
                  <div className="form-group">
                    <label htmlFor="exampleInputPhone1">Cell Phone</label>{" "}
                    <input
                      type="number"
                      name="UserPhone"
                      className="form-control"
                      id="exampleInputPhone1"
                      placeholder="Cell Phone"
                      
                    />
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <button
                  type="button"
                  className="btn "

                >
                  Save
                </button>
                &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn  "
                  data-toggle="modal"
                  data-target="#myModalSerach"
                >
                  Search
                </button>
                <div id="myModalSerach" className="modal fade" role="dialog">
                  <div
                    className="modal-dialog modal-dialog-scrollable"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="input-group">
                          <table>
                            <tr>
                              <th>User ID</th>
                              <th>User Name</th>
                              <th></th>
                            </tr>

                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>

                        <input
                          type="hidden"
                          name="isEdit"
                          id="isEdit"
                          
                        />
                        <input
                          type="hidden"
                          name="UserID"
                          id="UserId"
                          
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
</body>
</html>
</div>

  )
}

