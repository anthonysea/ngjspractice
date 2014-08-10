(function() {
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gems = [{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Deodecahedron is one of those gems.',
			canPurchase: true,
			soldOut: true,
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
			canPurchase: false,
			soldOut: false,
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
		}
	];

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
			product.reviews.push(this.review);
			this.review = {};
		};
	});

})();