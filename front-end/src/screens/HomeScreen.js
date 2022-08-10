import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useParams } from "react-router-dom";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { keyword, pageNumber } = useParams();
  let pageWanted = 1;
  pageNumber ? (pageWanted = pageNumber) : (pageWanted = 1);
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageWanted));
  }, [dispatch, keyword, pageWanted]);
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h2>Latest Products</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Container className="w-40 h-30">
                  <Product product={product} />
                </Container>
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
