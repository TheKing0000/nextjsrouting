interface IProduct {
  params: {
    productId: string;
  };
}
export default function Product({ params }: IProduct) {
  const { productId } = params;
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>
        Product <span className="text-2xl"> =&gt; {productId}</span>
      </h1>
    </div>
  );
}
