import React, { Component } from 'react'


const CloseUser = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <div className="ajax-call-hide">
              <style dangerouslySetInnerHTML={{__html: "\n      .mod-header {background: #2a3f54;color: white;}\n      .close_new {color: #fff;}\n      #addUserMsg {text-align: center;}\n      .modal-content {background: #fff;}\n      .errmsg {text-align: center;color: red;}\n      .succmsg {text-align: center;color: green;}\n      .btn_new {padding: 0;display: inline-block;min-width: 40px;text-align: center;color: #000000;font-weight: bold;}\n      .green {background: #629632;color: #ffffff;padding: 0 3% !important;}\n      .red {background: #F08080;color: #ffffff;padding: 0 3% !important;}\n      .blue {background: #0198E1;}\n      .orange {background: red;}\n      .black {background: #323232;}\n      .last a:last-child span.btn_new {border-right: 1px solid #ddd;}\n      tr.red {background: #F08080 !important;color: #000000 !important;}\n      tr.redother {background: #e74c3c !important;}\n      .table-striped > tbody > tr > td {border-left: 1px solid #ddd;}\n      .lastdetail span.btn_new {padding: 5px 5px;margin: 1% 0;width: auto !important;}\n      .deskaction a span {display: inline-block;text-align: center;padding: 0;border-right: 1px solid #dddddd;width: 25px;}\n      .headings th.deskaction {padding-left: 0px;}\n      .headings th span {text-align: center;padding: 0;width: 26px;display: inline-block;}\n      .mobaction {display: none;}\n      .lastdetail {background: #ffffff;float: left;width: 100%;}\n      .table > thead > tr > th {vertical-align: bottom;border-bottom: 0px solid #ddd;}\n      span.width1 {width: 70px !important;display: inline-block !important;padding: 0px !important;}\n      span.detailinfo {padding: 10px;display: inline-block;}\n   " }} />
            </div>
            <div id="userModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                </div>
              </div>
            </div>
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at">
                  Closed Users
                  <form className="usersech user-mobile" id="userListForm">
                    <input type="hidden" name="formSubmit" defaultValue={1} />
                    <input type="hidden" name="perpage" id="perpage" defaultValue />
                    <input type="text" name="mstruserid" id="mstruserid" placeholder="Search here" defaultValue />
                    <button className="fa fa-search" />
                  </form>
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">
                <div className="popup_col_6">
                  <div className="tab_bets get-mchlist">
                    <ul id="betsalltab" className="nav nav-pills">
                      <li className="active">
                        <a href="#">Master</a>
                      </li>
                      <li className>
                        <a href="#">Users</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="x_panel userwidth1">
                    <div className="row detailtop deskaction" style={{margin: '0px'}}>
                      <div className="lastdetail">
                        <span className="detailinfo"><b>Se</b> : Close settlement</span>
                        <span className="detailinfo"><b>S</b> : Statement</span>
                        <span className="detailinfo"><b>PL</b> : Profit Loss</span>
                        <span className="detailinfo"><b>I</b> : View Info</span>
                        <span className="detailinfo"><b>P-R</b> : Partnerhsip</span>
                        <span className="detailinfo"><b>P</b> : Change Password</span>
                        <span className="detailinfo"><b>D-W</b> : Free Chip In Out</span>
                        <span className="detailinfo"><b>C</b> : Close Account</span>
                      </div>
                    </div>
                    <div id="divLoading" />
                    {/*Loading class */}
                    <div className="x_content">
                      <div className id="contentreplace">
                        <table className="table table-striped jambo_table bulk_action" id="datatabless">
                          <thead>
                            <tr className="headings">
                              <th>S.No.</th>
                              <th>User ID</th>
                              <th>Website</th>
                              <th>Credit Limit</th><th>Credit given</th><th> Hyper</th><th>Super Master</th>                           <th>Balance <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                                <a href="#" className="glyphicon glyphicon-arrow-down" />
                              </th>
                              <th>Partnership <a href="#" className="glyphicon glyphicon-arrow-up"> </a>
                                <a href="#" className="glyphicon glyphicon-arrow-down" />
                              </th>
                              <th>M.comm</th> <th>S.comm</th>                           <td />
                              <th className="deskaction">
                                <span>A</span>                              <span>S</span>
                                <span>PL</span>
                                <span>I</span>
                                <span>P-R</span>
                                <span>P</span>
                                <span>D-W</span>
                              </th>
                              <th className="mobaction" style={{textAlign: 'center', marginTop: '30%'}}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><th colSpan={6}>No record found</th></tr>                   </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="lockunlockModal" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="popup_form">
                    <div className="title_popup">
                      <span> User Setting</span> 
                      <button type="button" className="close" data-dismiss="modal">
                        <div className="close_new"><i className="fa fa-times-circle" /> </div>
                      </button>
                    </div>
                    <div className="content_popup">
                      <div className="popup_form_row">
                        <div className="popup_col_12">
                          <label className="col-sm-12 control-label m-t-xs">
                            <p />
                          </label>
                          <input type="hidden" id="updUserSerial" />
                          <input type="hidden" id="updUserVal" />
                          <input type="hidden" id="updUserType" />
                        </div>
                        <div className="popup_col_12">
                          <button type="button" className="blue_button" onclick="updateUserSett()">Yes</button>
                          <button type="button" className="red_button" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
    )
}

export default CloseUser