import React, { Component } from 'react'

const User = () => {
    return (
      <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style type="text/css" dangerouslySetInnerHTML={{__html: "\n  .toggle-star, .toggle-password{cursor: pointer;}\n" }} />
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
                    Users Listing
                  </span>
                  <select className="user-select" style={{color: 'black'}} onchange="perPage(this.value)">
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="userList" />
                  <form className="usersech user-mobile" id="formSubmit" method="post"><input type="hidden" name="compute" defaultValue="fe6602731bf3d65605f0d8f6552a1c9f" />
                    <input type="hidden" name="getUserType" id="getUserType" defaultValue={4} />
                    <input type="hidden" name="parentID" id="parentID" defaultValue />
                    <input type="hidden" name="formSubmit" defaultValue={1} />
                    <input type="hidden" name="perpage" id="perpage" />
                    <input type="text" name="mstruserid" id="mstruserid" placeholder="Search here" defaultValue />
                    <button className="fa fa-search" id="submit_form_button" data-attr="submit" />
                  </form>
                  <select className="user-mobile custom-user-select" id="useraction" style={{color: 'black'}}>
                    <option value>Select Action</option>
                    <option value="lgnusrlckbtng-0">Lock Betting</option>
                    <option value="lgnusrlckbtng-1">Open Betting</option>
                    <option value="mstrlock-0">Lock User</option>
                    <option value="mstrlock-1">Unlock User</option>
                    <option value="lgnusrCloseAc-0">Close User Account</option>
                  </select>
                  <button className="btn btn-warning btn-xs" onclick="setAction()" style={{padding: '4px 5px'}}>
                    ACTION
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
                          <th>Master</th>                           <th>Winnings
                            <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                            <a href="#" className="glyphicon glyphicon-arrow-down" />
                          </th>
                          <th>Credit Limits
                            <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                            <a href="#" className="glyphicon glyphicon-arrow-down" />
                          </th>
                          <th>Exposure
                            <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                            <a href="#" className="glyphicon glyphicon-arrow-down" />
                          </th>
                          <th>Balance</th>
                          <th>M.comm</th> <th>S.comm</th>                                                                                 <th>
                            View More
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="user_row_152262">
                          <td>1                              <input type="checkbox" defaultValue={152262} className="select-users" />
                          </td>
                          <td className=" " style={{paddingBottom: '0px'}}>
                            <span className="m-bg">
                              pari12345(pari12345)                            </span>
                          </td>
                          <td>park9.bet</td>
                          <td>parik</td>                           <td className=" ">0 </td>
                          <td className=" ">20000 </td>
                          <td className=" "><a className="btn btn-success btn-xs" href=" #"> 0.00</a>
                          </td>
                          <td className=" ">20000 </td>
                          <td className=" ">0.00</td><td className=" ">0.00</td>                  
                          <td className="last">
                            <span className="dropdown">
                              <a href="#" className="dropdown-toggle btn btn-xs btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li>
                                </li>
                                <li> <a className href=" #">
                                    <span>Statement</span> </a></li>
                                <li><a className href=" #">
                                    <span>Profit Loss</span> </a></li>
                                <li>
                                  <a className href="javascript:;" title="View Account Info" onclick="view_account('152262');"><span>View Info</span></a>
                                </li>
                                <li> <a className href="javascript:;" title="Change Password" onclick="view_change_passs('152262');"><span>Change Password</span></a></li>
                                <li> <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('152262','D');"><span>Free Chip Deposit</span></a></li>
                                <li>
                                  <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('152262','W');"><span>Free Chip Withdrawal</span></a>
                                </li>
                              </ul>
                            </span>
                          </td>
                        </tr>
                        <tr id="user_row_145441">
                          <td>2                              <input type="checkbox" defaultValue={145441} className="select-users" />
                          </td>
                          <td className=" " style={{paddingBottom: '0px'}}>
                            <span className="m-bg">
                              rahul2610(Rahul)                            </span>
                          </td>
                          <td>park9.bet</td>
                          <td>sameer</td>                           <td className=" ">0 </td>
                          <td className=" ">0 </td>
                          <td className=" "><a className="btn btn-success btn-xs" href=" #"> 0.00</a>
                          </td>
                          <td className=" ">0 </td>
                          <td className=" ">0.00</td><td className=" ">0.00</td>                  
                          <td className="last">
                            <span className="dropdown">
                              <a href="#" className="dropdown-toggle btn btn-xs btn-success" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">View More <span className="caret" /></a>
                              <ul className="dropdown-menu">
                                <li>
                                </li>
                                <li> <a className href=" #">
                                    <span>Statement</span> </a></li>
                                <li><a className href=" #">
                                    <span>Profit Loss</span> </a></li>
                                <li>
                                  <a className href="javascript:;" title="View Account Info" onclick="view_account('145441');"><span>View Info</span></a>
                                </li>
                                <li> <a className href="javascript:;" title="Change Password" onclick="view_change_passs('145441');"><span>Change Password</span></a></li>
                                <li> <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145441','D');"><span>Free Chip Deposit</span></a></li>
                                <li>
                                  <a className href="javascript:;" title="Free Chip In Out" onclick="free_chips_in_out('145441','W');"><span>Free Chip Withdrawal</span></a>
                                </li>
                              </ul>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr><td colSpan={5} /><td colSpan={9}>Total Balance: 20000</td></tr>
                      </tfoot>
                    </table>
                    <p className="pull-left">Showing 1 to 2 of 2 entries </p>
                    <p id="paginateClick" className="pull-right pagination-row dataTables_paginate paging_simple_numbers" />
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
    )
}

export default User;