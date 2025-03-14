import { useState, useContext, useEffect } from "react";

export const ItemCount = ({
  stock,
  initial,
  inCart,
  onAmountChange,
  globalAmountAdded,
}) => {
  const [amount, setAmount] = useState(initial);

  const add = (addition) => {
    if (amount + addition + inCart <= stock && amount + addition >= 0) {
      setAmount(amount + addition);
      onAmountChange(amount + addition);
    } else {
      setAmount(amount);
    }
  };

  useEffect(() => {
    setAmount(globalAmountAdded);
  }, [globalAmountAdded]);

  return (
    <div className="flex items-center justify-center gap-x-2">
      <button
        onClick={() => add(-1)}
        className={`${
          globalAmountAdded === 0
            ? "bg-zinc-500 hover:bg-zinc-600 focus:bg-zinc-600 active:bg-zinc-600"
            : "bg-[#0081a3] focus:bg-[#5ca3b7] active:bg-[#5ca3b7]"
        } transition-colors duration-200 text-white font-bold py-2 px-4 rounded-lg`}
      >
        -
      </button>
      <input
        type="number"
        value={globalAmountAdded}
        onChange={(e) => {
          const newValue = Math.max(0, Math.min(stock, e.target.value));
          setAmount(newValue);
          onAmountChange(newValue);
        }}
        className="bg-zinc-100/20 rounded-xl p-2 w-12 text-center [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        onClick={() => add(1)}
        className={`${
          stock - inCart <= amount
            ? "bg-zinc-500 hover:bg-zinc-600 focus:bg-zinc-600 active:bg-zinc-600"
            : "bg-[#0081a3] focus:bg-[#5ca3b7] active:bg-[#5ca3b7]"
        } transition-colors duration-200 text-white font-bold py-2 px-4 rounded-lg`}
      >
        +
      </button>
    </div>
  );
};
