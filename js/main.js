var $ul = $('ul');

grains.forEach(function (grain) {
  var $p = $('<p>');
  var $h2 = $('<h2>');
  var $img = $('<img>');

  $h2.html(grain.name);
  $img.attr('src', 'images/' + grain.img);

  $li.append($figure);
  $ul.append($ul);
});
