export const metadata = {
  title: "Products | Zealoops",
  description: `Explore the innovative range of Zealoops products, including cutting-edge electric cycles and pedal-assist bikes. Designed for performance, durability, and style, our products cater to everyone from casual riders to professional cyclists. Discover the perfect ride for your needs.`,
  keywords: "products, Zealoops products, electric cycles, e-bikes, pedal-assist bikes, innovative bikes, high-performance cycles, durable e-bikes, stylish cycles, eco-friendly bikes, cycling solutions, electric bike features, energy-efficient cycles, commuter bikes, mountain e-bikes, hybrid bikes, all-terrain bikes, premium electric bikes, cycling accessories, Zealoops product range, electric bike models, professional cycling gear",
};

import Products from "./productCard";
import ProductDetails from "./productDetails";
import ProductSpecifications from "./productSpecification";
export default function Product() {
  return (
      <main>
        <Products/>
        <ProductSpecifications/>
        <ProductDetails/>
      </main>
  );
}
