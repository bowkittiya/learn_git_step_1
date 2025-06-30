
import { useNavigate } from 'react-router-dom'
import ProductList from '../components/products/productList'

const HomePage = () => {
    const navigate = useNavigate();

    const handleViewDetail = (productId) => {
        navigate(`/products/${productId}`);
    };

    return (
        <div className="home-page">
            <h1> ยินดีต้อนรับสู่ร้านค้าออนไลน์ </h1>
            <ProductList onViewDetail={handleViewDetail} />
        </div>
    );
}
export default HomePage;