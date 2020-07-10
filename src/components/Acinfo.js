import React, { Component } from 'react'


const Acinfo = () => {
    return (
        <div>
        <div className="forModal" />      <div className="container body">
          <div className="main_container" id="sticky">
            <div className="right_col" role="main">
              <div className="row">
                <div className="col-md-12">
                  <div className="title_new_at">  Account Info</div>
                </div>
                <div className="col-md-12">
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div id="divLoading"> </div>{/*Loading class */}
                  <div className="table-scroll">
                    <table className="table table-striped jambo_table bulk_action" id=" ">
                      <thead>
                        <tr className="headings">
                          <th className>Chips </th>
                          <th className>Free Chips </th>
                          <th className>Liability </th>
                          <th className>Wallet </th>
                          <th className>Up </th>
                          <th className>Down </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr> 	
                          <td className="green">0.00 </td>
                          <td className=" ">395,000.00 </td>
                          <td className=" ">0.00 </td>
                          <td className=" ">395,000.00 </td>
                          <td className=" ">0.00 </td>
                          <td className=" ">0.00 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
    )
}

export default Acinfo;