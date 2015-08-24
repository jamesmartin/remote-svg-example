import {RemoteSvg} from 'remote-svg'

export function loadSvg(element) {
  return new RemoteSvg(element)
  .then(function() { console.log('SVG Loaded...'); })
  .catch(function(err) { console.log('Something went wrong: ' + err); });
}
