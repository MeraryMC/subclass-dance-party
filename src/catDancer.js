var Cat = function (top ,left) {
  makeDancer.call(this, top, left);
  this.$node = $('<span class="cat"></span>');
  this.setPosition(top, left);
}

Cat.prototype = Object.create(makeDancer.prototype);
Cat.prototype.constructor = Cat;