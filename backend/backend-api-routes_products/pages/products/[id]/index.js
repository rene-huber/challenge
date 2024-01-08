
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetcher = url => fetch(url).then(res => res.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
 <>
    <h2>name: {data.name}</h2>
    <p>description:{data.description}</p>
    <p>price: {data.price}</p>
    <p>currency: {data.currency}</p>
    <p>category: {data.category}</p>

 </>
  );
}
