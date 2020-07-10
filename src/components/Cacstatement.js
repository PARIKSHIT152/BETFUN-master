import React, { Component } from 'react'


const Cacstatement = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12">
                  <div className="title_new_at">Account Statement    
                    <div className="pull-right"><button className="btn_common" onclick="goBack()">Back</button> </div>
                  </div>
                </div>
                <div className="col-md-12">
                </div>
                <div className="col-md-12">
                  <div className="filter_page  data-background">
                    <form method="post" id="formSubmit" style={{color: '#000'}}><input type="hidden" name="compute" defaultValue="fe6602731bf3d65605f0d8f6552a1c9f" />
                      <div className="col-md-12 custom-check">
                        <input type="hidden" name="user_id" id="user_id" defaultValue={145315} />
                        <input type="hidden" name="ajaxUrl" id="ajaxUrl" defaultValue="CacStatement" />
                        <div className="form-group">
                          <input name="fltrselct" defaultValue={0} defaultChecked type="radio" id="all" />
                          <label htmlFor="all"><span>All</span></label>
                        </div>
                        <div className="form-group">
                          <input name="fltrselct" defaultValue={1} type="radio" id="FreeChips" />
                          <label htmlFor="FreeChips"><span>Free Chips</span></label>
                        </div>
                        <div className="form-group">
                          <input name="fltrselct" defaultValue={2} type="radio" id="Settlement" />
                          <label htmlFor="Settlement"><span>Settlement</span></label>
                        </div>
                        <div className="form-group">
                          <input name="fltrselct" defaultValue={3} type="radio" id="Profitandloss" />
                          <label htmlFor="Profitandloss"><span>Profit Loss</span></label>
                        </div>
                        <div className="form-group">
                          <input name="fltrselct" defaultValue={4} type="radio" id="AccountStatement" />
                          <label htmlFor="AccountStatement"><span>Statement</span></label>
                        </div>
                      </div>
                      <div className="block_2">            
                        <input type="text" name="fdate" id="fdate" defaultValue className="form-control" placeholder="From Date" autoComplete="off" />
                      </div>
                      <div className="block_2">            
                        <input type="text" name="tdate" id="tdate" defaultValue className="form-control" placeholder="To Date" autoComplete="off" />
                      </div>
                      <div className="block_2">
                        <input type="text" name="searchTerm" id="searchTerm" className="form-control" placeholder="Search" autoComplete="off" />
                      </div>
                      <div className="block_2 buttonacount">
                        <button type="submit" name="submit" id="submit_form_button" className="blue_button" data-attr="submit">Filter</button>
                        <a href="/index.php" className="red_button">Clear</a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div id="divLoading"> </div>{/*Loading class */}
                  <div className="custom-scroll appendAjaxTbl" id="filterdata">
                    <table className="table table-bordered table-dark table_new_design" id="datatablesss">
                      <thead>
                        <tr className="headings">
                          <th className>S.No. </th>
                          <th className>Date </th>
                          <th className>Description </th>
                          <th className="rrig text-right">Credit </th>
                          <th className="rrig text-right">Debit </th>
                          <th className="rrig text-right">Balance </th>                        
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className=" ">2020-06-24 12:07:39</td>
                          <td className=" ">
                            Bablu61 Received From  Pa12345														</td>
                          <td className="green text-right">10000 </td>
                          <td className="red text-right">0 </td> 					   
                          <td className="green text-right">395000.00 </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className=" ">2020-06-20 12:34:13</td>
                          <td className=" ">
                            Bablu61 Deposit In Raghu22														</td>
                          <td className="green text-right">0 </td>
                          <td className="red text-right">5000 </td> 					   
                          <td className="green text-right">385000.00 </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className=" ">2020-06-20 12:33:22</td>
                          <td className=" ">
                            Bablu61 Deposit In Pa12345														</td>
                          <td className="green text-right">0 </td>
                          <td className="red text-right">10000 </td> 					   
                          <td className="green text-right">390000.00 </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td className=" ">2020-06-18 21:41:05</td>
                          <td className=" ">
                            Bablu61 Deposit In Pa12345														</td>
                          <td className="green text-right">0 </td>
                          <td className="red text-right">100000 </td> 					   
                          <td className="green text-right">400000.00 </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td className=" ">2020-04-22 20:08:28</td>
                          <td className=" ">
                            Bablu61 Received From  Parent														</td>
                          <td className="green text-right">500000 </td>
                          <td className="red text-right">0 </td> 					   
                          <td className="green text-right">500000.00 </td>
                        </tr>
                      </tbody>
                    </table>
                    <p>Showing 1 to 5 of 5 entries </p>  <p id="paginateClick" className="pagination-row dataTables_paginate paging_simple_numbers"> </p>
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
    )
}

export default Cacstatement;