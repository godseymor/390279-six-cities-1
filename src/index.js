import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const rentNames = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Wood and stone place`
];

ReactDOM.render(
    <App rentNames = {rentNames} />,
    document.getElementById(`root`)
);
