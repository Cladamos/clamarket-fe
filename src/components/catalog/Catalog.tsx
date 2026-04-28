import { useQuery } from "@tanstack/react-query"
import { CatalogFilters } from "./CatalogFilters"
import { ProductCard } from "./ProductCard"

export type Product = {
  id: string
  name: string
  description: string
  price: number
}

export function Catalog() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const res = await fetch("http://localhost:8080/api/products")
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
    <div className="flex flex-row gap-8 w-full">
      <CatalogFilters />
      <div className="grid grid-cols-3 gap-4 w-full">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
