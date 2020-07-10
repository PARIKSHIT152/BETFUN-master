import React, { Component } from 'react'


const Bethistory = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style dangerouslySetInnerHTML={{__html: "\n    .mark-back:hover{background: #4cebdc !important;}\n    .mark-lay:hover{background: #c6f6f2 !important;}\n    .mark-back{background: #7CC4F7 !important;}\n    .mark-lay{background: #FCA4B7 !important;}\n" }} />
            <div className="right_col" role="main">
              <div className="col-md-12">
                <div className="title_new_at">   Bet History
                  <select style={{color: 'black'}} onchange="perPage(this.value)">
                    <option value={10} selected>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 ">
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="clearfix data-background">
                  <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="bethistory" />
                  <form method="post" id="formSubmit" className="form-horizontal form-label-left input_mask"><input type="hidden" name="compute" defaultValue="fe6602731bf3d65605f0d8f6552a1c9f" /> 
                    <input type="hidden" name="sportId" id="sportId" defaultValue={5} />
                    <input type="hidden" name="perpage" id="perpage" defaultValue={10} />
                    <div className="popup_col_2">
                      <input type="text" name="from_date" defaultValue="2020-06-30" id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left" placeholder="From date" autoComplete="off" />
                    </div>
                    <div className="popup_col_2">
                      <input type="text" name="to_date" defaultValue="2020-06-30" id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left" placeholder="To date" autoComplete="off" />
                    </div>
                    <div className="popup_col_1">
                      <input type="text" name="searchTerm" defaultValue id="mstruserid" maxLength={100} size={50} className="form-control" placeholder="Search" />
                    </div>
                    <div className="popup_col_2">
                      <select className="form-control" name="betStatus">
                        <option value={-1}>Match/Unmatch</option>
                        <option value={1}>Match</option>
                        <option value={0}>Unmatch</option>
                      </select>
                    </div>
                    <div className="popup_col_2">
                      <select className="form-control" name="pStatus">
                        <option value={1}>Open</option>
                        <option value={2}>Settled</option>
                      </select>
                    </div>
                    <div className="popup_col_3">
                      <button type="button" name="submit" className="blue_button" id="submit_form_button" value="filter" data-attr="submit"><i className="fa fa-filter" /> Filter</button>
                      <a href="#" className="red_button"><i className="fa fa-eraser" /> Clear</a>
                    </div>
                  </form>	  </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="tab_bets get-mchlist">
                  <ul id="betsalltab" className="nav nav-pills match-lists">
                    <li className="active">
                      <a href="#" dat-attr={5}>All</a>
                    </li>
                    <li className>
                      <a href="#" dat-attr={4}>Cricket</a>
                    </li>
                    <li className>
                      <a href="#" dat-attr={2}>Tennis</a>
                    </li>
                    <li className>
                      <a href="#" dat-attr={1}>Soccer</a>
                    </li>                        
                    <li className>
                      <a href="#" dat-attr={9}>Teenpatti</a>
                    </li>
                    <li className>
                      <a href="#" dat-attr={0}>Fancy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div id="divLoading"> </div>{/*Loading class */}
                <div className="custom-scroll appendAjaxTbl">
                  <table className="table table-striped jambo_table bulk_action" id="datatables">
                    <thead>
                      <tr className="headings">
                        <th className>S.No. </th>
                        <th className>Client</th>
                        <th className>Description </th>
                        <th className>Selection </th>
                        <th className>Type </th>
                        <th className>Odds </th>
                        <th className>Stack </th>
                        <th className>Date </th>
                        <th className>P_L </th>
                        <th className>Profit </th>
                        <th className>Liability </th>
                        <th className>Bet type</th>
                        <th className>Status </th>
                        <th className>IP </th>
                        <th className>Device</th>
                        <th className>ID </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><th colSpan={20}>No record found</th></tr>	
                    </tbody>
                  </table>
                  <p>Showing 1 to 0 of 0 entries</p><p id="paginateClick" className="pagination-row dataTables_paginate paging_simple_numbers" />
                </div>
              </div>
            </div>
          </div></div></div>
    )
}

export default Bethistory;