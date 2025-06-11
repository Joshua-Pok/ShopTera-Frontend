import React, {useEffect} from 'react'
import { useState } from 'react'

const ProductImage = ({ productId }) => {

    const [productImg, setProductImg] = useState(null);

    useEffect(() => {
        const fetchProductImg = async (id) => {
            try{
                const response = await fetch(`http://localhost:9090/api/v1/images/image/download/${id}`);
                const blob = await response.blob();
                const reader = new FileReader();
                reader.onloadend = (e) => {
                    setProductImg(reader.result);
                }
                reader.readAsDataURL(blob);

            }catch(error){
                console.error(error)
            }
        };

        if(productId){
            fetchProductImg(productId);
        }
    }, [productId]);

    if(!productId) return null;

    return (

        <div>
            <img src={productImg} alt="Product Image"/>
        </div>
    )
}
export default ProductImage
