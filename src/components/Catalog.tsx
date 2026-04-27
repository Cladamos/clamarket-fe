import { Card } from "@mantine/core"
import { CatalogFilters } from "./CatalogFilters"

export function Catalog() {
  return (
    <div className="flex flex-row gap-8 w-full h-screen">
      <CatalogFilters />
      <div className="grid grid-cols-3 gap-4 w-full h-full">
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
      </div>
    </div>
  )
}
