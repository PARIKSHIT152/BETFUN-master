import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header-section">
          <div className="top_nav">
            <div className="righttogal righttogalhide">
              <span style={{cursor: 'pointer'}} onclick="openNav()">☰ </span>
            </div>
            <div className="nav_menu">
              <nav className role="navigation">
                <div className="nav_title">
                  <Link to="/" className="site_title endcooki"> 
                        <h1 className="logocolor">BETFUN360</h1>
                  </Link>
                </div>
                {/*top navigation */}
                <div id="lefttSidenav" className="left_col  sidenav">
                  <Link to="javascript:void(0)" className="closebtn righttogalhide" onclick="closeNav()">×</Link> 
                  <div className="left_col scroll-view">
                    <div className="clearfix" />
                    <nav id="cssmenu">
                      {/*<div class="button"></div>*/}
                      <ul className="nav">
                        <li className="hidden-xs"><Link className="endcooki" to="/"><i className="fa fa-home hidden-xs" /></Link></li>
                        <li>
                          <Link to="#"><i className="fa fa-users" /> User </Link>
                          <ul>
                            <li><Link to="/master"> Master</Link> </li>
                            <li><Link to="/user"> Users</Link></li>
                            <li><Link to="/closeuser"> Close Users</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/blockmarket">Block Market</Link></li>
                        <li><Link to="#">Favorite</Link></li>
                        <li>
                          <Link to="#">Report</Link>
                          <ul>
                            <li><Link to="/acinfo">Account Info </Link> </li>
                            <li><Link to="/cacstatement">Account Statement </Link> </li>
                
                            <li><Link to="/clientpl">Client P L</Link> </li>
                            <li><Link to="/marketpl">Market P L</Link> </li>
                            <li><Link to="/sportspl">Sport P L</Link> </li>
                            <li><Link to="/userpl">User P L</Link> </li>
                            <li><Link to="/profitloss">Profit &amp; Loss</Link> </li>
                            <li><Link to="/bethistory">Bet History</Link> </li>
                            <li><Link to="/livegame">Livegame Bet History</Link> </li>
                            <li><Link to="/fancystack">Fancy Stack</Link> </li>
                          </ul>
                        </li>
                      </ul>
                    </nav></div>
                  {/*sidebar menu */}
                </div>
                <div className="nav navbar-nav navbar-right">
                  <ul>
                    <li className="belance-top">
                      <Link id="Wallet">Main: <span className="mWallet">395,000.00</span></Link>
                      <Link id="UserLiability">Exposure: <span className="liability">0.00</span></Link>
                      <Link to="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-user-circle-o" />
                        Bablu61<span className=" fa fa-angle-down" /></Link>
                      <ul className="dropdown-menu dropdown-usermenu">
                        <li><Link to="#">Change Password</Link> </li>
                        <li className="dropdown-footer"><Link className="endcooki" href="#">Log Out</Link> </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="marquee">
            <marquee><i className="fa fa-bell-o" /> welcome <i className="fa fa-bell-o" /></marquee>
          </div>
        </div>
    )
}

export default Navbar;