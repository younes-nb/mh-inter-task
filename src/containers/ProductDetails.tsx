import Slider from "../components/Slider";
import leaf from '../assets/images/leaf.svg';
import save from '../assets/images/save.svg';
import compare from '../assets/images/compare.svg';
import Stars from "../components/Stars";
import {Product} from "../types";
import ToggleGroup from "../components/ToggleGroup";
import Counter from "../components/Counter";
import shoppingCart from "../assets/images/shopping-cart.svg";
import arrowLeft from "../assets/images/arrow-left.svg";
import instagram from "../assets/images/instagram .svg";
import telegram from "../assets/images/telegram.svg";
import twitter from "../assets/images/twitter.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import link from "../assets/images/link.svg";
import fast from "../assets/images/fast.svg";
import returning from "../assets/images/returning.svg";
import warranty from "../assets/images/warranty.svg";
import shop from "../assets/images/shop.svg";
import "./ProductDetails.css"


function ProductDetails({product}: { product: Product }) {
  return (
    <section className="flex xl:flex-row flex-col">
      <main className="basis-4/5 me-12 flex lg:flex-row flex-col">
        <div
          className="basis-3/7 me-12 flex sm:flex-row flex-col lg:order-1 order-2 lg:justify-start justify-between lg:my-0 my-12">
          <div className="flex sm:flex-col sm:justify-start flex-row justify-between me-8">
            <div className="sm:mb-10 sm:me-0 me-10 flex sm:flex-col flex-row">
              <img src={leaf} alt="leaf"/>
              <img src={leaf} alt="leaf" className="sm:my-2 sm:mx-0 mx-2"/>
              <img src={leaf} alt="leaf"/>
            </div>
            <div className="flex sm:flex-col flex-row">
              <img src={save} alt="save" className="cursor-pointer"/>
              <img src={compare} alt="compare" className="cursor-pointer"/>
            </div>
          </div>
          <div className="mt-16">
            <Slider images={product.images}/>
          </div>
        </div>
        <div className="basis-4/7 lg:order-2 order-1">
          <div>
            <h1 className="text-2xl mb-4 text-gray-5">{product.title}</h1>
            <div className="flex justify-between">
              <Stars rate={product.rate}/>
              {
                !product.isOriginal ? <p className="text-error">
                  <span className="border rounded-md text-xs px-1">!</span>
                  کالای غیر اصل
                </p> : <p></p>
              }
            </div>
            <p className="text-gray-4 mt-5">{product.description}</p>
            <ul className="mt-5">
              {
                product.properties.map((property) => <li className="text-gray-4"><span
                  className="font-bold text-gray-5">{property.name}:</span> {property.value}</li>)
              }
            </ul>
            <div className="flex sm:flex-row flex-col sm:justify-between items-center mt-12">
              <div>
                <ToggleGroup options={product.options}/>
                <div className="sm:mt-20 sm:w-full my-10 w-48">
                  <Counter/>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex sm:justify-end justify-center opacity-50 mb-3">
                    <span className="line-through text-primary text-xl me-3">{product.price}</span>
                    <span className="p-1 bg-primary text-white rounded-md">٪ {product.discount}</span>
                  </div>
                  <div className="text-xs text-gray-3 sm:text-left text-center"><span
                    className="text-2xl text-primary font-bold">{product.price}</span> تومان
                  </div>
                </div>
                <div className="mt-10">
                  <button className="px-4 py-3 bg-primary text-white rounded">
                    <img className="inline" src={shoppingCart} alt="shopping cart"/> افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
            <ul className="mt-12 lg:mb-12">
              <li className="text-sm text-gray-5 mb-3">کد کالا: <span className="text-gray-3">{product.code}</span></li>
              <li className="text-sm text-gray-5 mb-3">نام فروشگاه: <span
                className="text-primary underline decoration-dotted">
                {product.store}
                <img className="inline ps-2" src={arrowLeft} alt="arrow left"/>
              </span></li>
              <li className="text-sm text-gray-5 mb-3">تگ ها: {
                product.tags.map((tag) => <span className="text-gray-3 underline decoration-dotted me-2">{tag}</span>)
              }</li>
              <li className="flex text-sm text-gray-5">اشتراک گذاری:
                <img className="me-4 ms-2" src={telegram} alt="telegram"/>
                <img className="me-4" src={twitter} alt="twitter"/>
                <img className="me-4" src={instagram} alt="instagram"/>
                <img className="me-4" src={whatsapp} alt="whatsapp"/>
                <img className="me-4" src={link} alt="link"/>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <aside className="basis-1/5">
        <div className="grid gap-4 xl:grid-cols-1 sm:grid-cols-2">
          <article className="flex items-center px-4 py-3 border border-deactive rounded">
            <img src={fast} alt="fast" className="basis-1/5"/>
            <div className="ms-3">
              <p className="text-sm mb-2">ارسال با پست سریع</p>
              <p className="text-xs text-gray-4">ارسال با پست ویژه (۳ روزه)</p>
            </div>
          </article>
          <article className="flex items-center px-4 py-3 border border-deactive rounded">
            <img src={returning} alt="returning" className="basis-1/5"/>
            <div className="ms-3">
              <p className="text-sm mb-2">مرجوعی تا ۷ روز</p>
              <p className="text-xs text-gray-4">در صورت وجود مشکل در کالا</p>
            </div>
          </article>
          <article className="flex items-center px-4 py-3 border border-deactive rounded">
            <img src={warranty} alt="warranty" className="basis-1/5"/>
            <div className="ms-3">
              <p className="text-sm mb-2">ضمانت ۶ ماهه</p>
              <p className="text-xs text-gray-4">در صورت وجود مشکل در کالا</p>
            </div>
          </article>
          <article className="flex items-center px-4 py-3 border border-deactive rounded">
            <img src={shop} alt="shop" className="basis-1/5"/>
            <div className="ms-3">
              <p className="text-sm mb-2">امکان خرید حضوری</p>
              <p className="text-xs text-gray-4 underline decoration-dotted">پروفایل فروشگاه &gt;</p>
            </div>
          </article>
        </div>
        <div dir="ltr" id="sidenav-card" className="p-4 rounded mt-8">
          <p className="text-sm">TASTY HEALTHY</p>
          <p className="text-xl font-bold mb-2">FRESH</p>
          <p className="text-xl font-bold">VEGETABLES <span
            className="text-xs text-gray-4 cursor-pointer">| SHOP NOW</span></p>
        </div>
      </aside>
    </section>
  )
}

export default ProductDetails