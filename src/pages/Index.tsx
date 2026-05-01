import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ebbe9df6-9d95-438e-8cfc-08c8945d051e/files/832e1261-a320-4ec1-bc0b-8b27760347b5.jpg";

const CLIENTS = [
  { label: "Продуктовые магазины", icon: "Store" },
  { label: "Продуктовые сети", icon: "Building2" },
  { label: "Кафе и кофейни", icon: "Coffee" },
  { label: "Школьные столовые", icon: "UtensilsCrossed" },
  { label: "Офисы и корпорации", icon: "Briefcase" },
];

const ASSORTMENT = [
  {
    category: "Печенье",
    emoji: "🍪",
    items: ["Песочное печенье", "Зоологическое печенье", "Овсяное печенье"],
  },
  {
    category: "Пряники",
    emoji: "🫚",
    items: ["Пряники имбирные", "Тульские пряники", "Пряники глазированные"],
  },
  {
    category: "Сухари",
    emoji: "🍞",
    items: ["Сухари ванильные", "Сухари с маком", "Сухари сдобные"],
  },
  {
    category: "Сушки",
    emoji: "🍩",
    items: ["Сушки простые", "Сушки с маком", "Баранки горчичные"],
  },
  {
    category: "Конфеты",
    emoji: "🍬",
    items: ["Карамель «Барбарис»", "Ириски сливочные", "Конфеты помадные"],
  },
  {
    category: "Пирожные",
    emoji: "🧁",
    items: ["Эклеры со сгущёнкой", "Трубочки с кремом", "Корзиночки с джемом"],
  },
];

const CONDITIONS = [
  { icon: "PackageCheck", title: "Оптовые поставки", desc: "Работаем только с юридическими лицами и ИП по договору поставки." },
  { icon: "Scale", title: "Минимальный заказ", desc: "Минимальная сумма заказа уточняется при оформлении — гибкий подход для каждого клиента." },
  { icon: "Truck", title: "Доставка по Нижнему Новгороду", desc: "Доставляем по всему городу и ближайшим районам. Срок доставки — 1–2 рабочих дня." },
  { icon: "RefreshCw", title: "Регулярность", desc: "Возможны еженедельные и ежемесячные поставки по согласованному графику." },
];

