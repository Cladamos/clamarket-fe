import { Card, Image, Text } from "@mantine/core"
import type { Product } from "./Catalog"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card h={350}>
      <Card.Section h={200}>
        <Image src="https://placehold.co/200x200/png" h={200} />
      </Card.Section>

      <Card.Section p="md" h={150}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <Text fw="semibold">{product.name}</Text>
            <Text size="sm" c="dimmed" truncate="end" lineClamp={3}>
              {product.description}
            </Text>
          </div>
          <Text>{product.price}$</Text>
        </div>
      </Card.Section>
    </Card>
  )
}
