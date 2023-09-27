import { Card } from "react-bootstrap";

interface StoreItemProps {
  id: number;
  name: string;
  price: Number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-felx flex-column">
          <Card.Title
            className="d-fles justify-content-space-between
            align-items-baseline mb-4"
          >
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{price}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StoreItem;
