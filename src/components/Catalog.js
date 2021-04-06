import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

const Catalog = ({ data }) => {
  const [dataset, setDataset] = useState(data);
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      setDataset(data);
    } else {
      setDataset(data.filter((item) => item.albumId === id));
    }
  }, [id, data]);

  return (
    <div style={style}>
      {dataset.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <ProductCard info={item} />
        </Link>
      ))}
    </div>
  );
};

export default Catalog;
