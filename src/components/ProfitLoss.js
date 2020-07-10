import React, { Component } from 'react'


const ProfitLoss = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at">   Profit Loss Listing<select style={{color: 'black'}} onchange="perPage(this.value)">
                    <option value={10} selected>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div> 
              </div>
              <div className="col-md-12">			
                <div className="filter_page data-background">
                  <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="Cprofitloss" />
                  <form method="get" id="formSubmit" className="form-horizontal form-label-left input_mask"> 
                    <div className="col-md-3 col-xs-6">
                      <input type="hidden" name="user_id" defaultValue={145315} />
                      <input type="hidden" name="perpage" id="perpage" defaultValue={10} />
                      <select className="form-control" name="sportid">
                        <option value={5} selected>All</option>
                        <option value={4}>Cricket</option>
                        <option value={1}>Soccer</option>
                        <option value={2}>Tennis</option>
                        <option value={11}>Live teenpatti</option>
                        <option value={12}>Live Casino</option>
                        <option value={0}>Fancy</option>
                      </select>
                    </div>
                    <div className="col-md-2 col-xs-6">
                      <input type="text" name="from_date" defaultValue="2020-06-30" id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left" placeholder="From date" autoComplete="off" />
                    </div>
                    <div className="col-md-2 col-xs-6">
                      <input type="text" name="to_date" defaultValue="2020-06-30" id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left" placeholder="To date" autoComplete="off" />
                    </div>
                    <div className="col-md-2 col-xs-6">
                      <input type="text" className="form-control" placeholder="Via event name" name="searchTerm" defaultValue />
                    </div>
                    <div className="col-md-3 col-xs-12">
                      <button type="submit" className="blue_button" id="submit_form_button" value="filter" data-attr="submit">Filter</button>
                      <a href="#" className="red_button">Clear</a>
                    </div>
                  </form> 
                </div>	
              </div>	
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div id="divLoading"> </div>{/*Loading class */}
                <div className="custom-scroll appendAjaxTbl data-background">
                  <table className="table table-striped jambo_table bulk_action">
                    <thead>
                      <tr className="headings">
                        <th className>S.No. </th>
                        <th className>Event Name </th>
                        <th className>Market </th>
                        <th className>P_L </th>
                        <th className>Commission </th>
                        <th className>Created On </th>
                        <th className>Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th colSpan={8}>No record found</th></tr>                       </tbody>
                  </table>
                  <table className="table table-striped jambo_table bulk_action">
                    <thead>
                      <tr className=" ">
                        <th className>(Total P &amp; L ) 0</th>
                        <th className>(Total Commition)  0</th>
                      </tr>	
                    </thead></table>
                  <p>Showing 1 to 0 of 0 entries </p>  <p id="paginateClick" className="pagination-row dataTables_paginate paging_simple_numbers"> </p>
                </div>
              </div>
            </div></div></div></div>
    )
}

export default ProfitLoss;