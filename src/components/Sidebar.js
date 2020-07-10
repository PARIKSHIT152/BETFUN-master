import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const sidebar = () => {
    return (
        <div className="left-side-menu">
            <div className="panel-group" id="accordion">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <Link to="/">In-Play</Link>
                  </h4>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="javascript:void(0) #collapseOne">Cricket <span className="extender" /></a>
                  </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul id="cricket_child_menu">
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171272881', '29894585');">
                          <i className="fa fa-angle-double-right" /> Varmdo CC v Djugardens IFC 
                        </a>
                        <ul id="list_of29894585" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171272963', '29894589');">
                          <i className="fa fa-angle-double-right" /> Alby Zalmi CC U23 v Nacka CC 
                        </a>
                        <ul id="list_of29894589" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.170633035', '29830699');">
                          <i className="fa fa-angle-double-right" /> England v West Indies 1st Test 
                        </a>
                        <ul id="list_of29830699" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273047', '29894591');">
                          <i className="fa fa-angle-double-right" /> Djugardens IFC v Stockholm International CC 
                        </a>
                        <ul id="list_of29894591" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273129', '29894594');">
                          <i className="fa fa-angle-double-right" /> Saltsjobaden CC v Spanga United CC 
                        </a>
                        <ul id="list_of29894594" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273211', '29894597');">
                          <i className="fa fa-angle-double-right" /> Stockholm International CC v Varmdo CC 
                        </a>
                        <ul id="list_of29894597" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273308', '29894838');">
                          <i className="fa fa-angle-double-right" /> Spanga United CC v Stockholm Tigers 
                        </a>
                        <ul id="list_of29894838" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273394', '29894839');">
                          <i className="fa fa-angle-double-right" /> Varmdo CC v Stockholm Super Kings 
                        </a>
                        <ul id="list_of29894839" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273477', '29894840');">
                          <i className="fa fa-angle-double-right" /> Nacka CC v Spanga United CC 
                        </a>
                        <ul id="list_of29894840" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273559', '29894842');">
                          <i className="fa fa-angle-double-right" /> Marsta CC v Stockholm International CC 
                        </a>
                        <ul id="list_of29894842" />
                      </li>
                      <li>
                        <a href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171273641', '29894841');">
                          <i className="fa fa-angle-double-right" /> Alby Zalmi CC U23 v Saltsjobaden CC 
                        </a>
                        <ul id="list_of29894841" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*- Tennis */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="javascript:void(0) #collapseTwo">Tennis <span className="extender" /></a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul id="tennis_child_menu">
                    </ul>
                  </div>
                </div>
              </div>
              {/*- Soccer */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="javascript:void(0) #collapsethree">Soccer <span className="extender" /></a>
                  </h4>
                </div>
                <div id="collapsethree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <ul id="soccer_child_menu">
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171222962', '29888492');">
                          <i className="fa fa-angle-double-right" />  Zenit St Petersburg v Sochi 
                        </a>
                        <ul id="list_of29888492" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171234090', '29890697');">
                          <i className="fa fa-angle-double-right" />  AC Horsens v Hobro 
                        </a>
                        <ul id="list_of29890697" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171237970', '29890928');">
                          <i className="fa fa-angle-double-right" />  FK Jablonec v Banik Ostrava 
                        </a>
                        <ul id="list_of29890928" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171237879', '29890935');">
                          <i className="fa fa-angle-double-right" />  Plzen v Slovan Liberec 
                        </a>
                        <ul id="list_of29890935" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171234197', '29890696');">
                          <i className="fa fa-angle-double-right" />  Randers v Esbjerg 
                        </a>
                        <ul id="list_of29890696" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171170257', '29884548');">
                          <i className="fa fa-angle-double-right" />  Slavia Prague v Sparta Prague 
                        </a>
                        <ul id="list_of29884548" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171168054', '29883373');">
                          <i className="fa fa-angle-double-right" />  Man City v Newcastle 
                        </a>
                        <ul id="list_of29883373" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171166906', '29883385');">
                          <i className="fa fa-angle-double-right" />  Sheff Utd v Wolves 
                        </a>
                        <ul id="list_of29883385" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171167398', '29883379');">
                          <i className="fa fa-angle-double-right" />  West Ham v Burnley 
                        </a>
                        <ul id="list_of29883379" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171168846', '29884368');">
                          <i className="fa fa-angle-double-right" />  Fiorentina v Cagliari 
                        </a>
                        <ul id="list_of29884368" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171168965', '29884358');">
                          <i className="fa fa-angle-double-right" />  Genoa v Napoli 
                        </a>
                        <ul id="list_of29884358" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171195756', '29886828');">
                          <i className="fa fa-angle-double-right" />  Brighton v Liverpool 
                        </a>
                        <ul id="list_of29886828" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171168613', '29884369');">
                          <i className="fa fa-angle-double-right" />  Torino v Brescia 
                        </a>
                        <ul id="list_of29884369" />
                      </li>
                      <li>
                        <a className="test" href="javascript:;" title="Match OODS" onclick="MarketSelection('1.171172381', '29884772');">
                          <i className="fa fa-angle-double-right" />  Barcelona v Espanyol 
                        </a>
                        <ul id="list_of29884772" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>		
          </div>
    )
}


export default sidebar;