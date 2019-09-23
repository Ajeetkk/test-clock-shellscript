Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var clockApp = function App() {
  var _useState = (0, _react.useState)({ clocks: "loading..." });

  var _useState2 = _slicedToArray(_useState, 2);

  var clock = _useState2[0];
  var setClock = _useState2[1];

  setInterval(function() {
    // Your custom logic here
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
    var date = new Date();
    // console.log("date = " + date);
    var dateDay = date.getDate();
    var month = months[date.getMonth()];
    // console.log("month = " + month);
    var year = date.getFullYear();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var finallyDate =
      dateDay + " " + month + " " + year + "  " + h + ":" + m + ":" + s;
    setClock({ clocks: finallyDate });
  }, 1000);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      { style: { textAlign: "center" } },
      clock.clocks
    )
  );
};

exports.default = clockApp;
