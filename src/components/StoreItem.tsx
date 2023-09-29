import { Card } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

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
            className="d-fles justify-content -between
            align-items-baseline mb-4"
          >
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StoreItem;
