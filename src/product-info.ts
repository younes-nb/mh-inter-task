import productImg from "./assets/images/product.png";
import productThumb from "./assets/images/product-thumb.png";
import {Product} from "./types";

export const product: Product = {
  title: 'عنوان محصول عنوان محصول عنوان محصول ',
  rate: 4,
  description:
    'توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول'
  ,
  price: '۴۶۰,۰۰۰',
  discount: '۲۰',
  code: '۱۲۳۴۵۶',
  store: 'مهراشاپ',
  tags: ['روغن درمانی', 'روغن درمانی'],
  options: ['۲ لیتر', '۱.۵ لیتر', '۱ لیتر'],
  isOriginal: false,
  properties: [
    {
      name: 'نوع عسل',
      value: 'چهل گیاه'
    },
    {
      name: 'میزان قند',
      value: 'صفر'
    },
    {
      name: 'مناسب برای',
      value: 'بیماران دیابتی'
    }
  ],
  images: [
    {
      image: productImg,
      thumb: productThumb
    },
    {
      image: productImg,
      thumb: productThumb
    },
    {
      image: productImg,
      thumb: productThumb
    },
    {
      image: productImg,
      thumb: productThumb
    },
  ],

}


export const rate = 4;