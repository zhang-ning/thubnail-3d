/**
 * Module dependence
 */


var tengine = require('tengine')
  , html    = require('./template.js');

//exports
exports = module.exports = Thumbanil;


function Thumbanil(imgs){
  if(!(this instanceof Thumbanil)) return new Thumbanil(imgs);
  if(!Array.isArray(imgs)) throw new TypeError('Array expected');


  //after released this will be removed
  var mockdata = {
    src:"http://www.whichbetter.net/wp-content/uploads/2011/01/bot2-229x300.jpg?fc2c5a",
    msg:'hello world'
  }

  this.element = tengine(mockdata)
                    .compile(html);
}


/**
 * @parent [dom]
 * return this;
 */
Thumbanil.prototype.attachTo = function(parent){
  parent.appendChild(this.element);
  return this;
}

