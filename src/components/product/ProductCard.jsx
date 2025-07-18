import React, {useEffect} from 'react'
import Hero from "../Hero/Hero.jsx";
import {ToastContainer} from "react-toastify";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import ProductImage from "../utils/ProductImage.jsx";
import Paginator from "../common/Paginator.jsx";
import {getAllProducts } from "../store/features/productSlice"
import {useDispatch, useSelector} from "react-redux";

const ProductCard = ({products}) => {
    return (
        <Hero></Hero>
    <div className="d-flex flex-wrap justify-content-center p-5">
        <ToastContainer></ToastContainer>
        {currentProducts && currentProducts.map((product) => (
            <Card key={product.id} className="home-product-card">
                <Link to={"#"} className="link"><div className="image-container">
                    {product.images.length > 0 && (
                        <ProductImage productId={product.images[0].id}></ProductImage>
                    )}
                </div></Link>
                <Card.Body>
                    <p className="product-description">
                        {product.name} - {product.description}
                    </p>
                    <h4 className="price">{product.price}</h4>
                    <p className="text-success">{product.inventory}</p>
                    <Link to={`products/${product.name}`} className="shop-now-button">
                        {"  "}
                        Shop now
                    </Link>
                </Card.Body>
            </Card>
        ))}

        <Paginator
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            currentPage={currentPage}
            paginate={paginate} />
    </div>
</>
    )
}
export default ProductCard
