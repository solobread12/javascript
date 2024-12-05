import { products } from "./data";

const Jalankan = () => {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "16px" }}>
      {products.map((product) => {
        const showPrice = parseInt(product.price.replace(/\D/g, "")) > 4000000;

        return (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "200px",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100%", borderRadius: "4px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {showPrice && (
              <p>
                <strong>Harga: {product.price}</strong>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Jalankan;