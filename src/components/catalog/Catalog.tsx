import { useQuery } from "@tanstack/react-query"
import { CatalogFilters } from "./CatalogFilters"
import { ProductCard } from "./ProductCard"
import { ActionIcon, Drawer, TextInput } from "@mantine/core"
import { IconFilter, IconSearch } from "@tabler/icons-react"
import { useState } from "react"

export type Product = {
  id: string
  name: string
  description: string
  price: number
}

export function Catalog() {
  const [isFiltersOpen, setFiltersOpen] = useState(false)
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <TextInput className="w-full" placeholder="Search products..." leftSection={<IconSearch size={18} />} />
        <ActionIcon hiddenFrom="md" size="input-sm" variant="light" onClick={() => setFiltersOpen((o) => !o)}>
          <IconFilter size={18} />
        </ActionIcon>
      </div>
      <div className="flex flex-row gap-8 w-full">
        <div className="hidden md:flex w-40">
          <CatalogFilters />
        </div>
        <Drawer size="90%" hiddenFrom="md" opened={isFiltersOpen} onClose={() => setFiltersOpen(false)} position="bottom">
          <CatalogFilters />
        </Drawer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
