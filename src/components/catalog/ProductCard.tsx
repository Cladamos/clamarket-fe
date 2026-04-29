import { Card, Image, Text } from "@mantine/core"
import type { Product } from "./Catalog"
import { useNavigate } from "react-router"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()
  return (
    <Card className="cursor-pointer hover:scale-101 transition-all duration-200" h={380} onClick={() => navigate(`/catalog/${product.id}`)}>
      <Card.Section h={200}>
        <Image src="https://placehold.co/200x200/png" h={200} />
      </Card.Section>

      <Card.Section p="md" h={180}>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-1">
            <Text fw="semibold">{product.name}</Text>
            <Text lineClamp={3} size="sm" c="dimmed">
              {product.description}
            </Text>
          </div>
          <Text>{product.price}$</Text>
        </div>
      </Card.Section>
    </Card>
  )
}
