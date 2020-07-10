import React, { Component } from 'react'


const Livegame = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <style dangerouslySetInnerHTML={{__html: "\n    .mark-back:hover{background: #4cebdc !important;}\n    .mark-lay:hover{background: #c6f6f2 !important;}\n    .mark-back{background: #7CC4F7 !important;}\n    .mark-lay{background: #FCA4B7 !important;}\n" }} />
            <div className="main-content">
              <div className="main-inner">
                <section className="match-content">
                  <div className="table_tittle"> CLIENT LIVE GAME BETS REPORT </div>
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="clearfix data-background">
                      <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="gameclientbet" />
                      <form method="get" className="form-horizontal form-label-left input_mask" id="formSubmit">
                        <input type="hidden" name="user_id" id="user_id" defaultValue={145315} />
                        <div className="col-md-2 col-xs-6">
                          <input type="text" name="from_date" defaultValue id="from-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="From date" autoComplete="off" />
                        </div>
                        <div className="col-md-2 col-xs-6">
                          <input type="text" name="to_date" defaultValue id="to-date" className="form-control col-md-7 col-xs-12 has-feedback-left datetimepicker" placeholder="To date" autoComplete="off" />
                        </div>
                        <div className="col-md-2 col-xs-6"><input type="text" name="searchUserName" defaultValue id="searchUserName" className="form-control" placeholder="Users" />
                        </div>			
                        <div className="col-md-2 col-xs-6">
                          <select style={{color: 'black'}} name="searchType" className="form-control">
                            <option value selected>All Game</option> 
                            <option value={56767}>Live Teenpatti</option>
                            <option value={87564}>Andar bahar</option>
                            <option value={67564}>Poker</option>
                            <option value={98789}>7 up &amp; Down</option>
                            <option value={56967}>32 cards casino</option>
                            <option value={56968}>Hi low</option>
                            <option value={67565}>Six player poker</option>
                            <option value={56768}>Teenpatti 20</option>
                            <option value={92037}>MATKA</option>
                          </select>
                        </div>
                        <div className="col-md-2 col-xs-6">
                          <select style={{color: 'black'}} name="betStatus" className="form-control">					
                            <option value="O">OPEN</option>
                            <option value="S" selected>Settle</option>
                          </select>
                        </div>
                        <div className="col-md-3 col-xs-12">
                          <button type="button" id="submit_form_button" className="btn btn-success" data-attr="submit"><i className="fa fa-filter" /> Filter</button>
                        </div>
                      </form>
                    </div>  
                    <div className>
                      <div id="divLoading"> </div>{/*Loading class */}
                      <div className="custom-scroll data-background appendAjaxTbl">
                        <table className="table table-striped jambo_table bulk_action full-table-clint">
                          <thead>	
                            <tr className="headings">	
                              <th>Datetime	</th>	
                              <th>Client</th>				
                              <th>Game</th>
                              <th>Round id</th>
                              <th>Bet details</th>
                              <th>Result</th>
                              <th>Type</th>
                            </tr>				
                          </thead>
                          <tbody>
                            <tr><td colSpan={6}>No record found.</td></tr>
                          </tbody>
                        </table>
                        <p className="pull-left">Showing 1 to 0 of 0 entries </p>
                        <p id="paginateClick" className="pull-right pagination-row dataTables_paginate paging_simple_numbers" />  
                      </div>
                    </div>
                  </div></section>
              </div>
            </div>
          </div></div></div>
    )
}

export default Livegame;