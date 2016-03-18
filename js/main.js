var $ul = $('ul');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $phrase = $('<p>');
  var $h2 = $('<h2>');
  var $img = $('<img>');

  $img.attr('src', 'images/' + grain.img);
  $h2.html(grain.name);
  $phrase.html(grain.desc);

  $li.append($img);
  $li.append($h2);
  $li.append($phrase);
  $ul.append($li);
});
