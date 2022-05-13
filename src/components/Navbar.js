import React, { Component } from "react";
import Identicon from "identicon.js";
import "./App.css";
import photo from "../logo192.png";

class Navbar extends Component {
  render() {
    return (
      <header className="bg-white-700">
        <div class="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
          <a aria-current="page" class="" href="/">
            <h3 className="flex items-center text-black no-underline">
              <img className="h-8" src={photo} alt="Mascot" />
              <span class="text-2xl font-bold tracking-tight">Instagram</span>
            </h3>
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">{this.props.account}</small>
              </small>
              {this.props.account ? (
                <img
                  className="ml-2"
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    this.props.account,
                    30
                  ).toString()}`}
                />
              ) : (
                <span></span>
              )}
            </li>
          </ul>
        </div>
      </header>
      // <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
      //   <a
      //     className="navbar-brand col-sm-3 col-md-2 mr-0"
      //     href=""
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <img src={photo} width="30" height="30" className="d-inline-block align-top" alt="" />
      //     PHOTOFY
      //   </a>
      //   <ul className="navbar-nav px-3">
      //     <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
      //       <small className="text-secondary">
      //         <small id="account">{this.props.account}</small>
      //       </small>
      //       { this.props.account
      //         ? <img
      //           className='ml-2'
      //           width='30'
      //           height='30'
      //           src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
      //         />
      //         : <span></span>
      //       }
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navbar;
