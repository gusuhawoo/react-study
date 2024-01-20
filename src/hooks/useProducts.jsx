import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    // When mounted.
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => setError('Error!'))
      .finally(() => setLoading(false));
    // Network communication when certain values change.
    return () => {
      console.log('checked');
    };
  }, [salesOnly]);
  return [loading, error, products];
}
