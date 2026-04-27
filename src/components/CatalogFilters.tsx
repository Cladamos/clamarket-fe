import { Checkbox, Slider } from "@mantine/core"
import { useState } from "react"

const checkboxes = [
  {
    label: "All Products",
    value: "allProducts",
  },
  {
    label: "Books",
    value: "books",
  },
  {
    label: "Electronics",
    value: "electronics",
  },
  {
    label: "Clothing",
    value: "clothing",
  },
]

export function CatalogFilters() {
  const [checkboxStates, setCheckboxStates] = useState({
    allProducts: false,
    books: false,
    electronics: false,
    clothing: false,
  })
  const [priceSliderValue, setPriceSliderValue] = useState(100)

  const handleCheckboxChange = (value: string) => {
    setCheckboxStates({ ...checkboxStates, [value]: !checkboxStates[value] })
  }

  return (
    <div className="w-40 h-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-md">Categories</p>
          {checkboxes.map((c) => (
            <Checkbox size="xs" onChange={() => handleCheckboxChange(c.value)} checked={checkboxStates[c.value]} label={c.label} />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p>Price</p>
          <Slider
            marks={[
              { value: 0, label: "0$" },
              { value: 100, label: "500$" },
            ]}
            label={(v) => v * 5 + "$"}
            onChange={setPriceSliderValue}
            min={0}
            max={100}
            step={1}
            value={priceSliderValue}
          />
        </div>
      </div>
    </div>
  )
}
