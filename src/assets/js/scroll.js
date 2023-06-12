var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 0}});

$(".anim").each(function() {
  var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.8, y: "+=15", ease:Power1.easeOut});
  var scene = new ScrollMagic.Scene({triggerElement: this})
                .setTween(tween)
                .addTo(controller);
});
