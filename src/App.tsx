import ProductDetails from "./containers/ProductDetails";
import {product} from "./product-info";

function App() {
  return (
    <div className="sm:px-20 px-10 pt-40 pb-16">
      <ProductDetails product={product}/>
    </div>
  )
}

export default App
