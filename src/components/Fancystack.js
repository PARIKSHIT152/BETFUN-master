import React, { Component } from 'react'


const FancyStack = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style dangerouslySetInnerHTML={{__html: "\n    .mark-back:hover{background: #4cebdc !important;}\n    .mark-lay:hover{background: #c6f6f2 !important;}\n    .mark-back{background: #7CC4F7 !important;}\n    .mark-lay{background: #FCA4B7 !important;}\n" }} />
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at">Fancy Stack   
                  <div className="pull-right"><button type="button" className="btn_common" id="backbutton">Back</button> </div>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="clearfix data-background">
                  <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="report/fancystack" />
                  <form method="get" className="form-horizontal form-label-left input_mask" id="formSubmit">
                    <input type="hidden" name="typeRE" id="typeRE" defaultValue />
                    <input type="hidden" name="parentId" id="parentId" defaultValue={145315} /> 		  
                    <div className="popup_col_2">
                      <input type="text" name="from_date" defaultValue="2020-06-30 00:00:00" id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="From date" autoComplete="off" />
                    </div>
                    <div className="popup_col_2">
                      <input type="text" name="to_date" defaultValue="2020-06-30 23:59:59" id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="To date" autoComplete="off" />
                    </div>
                    <div className="block_4 buttonacount">
                      <button type="button" className="blue_button" id="submit_form_button" value="filter" data-attr="submit"><i className="fa fa-filter" /> Filter</button>
                      <a href="#" className="red_button"><i className="fa fa-eraser" /> Clear</a>
                      <a className="blue_button" href="#">View Match Bets</a>
                    </div>
                  </form>		 </div>
              </div>
              <div className="col-md-12 ">
              </div>	
              <div id="divLoading"> </div>{/*Loading class */}
              <div className="col-md-12">
                <div className="custom-scroll appendAjaxTbl">
                  <table className="table table-striped jambo_table bulk_action" id="datatables">
                    <thead>
                      <tr className="headings">
                        <th className width="5%">S.No. </th>
                        <th width="70%">
                          Master						</th>
                        <th className>Total Bet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th colSpan={3}>No record found</th></tr>	
                    </tbody>
                  </table>
                  <p>Showing 1 to 0 of 0 entries </p><p id="paginateClick" className="pagination-row dataTables_paginate paging_simple_numbers" />
                </div>
              </div>
            </div>
          </div>
        </div></div>
    )
}

export default FancyStack;