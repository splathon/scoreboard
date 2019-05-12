import React from 'react';
import { render } from 'react-dom';

(async () => {
  const res = await fetch('https://docs.google.com/spreadsheets/d/1k8fy1ibXKsPEyNjzfOpBrO9HlHKvy0Ra0_B9Kw94gbw/export?format=csv');
  const t = await res.text();
  console.log(t);

  const $img = document.createElement('img');
  $img.src = './images/stages/zatou.png';
  document.body.append($img);

  const App = () => (<div><img src="./images/stages/manta.png" /></div>);

  render(<App />, document.getElementById('scoreboard'));
})();
