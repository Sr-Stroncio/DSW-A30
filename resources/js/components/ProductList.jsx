import { useEffect, useState } from "react";
import axios from "axios";
import '../../css/ProdcutList.css';

export function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://a30.test/api/products")
            .then(response => {
                console.log("DATOOSS", response.data);
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="product-container">
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imagen} alt="Producto" className="product-image" />
                        <p className="product-text">{product.texto}</p>
                    </div>
                ))
            ) : (
                <p className="loading-text">Cargando productos...</p>
            )}
        </div>
    );
}

export default ProductList;
