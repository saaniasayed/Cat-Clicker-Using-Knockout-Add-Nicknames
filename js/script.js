/* ============ we are using knockout :) =============*/

var initialCats = [
  {
      clickCount: 0,
      name: 'Tuffy',
      imgSrc: 'img/cat_picture1.jpg',
      nickNames: ['Tuff', 'Mr. T']
  },
  {
      clickCount: 0,
      name: 'Snowy',
      imgSrc: 'img/cat_picture2.jpeg',
      nickNames: ['Snow']
  },
  {
      clickCount: 0,
      name: 'Tiger',
      imgSrc: 'img/cat_picture3.jpeg',
      nickNames: ['Tig','Tiggy','Tigeress']
  },
  {
      clickCount: 0,
      name: 'Sweety',
      imgSrc: 'img/cat_picture4.jpeg',
      nickNames: ['Sweets','Sweetu']
  },
  {
      clickCount: 0,
      name: 'Toasty',
      imgSrc: 'img/cat_picture5.jpeg',
      nickNames: ['Toast','T']
  }
];

// Cat object
var cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickNames = ko.observableArray(data.nickNames);

  //computing the title acc. to level
  this.title = ko.computed( function() {
    var title;
    var clicks = this.clickCount();
    if (clicks < 10) {
      title = 'NewBorn';
    }
    else if (clicks < 15) {
      title = 'Infant';
    }
    else if (clicks < 20){
      title = 'Child';
    }
    else if (clicks < 25){
      title = 'Adult';
    }
    else {
      title = 'Ninja';
    }

    return title;
  }, this);
};

// we have to make cats showup in a list
// and them make them clickable
var viewModel = function() {

  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  // function to increment click count
    this.incrementCounter = function(){
      this.clickCount(this.clickCount() + 1);  
  };

  //to change currentCat
  this.setCat = function(clickedCat){
    self.currentCat(clickedCat);
  };
};

ko.applyBindings(new viewModel());
