import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 17",
    price: 99999,
    image: "/images/iphone.jpg",
  },
  {
    id: 2,
    name: "MacBook",
    price: 149999,
    image: "/images/macbook.jpg",
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <h1
          style={{
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          Welcome to LocalDelivery
        </h1>

        <p>
          Shop products online and get them delivered.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </main>
  );
}