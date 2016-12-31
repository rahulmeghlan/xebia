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
  .constant("fruits", [{
    name: "Apple",
    desc: "Eat one every day to keep the doctor away !",
    price: 12.00,
    image: "http://nobacks.com/wp-content/uploads/2014/11/Red-Apple-7.png"
  },
    {
      name: "Grape",
      desc: "Wine is great but grape is better !",
      price: 11.00,
      image: "http://www.pngall.com/wp-content/uploads/2016/04/Grape-Download-PNG.png"
    },
    {
      name: "Grapefruit",
      desc: "Pink or red always healthy and delicious !",
      price: 11.00,
      image: "https://d15mj6e6qmt1na.cloudfront.net/files/images/0624/8225/grapefruit_300.jpg"
    },
    {
      name: "Papaya",
      desc: "Super-popular for breakfast !",
      price: 5.00,
      image: "http://images.wisegeek.com/cut-papaya.jpg"
    },
    {
      name: "Pineapple",
      desc: "Enjoy it (but dont forget to peel first) !",
      price: 4.00,
      image: "https://thumb1.shutterstock.com/display_pic_with_logo/3312824/361797158/stock-vector-pineapple-isolated-vector-pineapple-slice-of-pineapple-composition-of-pineapple-and-slice-361797158.jpg"

    }
  ]);
