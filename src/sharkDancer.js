var Shark = function (top, left) {
  makeDancer.call(this, top, left);
  this.$node = $('<span class="animated shark bounce"></span>');
  this.setPosition(top, left);
}

Shark.prototype = Object.create(makeDancer.prototype);
Shark.prototype.constructor = Shark;
