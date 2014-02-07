/**
 * Module dependence
 */


var tengine = require('tengine')
  , html    = require('./template.js')
  , Configurable = require('configurable.js'); 

//exports
exports = module.exports = Thumbanil;


function Thumbanil(){
  if(!(this instanceof Thumbanil)) return new Thumbanil();
}

Configurable(Thumbanil.prototype)


/**
 * @parent [dom]
 * return this;
 */
Thumbanil.prototype.attachTo = function(parent){
  var img = {
    src : this.get('background'),
    label : this.get('label')
  }
  this.element = tengine(img).compile(html);
  parent.appendChild(this.element);
  return this;
}

