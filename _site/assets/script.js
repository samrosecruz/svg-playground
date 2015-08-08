////////// Trash Animation

$(function() {
  var trashSvg = Snap('#trash');
  var trashCover = trashSvg.select('#trash-cover');

  trashSvg.click(function() {
    trashCover.toggleClass("trash-open");
  });
}); 

//////// Arrow Horizontal

$(function() {
  var arrowHorizontalSvg = Snap('#arrow-horizontal');
  var arrowHead = arrowHorizontalSvg.select('#arrow-head-h');

  arrowHorizontalSvg.click(function() {
    if (arrowHorizontalSvg.hasClass('animated')) {
      arrowHead.animate({d:"M66.4824219,0 L0,82.0410156 L66.4824219,164.082031"}, 300, mina.easein);
      arrowHorizontalSvg.removeClass('animated');
    } else {
      arrowHead.animate({d:"M101.4824219,0 L157,82.0410156 L101.4824219,164.082031"}, 300, mina.easein);
      arrowHorizontalSvg.addClass('animated');
    }
  });
}); 

$(function() {
  var arrowVerticalSvg = Snap('#arrow-vertical');
  var arrowHead = arrowVerticalSvg.select('#arrow-head-v');

  arrowVerticalSvg.click(function() {
    if (arrowVerticalSvg.hasClass('animated')) {
      arrowHead.animate({d:"M115.482422,-48 L49,34.0410156 L115.482422,116.082031"}, 300, mina.easein);
      arrowVerticalSvg.removeClass('animated');
    } else {
      arrowHead.animate({d:"M130.482422,-48 L196,34.0410156 L130.482422,116.082031"}, 300, mina.easein);
      arrowVerticalSvg.addClass('animated');
    }
  });
}); 

///// Volume Animation
$(function() {
  var volumeSvg = Snap('#volume'),
      volumeValue= volumeSvg.select('#volume-value');

  volumeValue.addClass('hide');

  volumeSvg.click(function() {
    if (volumeSvg.hasClass('animated')) {
      volumeValue.removeClass('show');
      volumeSvg.removeClass('animated');
    } else {
      volumeValue.addClass('show');
      volumeSvg.addClass('animated');
    }
  });
}); 


/////// Checkbox Animation
$(function() {
  var checkboxSvg = Snap('#checkbox'),
      checkmark = checkboxSvg.select('#check');

  checkboxSvg.click(function() {
    if (checkboxSvg.hasClass('animated')) {
      checkmark.attr({ 'stroke-dasharray': '0, 160' })
      checkboxSvg.removeClass('animated');
      checkmark.addClass('hide');
      checkmark.removeClass('show');
    } else {
      checkmark.attr({ 'stroke-dasharray': '130, 160' })
      checkmark.addClass('show');
      checkmark.removeClass('hide');
      checkboxSvg.addClass('animated');
    }
  });

}); 
/// Loading Animation
//$(function() {
  //var loaderSvg = Snap('#svg-loader');

  //var loadingCircle = loaderSvg.select('#pc-loading-circle-filled'),
      //loadingSvg = loaderSvg.select('#pc-loading-circle'),
      //playBtn = loaderSvg.select('#pc-loading-play'),
      //pauseBtn = loaderSvg.select('#pc-loading-pause'),
      //circumf = Math.PI*(loadingCircle.attr('r')*2);

  //this variable will be used to store the loadingCircle animation object
  //var globalAnimation;

  //function initLoading() {
    //loadingCircle.attr({
      //'stroke-dasharray': circumf+' '+circumf,
      //'stroke-dashoffset': circumf,
    //});
  //}

  //initLoading();	

  //$('#pc-loading-pause').hide();;
  
  //playBtn.click(function(){
    //var strokeOffset = loadingCircle.attr('stroke-dashoffset').replace('px', '');
    //$('#pc-loading-play').hide();
    //$('#pc-loading-pause').show();;

    //globalAnimation = Snap.animate(strokeOffset, '0', function( value ){ 
      //loadingCircle.attr({ 'stroke-dashoffset': value })
      //}, (strokeOffset/circumf)*1500, mina.easein, function(){
        //$('#pc-loading-circle-filled').fadeOut();
        //$('#pc-loading-play').show();
        //$('#pc-loading-pause').hide();;
      //}
    //);
  //});


//});
