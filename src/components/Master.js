import React, { Component } from 'react'

const Master = () => {
  return (
    <div>
      <div className="forModal" />
      <div className="container body">
        <div className="main_container" id="sticky">
          <div id="userModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
              </div>
            </div>
          </div>
          <div className="right_col" role="main">
            <div className="col-md-12">
              <div className="title_new_at">
                <span className="lable-user-name">
                  Master Listing
                  </span>
                <select className="user-select" style={{ color: 'black' }} onchange="perPage(this.value)">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="userList" />
                <form className="usersech user-mobile" id="formSubmit" method="post"><input type="hidden" name="compute" defaultValue="fe6602731bf3d65605f0d8f6552a1c9f" />
                  <input type="hidden" name="getUserType" id="getUserType" defaultValue={3} />
                  <input type="hidden" name="parentID" id="parentID" defaultValue />
                  <input type="hidden" name="formSubmit" defaultValue={1} />
                  <input type="hidden" name="perpage" id="perpage" />
                  <input type="text" name="mstruserid" id="mstruserid" placeholder="Search here" />
                  <button className="fa fa-search" id="submit_form_button" data-attr="submit" />
                </form>
                <select className="user-mobile custom-user-select" id="useraction" style={{ color: 'black' }}>
                  <option value>Select Action</option>
                  <option value="lgnusrlckbtng-0">Lock Betting</option>
                  <option value="lgnusrlckbtng-1">Open Betting</option>
                  <option value="mstrlock-0">Lock User</option>
                  <option value="mstrlock-1">Unlock User</option>
                  <option value="lgnusrCloseAc-0">Close User Account</option>
                </select>
                <button className="btn btn-warning btn-xs" onclick="setAction()" style={{ padding: '4px 5px' }}>
                  ACTION
                  </button>
                <button className="btn btn-warning btn-xs" onclick="addUser(145315,3)" style={{ padding: '4px 5px' }}>
                  ADD USER
                  </button>
              </div>
            </div>
            <div className="clearfix" />
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div id="divLoading" />
                <div className="custom-scroll appendAjaxTbl">
                  <table className="table table-striped jambo_table bulk_action" id="datatabless">
                    <thead>
                      <tr className="headings">
                        <th>S.No.</th>
                        <th>User ID <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                          <a href="#" className="glyphicon glyphicon-arrow-down" />
                        </th>
                        <th>Website</th>
                        <th>Credit Limit</th><th>Credit given</th>                           <th>Balance <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                          <a href="#" className="glyphicon glyphicon-arrow-down" />
                        </th>
                        <th>Partnership <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                          <a href="#" className="glyphicon glyphicon-arrow-down" />
                        </th>
                        <th>Partnership Cacino <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                          <a href="#" className="glyphicon glyphicon-arrow-down" />
                        </th>
                        <th>Partnership TeenPatti<a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                          <a href="#" className="glyphicon glyphicon-arrow-down" />
                        </th>
                        <th>M.comm</th> <th>S.comm</th>                                                                                 <th>
                          View More
                          </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="user_row_152052">
                        <td>1                              <input type="checkbox" defaultValue={152052} className="select-users" />
                        </td>
                        <td className=" " style={{ paddingBottom: '0px' }}>
                          <span className="m-bg">
                            <a href="#" title="View Child">        pa12345(parik)</a>
                          </span>
                        </td>
                        <td>park9.bet</td>
                        <td>100000.00</td><td>20000.00</td><td className=" ">80000</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0.00</td><td className=" ">0.00</td>
                        <td className="last">
                          <span className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-xs btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span className="caret" /></a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className href="javascript:;" onclick="addUser(152052,4)"><span>Add User</span></a>
                              </li>
                              <li> <a className href=" #">
                                <span>Statement</span> </a></li>
                              <li><a className href=" #">
                                <span>Profit Loss</span> </a></li>
                              <li>
                                <a className href="javascript:;" title="View Account Info" onclick="view_account('152052');"><span>View Info</span></a>
                              </li>
                              <li> <a className href="javascript:;" title="Change Password" onclick="view_change_passs('152052');"><span>Change Password</span></a></li>
                              <li> <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('152052','D');"><span>Free Chip Deposit</span></a></li>
                              <li>
                                <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('152052','W');"><span>Free Chip Withdrawal</span></a>
                              </li>
                            </ul>
                          </span>
                        </td>
                      </tr>
                      <tr id="user_row_145440">
                        <td>2                              <input type="checkbox" defaultValue={145440} className="select-users" />
                        </td>
                        <td className=" " style={{ paddingBottom: '0px' }}>
                          <span className="m-bg">
                            <a href="#" title="View Child">        Sameer11(sameer)</a>
                          </span>
                        </td>
                        <td>park9.bet</td>
                        <td>0.00</td><td>0.00</td><td className=" ">0</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0.00</td><td className=" ">0.00</td>
                        <td className="last">
                          <span className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-xs btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span className="caret" /></a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className href="javascript:;" onclick="addUser(145440,4)"><span>Add User</span></a>
                              </li>
                              <li> <a className href=" #">
                                <span>Statement</span> </a></li>
                              <li><a className href=" #">
                                <span>Profit Loss</span> </a></li>
                              <li>
                                <a className href="javascript:;" title="View Account Info" onclick="view_account('145440');"><span>View Info</span></a>
                              </li>
                              <li> <a className href="javascript:;" title="Change Password" onclick="view_change_passs('145440');"><span>Change Password</span></a></li>
                              <li> <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145440','D');"><span>Free Chip Deposit</span></a></li>
                              <li>
                                <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145440','W');"><span>Free Chip Withdrawal</span></a>
                              </li>
                            </ul>
                          </span>
                        </td>
                      </tr>
                      <tr id="user_row_145330">
                        <td>3                              <input type="checkbox" defaultValue={145330} className="select-users" />
                        </td>
                        <td className=" " style={{ paddingBottom: '0px' }}>
                          <span className="m-bg">
                            <a href="#" title="View Child">        Raghu22(raghu)</a>
                          </span>
                        </td>
                        <td>park9.bet</td>
                        <td>5000.00</td><td>0.00</td><td className=" ">5000</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0%</td><td className=" ">0.00</td><td className=" ">0.00</td>
                        <td className="last">
                          <span className="dropdown">
                            <a href="#" className="dropdown-toggle btn btn-xs btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span className="caret" /></a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className href="javascript:;" onclick="addUser(145330,4)"><span>Add User</span></a>
                              </li>
                              <li> <a className href=" #">
                                <span>Statement</span> </a></li>
                              <li><a className href=" #">
                                <span>Profit Loss</span> </a></li>
                              <li>
                                <a className href="javascript:;" title="View Account Info" onclick="view_account('145330');"><span>View Info</span></a>
                              </li>
                              <li> <a className href="javascript:;" title="Change Password" onclick="view_change_passs('145330');"><span>Change Password</span></a></li>
                              <li> <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145330','D');"><span>Free Chip Deposit</span></a></li>
                              <li>
                                <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145330','W');"><span>Free Chip Withdrawal</span></a>
                              </li>
                            </ul>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr><td colSpan={5} /><td colSpan={9}>Total Balance: 85000</td></tr>
                    </tfoot>
                  </table>
                  <p className="pull-left">Showing 1 to 3 of 3 entries </p>
                  <p id="paginateClick" className="pull-right pagination-row dataTables_paginate paging_simple_numbers" />
                </div>
              </div>
            </div>
          </div>
          {/*commanpopup*/}
          <div id="commonpopup" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="popup_form">
                  <div className="title_popup">
                    <span>Title Popup</span>
                    <button type="button" className="close" data-dismiss="modal">
                      <div className="close_new"><i className="fa fa-times-circle" /></div>
                    </button>
                  </div>
                  <div className="content_popup">
                    <div className="popup_form_row">
                      <div className="modal-body" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*commanpopup*/}       </div>
      </div>
    </div>

  )
}

export default Master;