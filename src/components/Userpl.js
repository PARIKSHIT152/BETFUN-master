import React, { Component } from 'react'


const Userpl = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style dangerouslySetInnerHTML={{__html: "\n    .mark-back:hover{background: #4cebdc !important;}\n    .mark-lay:hover{background: #c6f6f2 !important;}\n    .mark-back{background: #7CC4F7 !important;}\n    .mark-lay{background: #FCA4B7 !important;}\n" }} />
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at"> User's PL 
                  <div className="pull-right"><button className="btn btn-xs btn-primary" style={{marginRight: '2px'}} id="backbutton">Back</button></div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="report/userpl" />
                <form method="get" className="form-horizontal form-label-left input_mask userpl" id="formSubmit">
                  <div className="clearfix data-background">	
                    <div className="popup_col_2">
                      <input type="text" name="from_date" defaultValue="2020-06-30 00:00:00" id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="From date" autoComplete="off" />
                    </div>
                    <div className="popup_col_2">
                      <input type="text" name="to_date" defaultValue="2020-06-30 23:59:59" id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="To date" autoComplete="off" />
                    </div>
                    <div className="popup_col_1">
                      <select name="filter_sport" className="form-control">
                        <option value="cricket" cricket>Cricket</option>
                        <option value="tennis">Tennis</option>
                        <option value="soccer">Soccer</option>
                        <option value="teenpatti">Teenpatti</option>
                        <option value="fancy">Fancy</option>
                      </select>
                    </div>
                    <div className="popup_col_1">
                      <select name="filter_order" className="form-control">
                        <option value="desc">Top</option>
                        <option value="asc">Bottom</option>
                      </select>
                    </div>
                    <div className="popup_col_1">
                      <select name="filter_value" className="form-control">
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>
                    </div>
                    <div className="block_2 buttonacount">
                      <button type="button" className="red_button" id="submit_form_button" value="filter" data-attr="submit"><i className="fa fa-filter" /> Filter</button>
                      <a href="#" className="red_button"><i className="fa fa-eraser" /> Clear</a>
                    </div>
                  </div> 
                  <div className="popup_col_12">
                    <div id="betsalltab" className="tab_bets">
                      <div className="nav nav-pills match-lists">	
                        <li><a href="javascript:void(0);" dat-attr="m">Last Month</a></li>
                        <li><a href="javascript:void(0);" dat-attr="w">Last Week</a></li>
                        <li><a href="javascript:void(0);" dat-attr="y">Yesterday</a></li>
                        <li><a href="javascript:void(0);" dat-attr="t">Today</a></li>
                        <input type="hidden" id="inputFilterDate" name="Filterdate" defaultValue="t" />
                      </div>
                    </div>		 
                  </div>	
                </form>
                <div id="divLoading"> </div>{/*Loading class */}
                <div className="custom-scroll data-background appendAjaxTbl">
                  <h5>Filter criteria : From <span className="span-from">2020-06-30 00:00:00</span> To <span className="span-to">2020-06-30 23:59:59</span>, 10 records in order of  cricket desc</h5>
                  <table className="table table-striped jambo_table bulk_action full-table-clint">
                    <thead>	
                      <tr className="headings">
                        <th width="5%">S.No.</th>				
                        <th>Username</th>
                        <th>Cricket</th>
                        <th>Tennis</th>
                        <th>Soccer</th>
                        <th>Teenpatti</th>
                        <th>Fancy</th>
                      </tr>				
                    </thead>
                    <tbody>
                      <tr><td colSpan={7}>No record found.</td></tr>
                    </tbody>
                  </table>
                  <p className="pull-left">
                  </p>
                </div>
              </div>
            </div></div></div></div>
    )
}

export default Userpl;