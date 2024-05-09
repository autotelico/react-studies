import { useState, useEffect, useMemo } from 'react';

export default function ProductList(): React.ReactNode {
  const [products, setProducts] = useState([]);
  const [dependency, setDependency] = useState(0);

  const fetchProductList = useMemo(
    () => async () => {
      try {
        console.time('timer')
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        setProducts(data.results);
        console.log(data);
        console.timeEnd('timer')
      } catch (error) {
        console.error('Error fetching stuff:', error);
      }
    },
    [dependency]
  );

  useEffect(() => {
    fetchProductList();
  }, [fetchProductList]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products &&
          products.map((product: any) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
      <button onClick={() => setDependency(dependency + 1)}>
        Click to Refresh Product List
      </button>
    </div>
  );
}
