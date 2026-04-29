import { Image } from "@mantine/core"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"
import type { Product } from "./Catalog"

export function ProductDetail() {
  const { productId } = useParams()
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8080/api/products/${productId}`)
      return res.json()
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>{error.message}</div>
  }

  return (
    <div className="flex flex-row gap-16">
      <Image radius="md" src="https://placehold.co/400x400/png" h={400} w={400} />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-3xl font-semibold text-blue-300">{product.name}</p>
          <p className="text-xl text-blue-200">{product.price}$</p>
        </div>
        <p className="text-gray-500">{product.description}</p>
      </div>
    </div>
  )
}
