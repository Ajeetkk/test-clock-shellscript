import React from "react";
import SyntaxHighLighter from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
// import mny from "manavify";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clock: ""
    };
  }

  componentDidMount() {
    var that = this;
    setInterval(function() {
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let date = new Date();
      // console.log("date = " + date);
      let dateDay = date.getDate();
      let month = months[date.getMonth()];
      // console.log("month = " + month);
      let year = date.getFullYear();
      let h = date.getHours();
      let m = date.getMinutes();
      var s = date.getSeconds();
      var ampm = h >= 12 ? "pm" : "am";
      let finallyDate =
        dateDay +
        " " +
        month +
        " " +
        year +
        "  " +
        h +
        ":" +
        m +
        ":" +
        s +
        "  " +
        ampm;

      that.setState({ clock: finallyDate });
    }, 1000);
  }

  render() {
    var code = `import RectClockWidget from 'react-clock-app'
   render() {
         return (
          <RectClockWidget />
   )}`;
    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>Clock Widget</h1>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "50px",
              border: "2px solid",
              padding: "15px",
              marginLeft: "25%",
              marginRight: "25%",
              background: "greenyellow",
              boxShadow: "5px 6px yellow"
            }}
          >
            {this.state.clock ? this.state.clock : "Loading widget..."}
          </div>
        </div>
        <br />

        <h2 style={{ marginLeft: "150PX", width: "50%", marginTop: "100px" }}>
          Steps for use in project--
          <br /> 1> download widgets <br />
          <a href="/react-clock-app.zip"> click here to download</a>
          <br />
          2> Unzip widget into your node_modules directory.
          <br />
          3> sample code:
          <SyntaxHighLighter language="javascript" style={twilight}>
            {code}
          </SyntaxHighLighter>
          <br />
          4> RectClockWidget, This write into return of you project as
          component.
          {/* {mny.alertMsg()} */}
        </h2>
      </div>
    );
  }
}
export default App;
