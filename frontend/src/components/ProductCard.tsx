import Link from "next/link";
import styles from "@/styles/components/ProductCard.module.scss";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <Link href={`/products/${id}`}>
        View Product
      </Link>
    </div>
  );
}