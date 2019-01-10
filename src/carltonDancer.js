var Carlton = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="carlton"></span>');
  this.setPosition(top, left);
}
Carlton.prototype = Object.create(makeDancer.prototype);
Carlton.prototype.constructor = Carlton;


Carlton.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle(1000, function(){
  });
};