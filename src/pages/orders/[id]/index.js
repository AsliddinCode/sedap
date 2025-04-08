import { useParams } from "next/navigation";
import orderListData from "../../../components/pages/orders/Data";
function OrderDetail() {
  const route = useParams();
  const currentOrder = orderListData.find((item) => {
    if (item.userId === parseInt(route?.id)) {
      return true;
    }
  });
  console.log("OrderDetail", currentOrder);
  return <div>Bu order detail</div>;
}

export default OrderDetail;
