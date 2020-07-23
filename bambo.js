'use strict';

var Test = function Test(props) {
  return React.createElement(
    'div',
    { className: 'test' },
    'hello youtoo'
  );
};

ReactDOM.render(React.createElement(Test, null), document.getElementById('bamboo'));