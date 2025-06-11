import React from 'react'
import { useState } from 'react'
import Hero from '../Hero/Hero.jsx'
import Paginator from '../common/Paginator.jsx'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ProductImage from "../utils/ProductImage.jsx";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); //products returned from search


    const [currentPage, setCurrentPage] = useState([]);
    const itemsPerPage = 10;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    return (
        <>
            <Hero></Hero>
            <div className="d-flex flex-wrap justify-content-center p-5">
            {products.map((product) => (
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
export default Home
