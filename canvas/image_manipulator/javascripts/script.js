var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

var manipulator = {

  greyImages: function() {
    var self = this;
    $('img').each(function() {
      self.toGreyScale(this);
    });
  },

  toGreyScale: function(image) {
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0);
    var image_data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < image_data.data.length; i += 4) {
      var red = image_data.data[i],
          green = image_data.data[i + 1],
          blue = image_data.data[i + 2],
          grey = red * .3086 + green * .6094 + blue * .0820;

      image_data.data[i] = grey;
      image_data.data[i + 1] = grey;
      image_data.data[i + 2] = grey;
    }

    ctx.putImageData(image_data, 0, 0);
    var image = document.createElement('img');
    image.src = canvas.toDataURL();

    $('.col').last().append(image);
  },

//   // mainpulatePixel: function(i, image_data) {  
//   // },

  init: function() {
    this.greyImages();
  }
}

$(window).load(function() {
  manipulator.init();
});