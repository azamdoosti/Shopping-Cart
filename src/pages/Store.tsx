import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";

const Store = () => {
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
          // <Col> {JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
