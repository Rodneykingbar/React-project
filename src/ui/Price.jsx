import React from 'react';

const Price = ({salesPrice, originalPrice}) => {
  return (
    <div className="book__price">
      {salesPrice ? (
        <>
          <span className="book__price--normal">{(originalPrice).toFixed(2)}</span>
          {(salesPrice).toFixed(2)}
        </>
      ) : (
        <>
          <span className="book__price--normal"></span>
          {(originalPrice).toFixed(2)}
        </>
      )}
    </div>
  );
}

export default Price;
