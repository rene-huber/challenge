import useSWR from 'swr';
import Link from 'next/link';

const fetcher = url => fetch(url).then(res => res.json());

export default function AllProducts() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map(product => (
 
          
            <div key={product.id}>
            <Link  href={`/products/${product.id}`}>
              <h2>name: {product.name}</h2>
              </Link>
              <p>description: {product.description}</p>
              <p>price: {product.price}</p>
              <p>currency: {product.currency}</p>
              <p>category: {product.category}</p>
            </div>
       
       
      ))}
    </div>
  );
}