const ProductCard = ({ item, deleteProd, updateProd }) => {
    return (
      <li id={item.name}>
        {`${item.name} | ${item.count} |${item.price}  `}
        <button onClick={() => deleteProd(item.name)}>Delete</button>
        <button onClick={() => updateProd(item)}>Update</button>
      </li>
    );
  };
  
  export default ProductCard;
  