import React, { Component } from "react";
import Identicon from "identicon.js";
import logo from "./illustration.png";
import "./App.css";

class Main extends Component {
  render() {
    return (
      <div>
        <div className=" flex-col min-h-screen font-sans text-gray-900  bg-gradient-to-r from-gray-200 to-indigo-100 ">
          <main
            role="main"
            className="flex-1 w-full max-w-6xl mx-auto md:px-8 md:py-4 px-5"
            style={{ maxWidth: "1000px" }}
          >
            <section className="md:mt-10" />
            <div className=" text-center flex-wrap py-9 md:py-0 ">
              <h1 className="md:leading-relaxed text-3xl md:text-5xl font-bold py-10 md:py-3 ">
                Get your hardwork,
                <span className="to-blue-500">
                  valued.
                </span>
              </h1>
              <div className="text-center flex flex-wrap py-5 md:py-0">
                <h1 className="subCaption">
                  Decentralized image sharing platform, where creators can showcase their work and viewers can provide tip in cryptocurrency.
                </h1>
              </div>
              <br></br>
              <div className="parent">
                <div className="child">
                <img src={logo} alt="illustration" />;
                </div>
                <div className="child">
                  <form
                    className="form"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const description = this.imageDescription.value;
                      this.props.uploadImage(description);
                    }}
                  >
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .bmp, .gif"
                      onChange={this.props.captureFile}
                    />
                    <div className="form-group ">
                      <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => {
                          this.imageDescription = input;
                        }}
                        className="form-control"
                        placeholder="Caption "
                        required
                      />
                    </div>
                    <button className="to-blue-500"
                      type="submit"
                      class="btn  btn-primaryc  btn-block btn-lg"
                    >
                      Share
                    </button>
                  </form>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              {this.props.images.map((image, key) => {
                return (
                  <div className="card mb-4" key={key}>
                    <div className="card-header">
                      <img
                        className="mr-2"
                        width="40"
                        height="40"
                        src={`data:image/png;base64,${new Identicon(
                          image.author,
                          30
                        ).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p class="text-center">
                          <img
                            src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                            style={{ maxWidth: "420px" }}
                          />
                        </p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS:{" "}
                          {window.web3.utils.fromWei(
                            image.tipAmount.toString(),
                            "Ether"
                          )}{" "}
                          ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei(
                              "0.1",
                              "Ether"
                            );
                            console.log(event.target.name, tipAmount);
                            this.props.tipImageOwner(
                              event.target.name,
                              tipAmount
                            );
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
