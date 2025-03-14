export const Thanks = ({ orderId }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 48 48"
        className="text-green-500"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="m24 10.84l-11.4 6.58v13.16L24 37.16l11.4-6.58V17.42z" />
          <circle cx="8.07" cy="14.8" r="3.11" />
          <circle cx="24" cy="5.61" r="3.11" />
          <circle cx="39.93" cy="14.8" r="3.11" />
          <circle cx="39.93" cy="33.2" r="3.11" />
          <circle cx="24" cy="42.39" r="3.11" />
          <circle cx="8.07" cy="33.2" r="3.11" />
          <path d="m12.6 30.58l-1.84 1.06M24 37.16v2.12m0-28.44V8.71m11.4 21.87l1.84 1.06M35.4 17.42l1.84-1.06M12.6 17.42l-1.84-1.06" />
        </g>
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <path d="M28.993 27.3c-1.488 1.156-3.054 1.67-4.993 1.67c-1.938 0-3.505-.514-4.993-1.67" />
          <circle cx="19.484" cy="21.621" r="2.592" />
          <circle cx="28.516" cy="21.621" r="2.592" />
        </g>
      </svg>
      <h3>¡Gracias por tu compra en ReactClothes!</h3>
      <h4>Tu pedido ha sido enviado con éxito!</h4>
      <p>
        El id de tu orden es: <strong>{orderId}</strong>
      </p>
    </>
  );
};
