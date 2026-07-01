import { Badge } from "@/components/ui/badge"

const prices = [
  { type: "Матовый", desc: "Классика на все времена", price: "от 350 ₽/м²", color: "border-neutral-600" },
  { type: "Глянцевый", desc: "Эффект зеркала, визуально увеличивает пространство", price: "от 450 ₽/м²", color: "border-[#FF4D00]" },
  { type: "Сатиновый", desc: "Мягкий блеск, универсален для любой комнаты", price: "от 400 ₽/м²", color: "border-neutral-600" },
  { type: "Многоуровневый", desc: "Сложные конструкции с подсветкой", price: "от 800 ₽/м²", color: "border-neutral-600" },
  { type: "С фотопечатью", desc: "Любой рисунок или фото на потолке", price: "от 900 ₽/м²", color: "border-neutral-600" },
  { type: "Парящий", desc: "Световая линия по периметру, эффект левитации", price: "от 700 ₽/м²", color: "border-neutral-600" },
]

const PricesGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-4xl">
    {prices.map((p) => (
      <div key={p.type} className={`border ${p.color} rounded-xl p-4 bg-white/5 backdrop-blur-sm`}>
        <p className="text-white font-semibold text-base">{p.type}</p>
        <p className="text-neutral-500 text-xs mt-1">{p.desc}</p>
        <p className="text-[#FF4D00] font-bold text-lg mt-3">{p.price}</p>
      </div>
    ))}
  </div>
)

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Натяжные потолки в Ярославле</Badge>,
    title: "Идеальный потолок за 1 день.",
    showButton: true,
    buttonText: 'Рассчитать стоимость',
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/f66c3170-8c75-4979-940b-78e38500bee8.jpg'
  },
  {
    id: 'about',
    title: 'Почему мы?',
    content: 'Работаем в Ярославле более 10 лет. Собственное производство, качественные материалы и гарантия 15 лет на каждый потолок.',
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/48337789-0282-49ca-b550-802d69b118b8.jpg'
  },
  {
    id: 'services',
    title: 'Что мы делаем',
    content: 'Матовые, глянцевые и сатиновые потолки, многоуровневые конструкции, парящие потолки с подсветкой и фотопечать по вашему дизайну.',
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/86fdaf20-9d28-466d-93f5-09a3b5d065a6.jpg'
  },
  {
    id: 'prices',
    title: 'Цены на потолки',
    customContent: <PricesGrid />,
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/f1847b93-5d47-463f-b962-d51b28e20216.jpg'
  },
  {
    id: 'testimonials',
    title: 'Нам доверяют',
    content: '«Установили за один день, без грязи и пыли. Потолок ровный, мастера аккуратные — рекомендую!» — Ирина, Ярославль.',
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/b47d2f63-3b2b-4398-972c-457b27459852.jpg'
  },
  {
    id: 'contact',
    title: 'Закажите замер',
    content: 'Бесплатный выезд замерщика по Ярославлю и области. Точный расчёт стоимости и договор с фиксированной ценой.',
    showButton: true,
    buttonText: 'Заказать замер',
    bgImage: 'https://cdn.poehali.dev/projects/ff2075b8-e3c6-4297-acfd-0eee0b5f0792/files/fb157b98-f370-49d5-a969-8bffb48abca0.jpg'
  },
]