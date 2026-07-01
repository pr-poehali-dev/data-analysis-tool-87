import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PriceCalculatorProps {
  open: boolean
  onClose: () => void
}

const PRICE_PER_SQM = 500
const PRICE_PER_LAMP = 100
const PRICE_PER_CORNER = 100
const PRICE_PER_PIPE = 200
const PRICE_PER_CORNICE = 1000

export default function PriceCalculator({ open, onClose }: PriceCalculatorProps) {
  const [tab, setTab] = useState("dimensions")
  const [length, setLength] = useState("")
  const [width, setWidth] = useState("")
  const [area, setArea] = useState("")
  const [corners, setCorners] = useState("")
  const [pipes, setPipes] = useState("")
  const [lamps, setLamps] = useState("")
  const [cornices, setCornices] = useState("")
  const [result, setResult] = useState<number | null>(null)

  const calculate = () => {
    let sqm = 0
    if (tab === "dimensions") {
      sqm = parseFloat(length || "0") * parseFloat(width || "0")
    } else {
      sqm = parseFloat(area || "0")
    }

    const total =
      sqm * PRICE_PER_SQM +
      parseInt(lamps || "0") * PRICE_PER_LAMP +
      parseInt(corners || "0") * PRICE_PER_CORNER +
      parseInt(pipes || "0") * PRICE_PER_PIPE +
      parseInt(cornices || "0") * PRICE_PER_CORNICE

    setResult(total)
  }

  const reset = () => {
    setLength("")
    setWidth("")
    setArea("")
    setCorners("")
    setPipes("")
    setLamps("")
    setCornices("")
    setResult(null)
  }

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { reset(); onClose() } }}>
      <DialogContent className="bg-neutral-900 border-neutral-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Калькулятор стоимости</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          <Tabs value={tab} onValueChange={(v) => { setTab(v); setResult(null) }}>
            <TabsList className="bg-neutral-800 w-full">
              <TabsTrigger value="dimensions" className="flex-1 data-[state=active]:bg-neutral-600 data-[state=active]:text-white text-neutral-400">
                Длина × Ширина
              </TabsTrigger>
              <TabsTrigger value="area" className="flex-1 data-[state=active]:bg-neutral-600 data-[state=active]:text-white text-neutral-400">
                Площадь
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dimensions" className="mt-4 grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label className="text-neutral-300 text-sm">Длина (м)</Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="0.0"
                  value={length}
                  onChange={(e) => { setLength(e.target.value); setResult(null) }}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-neutral-300 text-sm">Ширина (м)</Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="0.0"
                  value={width}
                  onChange={(e) => { setWidth(e.target.value); setResult(null) }}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
                />
              </div>
            </TabsContent>

            <TabsContent value="area" className="mt-4">
              <div className="space-y-1">
                <Label className="text-neutral-300 text-sm">Площадь (м²)</Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="0.0"
                  value={area}
                  onChange={(e) => { setArea(e.target.value); setResult(null) }}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label className="text-neutral-300 text-sm">Углы (шт)</Label>
              <Input
                type="number"
                min="0"
                placeholder="0"
                value={corners}
                onChange={(e) => { setCorners(e.target.value); setResult(null) }}
                className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-300 text-sm">Трубы (шт)</Label>
              <Input
                type="number"
                min="0"
                placeholder="0"
                value={pipes}
                onChange={(e) => { setPipes(e.target.value); setResult(null) }}
                className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-300 text-sm">Светильники (шт)</Label>
              <Input
                type="number"
                min="0"
                placeholder="0"
                value={lamps}
                onChange={(e) => { setLamps(e.target.value); setResult(null) }}
                className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-neutral-300 text-sm">Скрытые карнизы (шт)</Label>
              <Input
                type="number"
                min="0"
                placeholder="0"
                value={cornices}
                onChange={(e) => { setCornices(e.target.value); setResult(null) }}
                className="bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500"
              />
            </div>
          </div>

          {result !== null && (
            <div className="bg-neutral-800 rounded-lg p-4 border border-[#FF4D00]/40">
              <p className="text-neutral-400 text-sm mb-1">Итоговая стоимость работ</p>
              <p className="text-3xl font-bold text-[#FF4D00]">
                {result.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-neutral-500 text-xs mt-2">* Точная цена уточняется после выезда замерщика</p>
            </div>
          )}

          <Button
            onClick={calculate}
            className="w-full bg-[#FF4D00] hover:bg-[#e04400] text-white font-semibold py-3"
          >
            Рассчитать стоимость
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