const BENEFITS = [
  { icon: "LayoutGrid", title: "Широкий ассортимент", desc: "Более 50 наименований кондитерских изделий в постоянном наличии." },
  { icon: "HandshakeIcon", title: "Опыт работы с торговлей", desc: "Многолетний опыт поставок в магазины, кафе и учреждения питания." },
  { icon: "Sliders", title: "Гибкий подбор под бюджет", desc: "Поможем сформировать ассортимент с учётом ваших потребностей и бюджета." },
  { icon: "Zap", title: "Быстрая доставка", desc: "Оперативно доставляем по Нижнему Новгороду собственным транспортом." },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", type: "", agree: false });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-5">
          <div className="flex flex-col">
            <span className="font-cormorant text-lg font-semibold text-primary leading-tight">ИП Пальгуева</span>
            <span className="font-golos text-[11px] text-muted-foreground leading-tight">Кондитерские изделия оптом</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-golos text-foreground/65">
            <a href="#clients" className="hover:text-primary transition-colors">Клиенты</a>
            <a href="#assortment" className="hover:text-primary transition-colors">Ассортимент</a>
            <a href="#conditions" className="hover:text-primary transition-colors">Условия</a>
            <a href="#order" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="#order"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-golos font-medium hover:opacity-90 transition-opacity">
            Заказать звонок
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Кондитерские изделия" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(40,18,6,0.92) 40%, rgba(40,18,6,0.65) 70%, rgba(40,18,6,0.25) 100%)" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-black/40 border border-white/30 rounded-full px-4 py-1.5 mb-7 animate-fade-up backdrop-blur-sm">
              <Icon name="MapPin" size={14} className="text-[hsl(32,85%,70%)]" />
              <span className="font-golos text-white text-xs tracking-wide font-medium">Нижний Новгород</span>
            </div>

            <h1 className="font-cormorant text-4xl md:text-6xl font-semibold text-white leading-snug mb-5 animate-fade-up delay-100">
              ИП Пальгуева.<br />
              <span className="italic">Кондитерские изделия</span><br />
              оптом в Нижнем Новгороде
            </h1>

            <p className="font-golos text-[hsl(32,85%,78%)] text-base font-medium mb-3 animate-fade-up delay-200">
              Печенье · Пряники · Сухари · Сушки · Конфеты · Пирожные
            </p>

            <p className="font-golos text-white/65 text-base leading-relaxed mb-10 max-w-xl animate-fade-up delay-300">
              Поставляем кондитерские изделия оптом для продуктовых магазинов, кафе, школьных столовых и офисов. Работаем по договору, доставляем по всему Нижнему Новгороду.
            </p>

            <div className="animate-fade-up delay-400">
              <a href="#order"
                className="inline-block bg-[hsl(32,85%,52%)] text-white px-9 py-4 rounded-lg font-golos font-semibold text-base hover:opacity-90 transition-opacity shadow-xl">
                Заказать звонок
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section-pad bg-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Работаем с</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Кто наши клиенты</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {CLIENTS.map((c, i) => (
              <div key={c.label}
                className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-5 text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="w-11 h-11 bg-[hsl(32,85%,52%)]/10 rounded-full flex items-center justify-center">
                  <Icon name={c.icon} fallback="Building" size={20} className="text-[hsl(32,85%,52%)]" />
                </div>
                <p className="font-golos text-sm font-medium text-foreground leading-tight">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSORTMENT */}
      <section id="assortment" className="section-pad">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Что поставляем</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Ассортимент</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ASSORTMENT.map((cat, i) => (
              <div key={cat.category}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h3 className="font-cormorant text-2xl font-semibold text-primary">{cat.category}</h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2 font-golos text-sm text-foreground/75">
                      <span className="text-[hsl(32,85%,52%)] mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="inline-block bg-secondary border border-border rounded-xl px-6 py-3 font-golos text-sm text-muted-foreground">
              Ассортимент постоянно обновляется. Точный список и цены — <a href="#order" className="text-primary font-medium hover:underline">по запросу</a>.
            </p>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section id="conditions" className="section-pad" style={{ background: "hsl(25,60%,22%)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,65%)] text-sm font-medium tracking-widest uppercase mb-2">Как мы работаем</p>
            <h2 className="font-cormorant text-5xl font-semibold text-white">Условия работы</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CONDITIONS.map((c, i) => (
              <div key={c.title}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-11 h-11 shrink-0 bg-[hsl(32,85%,52%)]/20 rounded-full flex items-center justify-center mt-0.5">
                  <Icon name={c.icon} fallback="Circle" size={20} className="text-[hsl(32,85%,65%)]" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-white mb-1">{c.title}</h3>
                  <p className="font-golos text-white/55 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad bg-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Наши преимущества</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={b.title}
                className="flex gap-4 bg-card border border-border rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-11 h-11 shrink-0 bg-[hsl(32,85%,52%)]/10 rounded-full flex items-center justify-center mt-0.5">
                  <Icon name={b.icon} fallback="Circle" size={20} className="text-[hsl(32,85%,52%)]" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl font-semibold text-primary mb-1">{b.title}</h3>
                  <p className="font-golos text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="section-pad" style={{ background: "hsl(40,55%,95%)" }}>
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Начнём работу</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Заказать звонок</h2>
            <p className="font-golos text-muted-foreground mt-3 text-sm leading-relaxed">
              Оставьте заявку, мы перезвоним и подберём для вас оптимальный ассортимент.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-14 bg-card border border-border rounded-2xl">
              <div className="w-16 h-16 bg-[hsl(32,85%,52%)]/15 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={32} className="text-[hsl(32,85%,52%)]" />
              </div>
              <h3 className="font-cormorant text-3xl font-semibold text-primary mb-2">Заявка принята!</h3>
              <p className="font-golos text-muted-foreground text-sm">Мы перезвоним вам в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              <div className="space-y-4 mb-5">
                <div>
                  <label className="font-golos text-sm font-medium text-foreground/70 block mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 font-golos text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(32,85%,52%)]/30 transition"
                  />
                </div>
                <div>
                  <label className="font-golos text-sm font-medium text-foreground/70 block mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 font-golos text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(32,85%,52%)]/30 transition"
                  />
                </div>
                <div>
                  <label className="font-golos text-sm font-medium text-foreground/70 block mb-1.5">Форма обращения</label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    required
                    className="w-full border border-border rounded-lg px-4 py-2.5 font-golos text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(32,85%,52%)]/30 transition text-foreground"
                  >
                    <option value="" disabled>Выберите тип организации...</option>
                    <option value="shop">Магазин</option>
                    <option value="cafe">Кафе</option>
                    <option value="canteen">Столовая</option>
                    <option value="office">Офис</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-3 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={e => setForm({ ...form, agree: e.target.checked })}
                  className="mt-0.5 w-4 h-4 accent-[hsl(25,60%,28%)] shrink-0"
                />
                <span className="font-golos text-xs text-muted-foreground leading-relaxed">
                  Согласен(а) на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ
                </span>
              </label>

              <button type="submit" disabled={!form.agree}
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-golos font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed">
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-cormorant text-2xl font-semibold text-primary">ИП Пальгуева</p>
            <p className="font-golos text-sm text-muted-foreground mt-0.5">Кондитерские изделия оптом</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="tel:+78001234567"
              className="flex items-center gap-2 font-golos text-sm text-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={15} className="text-primary" />
              +7 (800) 123-45-67
            </a>
            <a href="https://wa.me/78001234567"
              className="flex items-center gap-2 font-golos text-sm text-foreground hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={15} className="text-green-600" />
              WhatsApp
            </a>
            <a href="https://t.me/ippalgueva"
              className="flex items-center gap-2 font-golos text-sm text-foreground hover:text-primary transition-colors">
              <Icon name="Send" size={15} className="text-sky-500" />
              Telegram
            </a>
          </div>
          <div className="flex items-center gap-2 font-golos text-sm text-muted-foreground">
            <Icon name="MapPin" size={15} className="text-primary shrink-0" />
            Нижний Новгород
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-5 mt-6 pt-6 border-t border-border">
          <p className="font-golos text-xs text-muted-foreground">© 2025 ИП Пальгуева. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}