
# thubnail-3d

  thubnail with 3d effect
  [demo](http://besideriver.com/thubnail-3d/)

## Installation

  Install with [component(1)](http://component.io):

    $ component install zhang-ning/thubnail-3d

## Example Usage

``` js

  var Thumbail = require('thubnail-3d')
    , stage    = document.querySelector('.stage')
    , imgs = [{
        src:"http://www.whichbetter.net/wp-content/uploads/2011/01/bot2-229x300.jpg?fc2c5a",
        label:'rebot'
      },{
        src:"http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0LzVlL2lzeW91cmJyb3dzLmR3Zy5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/b0b46aaf/c28/is-your-browser-html5-and-css3-ready-infographic--3fbbb951a2.jpg",
        label:'css3'
      },{
        src:"http://thecodeplayer.com/u/m/i1.png",
        label:'3d'
      }];


  for(var i=0,len=imgs.length,img;img=imgs[i],i<len;i++){
    Thumbail().set('background',img.src)
    .set('label',img.label).attachTo(stage);
  }

```

## API

### Options

Options are configured by the `set` method, this method works like below:

``` js
thumb.set({
  background:'http://some/good/pic',
  label:'your label'
})
```

or 

``` js
thumb.set('background','http://some/img/url')
thumb.set('label','your label')
```

* `background` img url link, default.
* `label` img label string.

### thubnail-3d#attachTo(parentNode)


## License

  The MIT License (MIT)

  Copyright (c) 2014 <hunter.dding@gmail.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
