
import ProductCard from "components/ProductCard";
import { Product } from "pages/types/product";
import { Link } from "react-router-dom";

import './styles.css';

const Catalog = () => {

    const product: Product = {
        id: 2,
        name: 'Smart TV',
        description:
            'Poduto de alta qualidade',
        price: 2190.0,
        imgUrl:
            'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
        date: '2020-07-14T10:00:00Z',
        categories: [
            {
                id: 1,
                name: 'Livros',
            },
            {
                id: 3,
                name: 'Computadores'
            },
        ],
    };
    return (

        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Catálogo de produtos</h1>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to="/product/1">
                        <ProductCard product={product} />
                    </Link>
                </div>

            </div>

        </div>

    );
}

export default Catalog;