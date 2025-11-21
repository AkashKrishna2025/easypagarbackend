import React from 'react';
import './Products.css';
import WHITE from '../../../public/images/WHITE.jpg';
import program_icon_1 from '../../../public/images/program-icon-1.png';
import program_icon_2 from '../../../public/images/program-icon-2.png';
import program_icon_3 from '../../../public/images/program-icon-3.png';
import whitearrow from '../../../public/images/white-arrow.png';

const productData = [
  {
    id: 1,
    imgSrc: WHITE,
    iconSrc: program_icon_1,
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 2,
    imgSrc: WHITE,
    iconSrc: program_icon_2,
    title: 'Product 2',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    id: 3,
    imgSrc: WHITE,
    iconSrc: program_icon_3,
    title: 'Product 3',
    description: 'Lorem ipsum dolor sit amet.',
  },
];

const Products = () => {
  return (
    <>
      <div className="products">
        {productData.map((product, index) => (
          <div key={product.id} className="product">
            {/* Main product image → LCP optimization */}
            <img
              src={product.imgSrc}
              alt={product.title}
              width="600"
              height="400"
              fetchpriority={index === 0 ? "high" : "auto"} 
              loading={index === 0 ? "eager" : "lazy"} 
            />
            <div className="caption">
              {/* Icons → lazy load to save LCP */}
              <img
                src={product.iconSrc}
                alt={`${product.title} icon`}
                width="64"
                height="64"
                loading="lazy"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="maincont">
        <button className="btn dark-btn">
          More Products
          <img
            src={whitearrow}
            alt="Arrow"
            width="16"
            height="16"
            loading="lazy"
          />
        </button>
      </div>
    </>
  );
};

export default Products;
