interface IOrder {
  params: {
    orderId: string;
  };
}
export default function Order({ params }: IOrder) {
  const { orderId } = params;
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>
        Order <span className="text-2xl"> =&gt; {orderId}</span>
      </h1>
    </div>
  );
}
