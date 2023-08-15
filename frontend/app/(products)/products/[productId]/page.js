'use client'

import PhoneMain from '../../../../Components/PhoneMain'
const ProductPage = ({params}) => {

    return ( 
        <>
        
        <PhoneMain productId={params.productId}/>
        </>
     );
}
 
export default ProductPage;