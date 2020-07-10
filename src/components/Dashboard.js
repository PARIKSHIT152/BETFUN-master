import React, { Component } from 'react'


const Dashboard = () => {
    return (
        <div>
        <div className="forModal" />      
         <div className="container body">
          <div className="main_container" id="sticky">
            <div className="right_col" role="main">
              <div className="fullrow tile_count">
                <div className="col-md-8">
                  <div id="UpCommingData">
                    <div className="sport-highlight-content tabs" id="accountView" role="main">
                      {/*<h2 class="header"><div class="sport-highlight-icon"></div>  <span>Sport Highlights</span> <button class="btn btn-back tbback hidden-lg"> Back</button></h2>*/}
                      <div className="casinobg"><span><a href="#" className="blinking"> Live games</a></span></div>
                      <div className="sports_box hidden-lg">
                        <div className="tittle_sports">
                          <span className="item_sport"> <img src="http://park9.bet/assets/images/trophy-ico.png" /></span>
                          Live Casino Games
                        </div>
                      </div>
                      <ul className="match-buttons">
                        <li className="hidden-lg"> 
                          <a href="#"><span className="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/live-games.png" className="anim-shrink-effect" /></span></a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/live-teenpatti.png" /></span></a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/livebaccarat.png" /></span> </a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/dragon-tiger.png" /></span></a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/ander-baher.png" /></span> </a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport">   <img src="http://park9.bet/assets/images/games-img/poker.png" /></span></a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/7updown.png" /></span></a>
                        </li>
                        <li className="hidden-lg">
                          <a onclick="lobbylink()" href="javascript:void(0)"><span className="item_mob-sport"><img src="http://park9.bet/assets/images/games-img/warli-matka.png" /></span> </a>
                        </li>
                        <li className="hidden-lg"> 
                          <a onclick="lobbylink(2)" href="javascript:void(0)"><span className="item_mob-sport"> <img src="http://park9.bet/assets/images/games-img/ezugi.png" /></span></a>
                        </li>
                      </ul>
                      <div className="matches-all">
                        <span id="msg_error" /><span id="errmsg" />
                        <div className="sports_box">
                          <div className="tittle_sports">
                            <span className="item_sport"> <img src="http://park9.bet/assets/images/cricket-ico.png" /></span>
                            Cricket
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894585" onclick="MarketSelection('1.171272881','29894585');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Varmdo CC v Djugardens IFC                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 13:30:00</time>
                              <span id="fav29894585"><i onclick="FavFunc(29894585,'1.171272881')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="inplay_txt">In-play </span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">150</span>														  
                              <span className="lay-cell">250</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">0</span>														  
                              <span className="lay-cell">1.01</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894589" onclick="MarketSelection('1.171272963','29894589');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Alby Zalmi CC U23 v Nacka CC                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 15:30:00</time>
                              <span id="fav29894589"><i onclick="FavFunc(29894589,'1.171272963')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">4.3</span>														  
                              <span className="lay-cell">4.6</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.28</span>														  
                              <span className="lay-cell">1.3</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29830699" onclick="MarketSelection('1.170633035','29830699');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                England v West Indies 1st Test                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 15:30:00</time>
                              <span id="fav29830699"><i onclick="FavFunc(29830699,'1.170633035')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.36</span>														  
                              <span className="lay-cell">1.37</span>
                              <span className="back-cell">6.6</span>														  
                              <span className="lay-cell">6.8</span>
                              <span className="back-cell">8.6</span>														  
                              <span className="lay-cell">8.8</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894591" onclick="MarketSelection('1.171273047','29894591');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Djugardens IFC v Stockholm International CC                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 17:30:00</time>
                              <span id="fav29894591"><i onclick="FavFunc(29894591,'1.171273047')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.23</span>														  
                              <span className="lay-cell">1.28</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">4.5</span>														  
                              <span className="lay-cell">5.4</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894594" onclick="MarketSelection('1.171273129','29894594');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Saltsjobaden CC v Spanga United CC                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 19:30:00</time>
                              <span id="fav29894594"><i onclick="FavFunc(29894594,'1.171273129')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.46</span>														  
                              <span className="lay-cell">1.81</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">2.24</span>														  
                              <span className="lay-cell">3.2</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894597" onclick="MarketSelection('1.171273211','29894597');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Stockholm International CC v Varmdo CC                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29894597"><i onclick="FavFunc(29894597,'1.171273211')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.68</span>														  
                              <span className="lay-cell">1.99</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">2.02</span>														  
                              <span className="lay-cell">2.46</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894838" onclick="MarketSelection('1.171273308','29894838');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Spanga United CC v Stockholm Tigers                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 13:30:00</time>
                              <span id="fav29894838"><i onclick="FavFunc(29894838,'1.171273308')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894839" onclick="MarketSelection('1.171273394','29894839');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Varmdo CC v Stockholm Super Kings                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 15:30:00</time>
                              <span id="fav29894839"><i onclick="FavFunc(29894839,'1.171273394')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894840" onclick="MarketSelection('1.171273477','29894840');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Nacka CC v Spanga United CC                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 17:30:00</time>
                              <span id="fav29894840"><i onclick="FavFunc(29894840,'1.171273477')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894842" onclick="MarketSelection('1.171273559','29894842');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Marsta CC v Stockholm International CC                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 19:30:00</time>
                              <span id="fav29894842"><i onclick="FavFunc(29894842,'1.171273559')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                            </div>
                          </div>
                          <div id="user_row_" className="sport_row sportrow-4  matchrow-29894841" onclick="MarketSelection('1.171273641','29894841');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Alby Zalmi CC U23 v Saltsjobaden CC                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 21:30:00</time>
                              <span id="fav29894841"><i onclick="FavFunc(29894841,'1.171273641')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                              <span className="back-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="lay-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                              <span className="back-cell">1.12</span>														  
                              <span className="lay-cell">9.4</span>
                            </div>
                          </div>
                        </div>
                        {/* Tennis */}	
                        <div className="sports_box">
                          <div className="tittle_sports">
                            <span className="item_sport"><img src="http://park9.bet/assets/images/tennis-ico.png" /></span> Tennis
                          </div>
                        </div>
                        {/* Soccer */}		
                        <div className="sports_box">
                          <div className="tittle_sports">
                            <span className="item_sport"><img src="http://park9.bet/assets/images/soccer-ico.png" /></span> Soccer
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29888492" onclick="MarketSelection('1.171222962','29888492');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Zenit St Petersburg v Sochi                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 20:30:00</time>
                              <span id="fav29888492"><i onclick="FavFunc(29888492,'1.171222962')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.74</span>														  
                              <span className="lay-cell">1.77</span>
                              <span className="back-cell">4.4</span>														  
                              <span className="lay-cell">4.5</span>
                              <span className="back-cell">4.8</span>														  
                              <span className="lay-cell">5</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890697" onclick="MarketSelection('1.171234090','29890697');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                AC Horsens v Hobro                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29890697"><i onclick="FavFunc(29890697,'1.171234090')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.35</span>														  
                              <span className="lay-cell">1.36</span>
                              <span className="back-cell">5.7</span>														  
                              <span className="lay-cell">5.8</span>
                              <span className="back-cell">11</span>														  
                              <span className="lay-cell">12</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890928" onclick="MarketSelection('1.171237970','29890928');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                FK Jablonec v Banik Ostrava                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29890928"><i onclick="FavFunc(29890928,'1.171237970')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.75</span>														  
                              <span className="lay-cell">1.77</span>
                              <span className="back-cell">4.2</span>														  
                              <span className="lay-cell">4.4</span>
                              <span className="back-cell">4.8</span>														  
                              <span className="lay-cell">5</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890935" onclick="MarketSelection('1.171237879','29890935');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Plzen v Slovan Liberec                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29890935"><i onclick="FavFunc(29890935,'1.171237879')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.45</span>														  
                              <span className="lay-cell">1.48</span>
                              <span className="back-cell">5.1</span>														  
                              <span className="lay-cell">5.5</span>
                              <span className="back-cell">7.2</span>														  
                              <span className="lay-cell">7.8</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29890696" onclick="MarketSelection('1.171234197','29890696');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Randers v Esbjerg                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29890696"><i onclick="FavFunc(29890696,'1.171234197')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.82</span>														  
                              <span className="lay-cell">1.83</span>
                              <span className="back-cell">4.3</span>														  
                              <span className="lay-cell">4.4</span>
                              <span className="back-cell">4.4</span>														  
                              <span className="lay-cell">4.5</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884548" onclick="MarketSelection('1.171170257','29884548');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Slavia Prague v Sparta Prague                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 21:30:00</time>
                              <span id="fav29884548"><i onclick="FavFunc(29884548,'1.171170257')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.83</span>														  
                              <span className="lay-cell">1.89</span>
                              <span className="back-cell">4</span>														  
                              <span className="lay-cell">4.2</span>
                              <span className="back-cell">4.4</span>														  
                              <span className="lay-cell">4.8</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883373" onclick="MarketSelection('1.171168054','29883373');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Man City v Newcastle                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                              <span id="fav29883373"><i onclick="FavFunc(29883373,'1.171168054')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.13</span>														  
                              <span className="lay-cell">1.14</span>
                              <span className="back-cell">11.5</span>														  
                              <span className="lay-cell">12</span>
                              <span className="back-cell">29</span>														  
                              <span className="lay-cell">32</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883385" onclick="MarketSelection('1.171166906','29883385');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Sheff Utd v Wolves                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                              <span id="fav29883385"><i onclick="FavFunc(29883385,'1.171166906')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">4.2</span>														  
                              <span className="lay-cell">4.3</span>
                              <span className="back-cell">3.1</span>														  
                              <span className="lay-cell">3.15</span>
                              <span className="back-cell">2.22</span>														  
                              <span className="lay-cell">2.24</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29883379" onclick="MarketSelection('1.171167398','29883379');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                West Ham v Burnley                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 22:30:00</time>
                              <span id="fav29883379"><i onclick="FavFunc(29883379,'1.171167398')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.96</span>														  
                              <span className="lay-cell">1.98</span>
                              <span className="back-cell">3.7</span>														  
                              <span className="lay-cell">3.75</span>
                              <span className="back-cell">4.5</span>														  
                              <span className="lay-cell">4.6</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884368" onclick="MarketSelection('1.171168846','29884368');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Fiorentina v Cagliari                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 23:00:00</time>
                              <span id="fav29884368"><i onclick="FavFunc(29884368,'1.171168846')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.85</span>														  
                              <span className="lay-cell">1.87</span>
                              <span className="back-cell">3.8</span>														  
                              <span className="lay-cell">3.85</span>
                              <span className="back-cell">4.9</span>														  
                              <span className="lay-cell">5</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884358" onclick="MarketSelection('1.171168965','29884358');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Genoa v Napoli                </a>
                              <time><i className="fa fa-clock-o" /> 08 Jul 2020 23:00:00</time>
                              <span id="fav29884358"><i onclick="FavFunc(29884358,'1.171168965')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">6</span>														  
                              <span className="lay-cell">6.4</span>
                              <span className="back-cell">4.1</span>														  
                              <span className="lay-cell">4.2</span>
                              <span className="back-cell">1.66</span>														  
                              <span className="lay-cell">1.67</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29886828" onclick="MarketSelection('1.171195756','29886828');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Brighton v Liverpool                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 00:45:00</time>
                              <span id="fav29886828"><i onclick="FavFunc(29886828,'1.171195756')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">6.6</span>														  
                              <span className="lay-cell">6.8</span>
                              <span className="back-cell">4.4</span>														  
                              <span className="lay-cell">4.5</span>
                              <span className="back-cell">1.59</span>														  
                              <span className="lay-cell">1.6</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884369" onclick="MarketSelection('1.171168613','29884369');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Torino v Brescia                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 01:15:00</time>
                              <span id="fav29884369"><i onclick="FavFunc(29884369,'1.171168613')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.71</span>														  
                              <span className="lay-cell">1.73</span>
                              <span className="back-cell">3.95</span>														  
                              <span className="lay-cell">4</span>
                              <span className="back-cell">6</span>														  
                              <span className="lay-cell">6.2</span>
                            </div>
                          </div>
                          <div id="user_row_ " className="sport_row sportrow-1  matchrow-29884772" onclick="MarketSelection('1.171172381','29884772');" title="Match OODS">
                            <div className="sport_name"> 
                              <a href="javascript:;">
                                Barcelona v Espanyol                </a>
                              <time><i className="fa fa-clock-o" /> 09 Jul 2020 01:30:00</time>
                              <span id="fav29884772"><i onclick="FavFunc(29884772,'1.171172381')" className="fa fa-star-o" aria-hidden="true" /></span>
                            </div>
                            <div className="match_status">
                              <span className="going_inplay">Going In-play</span>             </div>
                            <div className="match_odds_front">
                              <span className="back-cell">1.15</span>														  
                              <span className="lay-cell">1.16</span>
                              <span className="back-cell">10</span>														  
                              <span className="lay-cell">10.5</span>
                              <span className="back-cell">29</span>														  
                              <span className="lay-cell">30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>	 
                  <div id="MatchOddInfo" />
                </div>
                
                
                <div className="col-md-4 col-xs-12 matchBox">
                  <div className="other-items">
                    <div className="balance-box">
                      <div className="panel-heading">
                        <h3 className="bal-tittle">Top Casino Games </h3>
                        <span className="pull-right clickable"><i className="fa fa-chevron-down" /></span>
                      </div>
                      <div className="balance-panel-body">
                        <div className="game_wrapper">
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/live-teenpatti.png?v=1.5646" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/livebaccarat.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/dragon-tiger.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                        </div>
                        <div className="game_wrapper">
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/poker.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/ander-baher.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/7updown.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/play-now.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                        </div>
                        <div className="game_wrapper">
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/warli-matka.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>
                          <a onclick="lobbylink()" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/open-teen.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>	
                          <a onclick="lobbylink(2)" href="javascript:void(0)" className="item-games">
                            <img src="http://park9.bet/assets/images/games-img/ezugi.png" />
                            <span className="swing"><img src="http://park9.bet/assets/images/games-img/comming-soon.png" /></span>
                            <div id="play-video" className="video-play-button">  <span /></div>
                          </a>				
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="betSlipBox" style={{display: 'none'}}>  
                    <div className="betslip-head"> 
                      <span id="tital_change" className="item">Bet Slip</span>
                      <a href="javascript:;" className="UserChipData" data-toggle="modal" data-target="#addUser" data-backdrop="static" data-keyboard="false">
                        Edit Stake
                      </a>									
                    </div>
                    <div>
                      <div className="betBox border-box" style={{display: 'none'}}>
                        <div className="block_box">
                          <span id="msg_error" /><span id="errmsg" />
                          <div className="loader" style={{display: 'none'}}>
                            <div className="spinner">
                              <div className="loader-inner box1" />
                              <div className="loader-inner box2" />
                              <div className="loader-inner box3" />
                            </div>
                          </div>
                          <form method="POST" id="placeBetSilp"><input type="hidden" name="compute" defaultValue="eb30659372ea8c4d8cb7ba1af65eb383" />
                            <label className="control-label m-t-xs BetFor"> Yet (Bet For)</label>
                            <div className="liabilityprofit" id=" ">
                              <span className="stake_label">Profit</span>
                              <div className="stack_input_field">
                                <span id="profitData" style={{color: 'rgb(0, 124, 14)', fontWeight: 'bold'}}> 0.00</span>
                              </div>
                            </div>
                            <div className="liabilityprofit" id=" ">
                              <span className="stake_label">Loss</span>
                              <div className="stack_input_field">
                                <span id="LossData" style={{color: 'rgb(255, 0, 0)', fontWeight: 'bold'}}> 0.00</span>
                              </div>
                            </div>
                            <div id="ShowRunnderName" className="match_runner_name">
                            </div>
                            <div className="odds-stake">
                              <div className="item form-group full_rowOdd">
                                <span className="stake_label">Odd</span>
                                <div className="stack_input_field numbers-row">
                                  <input type="number" step="0.01" id="ShowBetPrice" className="calProfitLoss odds-input form-control  CommanBtn" />
                                </div>
                              </div>
                              <div className="item form-group" id=" ">
                                <span className="stake_label">Stake</span>
                                <div className="stack_input_field numbers-row">
                                  <input type="number" pattern="[0-9]*" step={1} id="stakeValue" className="calProfitLoss stake-input form-control  CommanBtn" />
                                  <input type="hidden" name="selectionId" id="selectionId" defaultValue className="form-control" />
                                  <input type="hidden" name="matchId" id="matchId" defaultValue className="form-control" />
                                  <input type="hidden" name="isback" id="isback" defaultValue className="form-control" />
                                  <input type="hidden" name="MarketId" id="MarketId" defaultValue className="form-control" />
                                  <input type="hidden" name="placeName" id="placeName" defaultValue className="form-control" />     
                                  <input type="hidden" name="text" id="stackcount" defaultValue={0} className="form-control" />	
                                  <input type="hidden" name="text" id="isfancy" defaultValue={0} className="form-control" />	
                                </div>
                              </div>
                            </div>
                            <div className="betPriceBox">
                              <button className="btn  btn-success CommanBtn  chipName1" type="button" value={500} onclick="StaKeAmount(this);">500</button><button className="btn  btn-success CommanBtn  chipName2" type="button" value={2000} onclick="StaKeAmount(this);">2000</button><button className="btn  btn-success CommanBtn  chipName3" type="button" value={5000} onclick="StaKeAmount(this);">5000</button><button className="btn  btn-success CommanBtn  chipName4" type="button" value={25000} onclick="StaKeAmount(this);">25000</button><button className="btn  btn-success CommanBtn  chipName5" type="button" value={50000} onclick="StaKeAmount(this);">50000</button><button className="btn  btn-success CommanBtn  chipName6" type="button" value={100000} onclick="StaKeAmount(this);">100000</button>                        <button className="btn  btn-success CommanBtn " type="button" onclick="ClearStack( );">Clear</button>
                            </div>
                            <div className="betFooter">
                              <button className="btn btn-danger CommanBtn" type="button" onclick="ClearAllSelection();">Clear All</button>				
                              <button className="btn btn-success  CommanBtn placebet" type="button" onclick="PlaceBet();">Place Bet</button>
                              <button className="btn btn-success CommanBtn placefancy" type="button" onclick="PlaceFancy();" style={{display: 'none'}}>Place Bet</button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="tab_bets">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item betdata active-all active">
                            <a className="allbet" href="javascript:void(0);" onclick="getDataByType(this,'4');"><span className="bet-label">All Bet</span> <span id="cnt_row">(  )</span></a>
                          </li>
                          <li className="nav-item betdata active-unmatch">
                            <a className="unmatchbet" href="javascript:void(0);" onclick="getDataByType(this,'2');"><span className="bet-label">UnMatch Bet</span> <span id="cnt_row1">(  ) </span> </a>
                          </li>
                          <li className="nav-item betdata">
                            <a className="unmatchbet" href="javascript:void(0);" onclick="getDataByType(this,'3');"><span className="bet-label">Fancy Bet</span> <span id="cnt_row3">(  ) </span> </a>
                          </li>
                          <li className="nav-item active-position"><a className="currentposition" href="javascript:void(0);" onclick="getDataByType(this,'5');">Current Position</a></li>
                          <a className="btn full-btn" onclick="viewAllMatch()" href="javascript:void(0);"><img src="http://park9.bet/assets/images/full-size-btn.png" alt="..." /></a>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*- Match UnMatch data -*/}
                  <div className id="MatchUnMatchBetaData">									
                  </div>
                  {/*- User Current Position  -*/}									
                  <div className id="getUserPosition">	
                  </div>
                </div>
              </div>
            </div>
            {/* /page content */}
            <div id="fancyposition" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="popup_form">
                    <div className="title_popup">
                      <span> Fancy Position</span> 
                      <button type="button" className="close" data-dismiss="modal">
                        <div className="close_new"><i className="fa fa-times-circle" /> </div>
                      </button>
                    </div>
                    <div className="content_popup">
                      <div className="popup_form_row">
                        <div className="modal-body" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footerlinks*/}
            <footer>
              <ul className="menu-links">
                <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/inplay.png" /><span>Inplay</span></a></li>
                <li className="item"><a href="javascript:;" className="UserChipData" data-toggle="modal" data-target="#addUser" data-backdrop="static" data-keyboard="false"><img src="http://park9.bet/assets/images/games-img/edit-stake.png" /><span>Edit stake</span></a></li>
                <li className="item"><a href="#" className="site_title endcooki active"><img src="http://park9.bet/assets/images/games-img/home.png" /></a></li>
                <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/history.png" /><span>Bet History</span></a></li>
                <li className="item"><a href="#"><img src="http://park9.bet/assets/images/games-img/logout.png" /><span>Logout</span></a></li>
              </ul>
            </footer>
            {/*footerlinks*/}
            {/*commanpopup*/}
            <div id="commonpopup" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="popup_form">
                    <div className="title_popup">
                      <span>Title Popup</span>
                      <button type="button" className="close" data-dismiss="modal">
                        <div className="close_new"><i className="fa fa-times-circle" /></div>
                      </button>
                    </div>
                    <div className="content_popup">
                      <div className="popup_form_row">
                        <div className="modal-body" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*commanpopup*/}       </div>
        </div>
      </div>
    )
}


export default Dashboard;