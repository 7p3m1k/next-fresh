import { age, name } from "./data";

export default function Cart() {
  let item = ["tomato", "banana"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={item[0]} />
      <CartItem item={item[1]} />
      <Banner content="롯데카드" />
      <Banner content="삼성카드" />
      <Btn color="blue" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

const Btn = (props) => {
  return (
    <>
      <button style={{ background: props.color }}>버튼</button>
    </>
  );
};

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
