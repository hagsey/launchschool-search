$(function() {

  var catalog = [{
    "title": "The Legend of Zelda: Majora's Mask 3D",
    "id": 1,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 2,
    "category": "Nintendo 3DS"
  }, {
    "title": "Super Smash Bros.",
    "id": 3,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 4,
    "category": "Nintendo WiiU"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 5,
    "category": "Xbox One"
  }, {
    "title": "LEGO Batman 3: Beyond Gotham",
    "id": 6,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 7,
    "category": "PlayStation 4"
  }, {
    "title": "Far Cry 4",
    "id": 8,
    "category": "Xbox One"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 9,
    "category": "PlayStation 4"
  }, {
    "title": "Call of Duty: Advanced Warfare",
    "id": 10,
    "category": "Xbox One"
  }];

  var $items = $("section li"),
      $categories = $(":checkbox");

  $categories.on("change", function() {
    var $checkbox = $(this),
        checked = $checkbox.is(":checked"),
        category = $checkbox.val(),
        category_items;

    category_items = catalog.filter(function(item) {
      return item.category === category;
    });

    category_items.forEach(function(item) {
      $items.filter('[data-id=' + item.id + ']').toggle(checked);
    });
  });

  $("#game_name").keyup(function(input) {
    var input = $(this).val();
    var matches = [];

    // ==== Good solution, happy with this ====

     // $items.each(function() {
     //  if($(this).text().search(new RegExp(input, "i")) < 0) {
     //    $(this).addClass('hidden');
     //  } else {
     //    $(this).removeClass('hidden');
     //  }
     // });


     // ==== Bad solution, need help ====

     catalog.forEach(function(item) {
      if (item.title.search(new RegExp(input, "i")) >= 0) { matches.push(item) };
      return matches;
     });

     matches.forEach(function(item) {
      $items.hide();
       console.log($items.filter('[data-id=' + item.id + ']').show()); //Only shows the first item in matches	
      });
  });

});
