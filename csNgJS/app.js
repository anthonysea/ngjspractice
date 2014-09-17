(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller("PanelController", function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// Custom Directives - wack-ass not working
	/*
	app.directive('productReviews', function() {
		return {
			restrict: "E",
			templateUrl: "product-reviews.html"
		};
	});

	app.directive('productSpecs', function() {
		return {
			restrict: "A",
			templateUrl: "product-specs.html"
		};
	});
	*/


	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Deodecahedron is one of those gems.',
		canPurchase: true,
		soldOut: false,
		shine: 8,
		rarity: 7,
		faces: 12,
		images: [
			'images/gem-01.gif'
		],
		reviews: [{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		},
		{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		},
		{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		}
		]
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
		canPurchase: true,
		soldOut: false,
		shine: 10,
		rarity: 10,
		faces: 5,
		images: [
			'images/gem-02.gif'
		],
		reviews: [{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		},
		{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		},
		{
			stars: 4,
			body: 'This gem is truely amazing',
			author: 'Lil B'
		}
		]
	}];

})();