'use strict';

/**
 * @ngdoc constant
 * @name xebiaApp
 * @description
 * # xebiaApp
 *
 * Constants of the application.
 */
angular.module("xebiaApp")
  .constant('fruitDetail', {
    apple: {
      properties: {
        calories: {rating: 90},
        carotenoid: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        fiber: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        folates: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        pottasium: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        vitaminC: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        }
      },
      description: "Eat one every day to keep the doctor away!",
      img: "http://nobacks.com/wp-content/uploads/2014/11/Red-Apple-7.png",
      price: 12.00
    },
    grape: {
      properties: {
        calories: {rating: 70},
        carotenoid: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        fiber: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        folates: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        pottasium: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        vitaminC: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        }
      },
      description: "Wine is great but grape is better !",
      img: "http://www.pngall.com/wp-content/uploads/2016/04/Grape-Download-PNG.png",
      price: 11.00
    },
    grapefruit: {
      properties: {
        calories: {rating: 95},
        carotenoid: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        fiber: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        folates: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        pottasium: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        vitaminC: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        }
      },
      description: "Pink or red always healthy and delicious !",
      img: "https://d15mj6e6qmt1na.cloudfront.net/files/images/0624/8225/grapefruit_300.jpg",
      price: 11.00
    },
    papaya: {
      properties: {
        calories: {rating: 90},
        carotenoid: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        fiber: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        folates: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        pottasium: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        vitaminC: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        }
      },
      description: "Super-popular for breakfast !",
      img: "http://images.wisegeek.com/cut-papaya.jpg",
      price: 5.00
    },
    pineapple: {
      properties: {
        calories: {rating: 90},
        carotenoid: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        fiber: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        },
        folates: {
          rating: 0,
          desc: "Negligible: below 5% of the recommended daily value"
        },
        pottasium: {
          rating: 1,
          desc: "Low: between 5 and 10% of the recommended daily value"
        },
        vitaminC: {
          rating: 2,
          desc: "Average: between 10 and 20% of the recommended daily value"
        }
      },
      description: "Enjoy it (but dont forget to peel first) !",
      img: "https://thumb1.shutterstock.com/display_pic_with_logo/3312824/361797158/stock-vector-pineapple-isolated-vector-pineapple-slice-of-pineapple-composition-of-pineapple-and-slice-361797158.jpg",
      price: 4.00
    }
  });
