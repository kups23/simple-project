import { notFound } from "../../../../node_modules/next/navigation";

const ProductDetails = async ({ params }: { params: Promise<{ productId: string }> }) => {
  const productId = (await params).productId;
  if (parseInt(productId) > 99) {
    return notFound()
  }

  return (
    <main className='h-screen bg-gray-100 text-gray-900 p-5'>
      <div className='font-bold'>Details of product id: { productId}</div>
      </main>
  )
}

export default ProductDetails