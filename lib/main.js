import './style.css!';
import {RemoteSvg} from 'remote-svg';

new RemoteSvg(document.getElementById('my-svg'))
.then(function() { console.log('SVG loaded...'); })
.catch(function(err) { console.log('Something went wrong: ' + err); });
