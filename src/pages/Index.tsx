import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ebbe9df6-9d95-438e-8cfc-08c8945d051e/files/832e1261-a320-4ec1-bc0b-8b27760347b5.jpg";
const CAKE_IMG = "https://cdn.poehali.dev/projects/ebbe9df6-9d95-438e-8cfc-08c8945d051e/files/bdcb447b-cbbe-47af-9365-94b90ffd8967.jpg";

const CLIENTS = [
  "Кафе «Берёзка»", "Ресторан Aromi", "Сеть «Вкусно здесь»",
  "Отель Meridian", "Кофейня Bloom", "Корпоративный кейтеринг «Статус»",
];

const PRODUCTS = [
  { name: "Торты на заказ", desc: "Многоярусные, свадебные, корпоративные — от 2 кг", emoji: "🎂" },
  { name: "Эклеры и профитроли", desc: "Классические и авторские начинки", emoji: "🍮" },
  { name: "Макаруны", desc: "12 вкусов, оптом от 50 штук", emoji: "🫐" },
  { name: "Пирожные", desc: "Муссовые, бисквитные, тарталетки", emoji: "🍰" },
  { name: "Трюфели и конфеты", desc: "Ручная лепка, подарочная упаковка", emoji: "🍫" },
  { name: "Корпоративные наборы", desc: "Брендирование и индивидуальный дизайн", emoji: "🎁" },
];

const GALLERY = [
  { name: "Свадебный торт «Прованс»", img: CAKE_IMG },
  { name: "Ассорти пирожных", img: HERO_IMG },
  { name: "Трюфели ручной работы", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=600&q=80" },
  { name: "Эклеры «Классик»", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80" },
  { name: "Макаруны-ассорти", img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80" },
  { name: "Корпоративный набор", img: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=600&q=80" },
];

const CONDITIONS = [
  { title: "Минимальный заказ", value: "от 5 000 ₽", icon: "ShoppingBag" },
  { title: "Срок выполнения", value: "1–3 рабочих дня", icon: "Clock" },
  { title: "Доставка", value: "По городу и области", icon: "Truck" },
  { title: "Оплата", value: "Наличные, карта, счёт", icon: "CreditCard" },
];

const BENEFITS = [
  { title: "10 лет на рынке", desc: "Собственное производство, сертифицированное по ГОСТ", icon: "Award" },
  { title: "Контроль качества", desc: "Только натуральные ингредиенты, ежедневная выпечка", icon: "ShieldCheck" },
  { title: "Персональный менеджер", desc: "Один контакт для всех вопросов и заказов", icon: "UserCheck" },
  { title: "Гибкая цена", desc: "Скидки от объёма, долгосрочные партнёрские тарифы", icon: "TrendingDown" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container-lg flex items-center justify-between py-3 px-4">
          <span className="font-cormorant text-2xl font-semibold text-primary">КондиТерра</span>
          <nav className="hidden md:flex gap-6 text-sm font-golos text-foreground/70">
            <a href="#assortment" className="hover:text-primary transition-colors">Ассортимент</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#conditions" className="hover:text-primary transition-colors">Условия</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <a href="#order"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-golos font-medium hover:opacity-90 transition-opacity">
            Заказать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Кондитерские изделия" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(25,60%,12%)]/85 via-[hsl(25,60%,12%)]/60 to-transparent" />
        </div>

        <div className="relative container-lg px-6 py-24">
          <div className="max-w-xl">
            <p className="font-golos text-[hsl(32,85%,70%)] text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Оптовые кондитерские изделия
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 animate-fade-up delay-100">
              Сладкое —<br /><em>в каждую точку</em>
            </h1>
            <p className="font-golos text-white/75 text-lg leading-relaxed mb-10 animate-fade-up delay-200">
              Поставляем свежую выпечку и кондитерские изделия ручной работы для кафе, ресторанов, гостиниц и магазинов. Ежедневно, стабильно, вкусно.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <a href="#order"
                className="bg-[hsl(32,85%,52%)] text-white px-8 py-3.5 rounded-md font-golos font-semibold text-base hover:opacity-90 transition-opacity shadow-lg">
                Получить прайс
              </a>
              <a href="#gallery"
                className="border border-white/40 text-white px-8 py-3.5 rounded-md font-golos font-medium text-base hover:bg-white/10 transition-colors">
                Смотреть галерею
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/50" />
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container-lg px-4">
          <p className="font-golos text-muted-foreground text-sm text-center mb-6 tracking-wider uppercase">
            Нам доверяют
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {CLIENTS.map((c) => (
              <span key={c} className="font-golos font-medium text-foreground/60 text-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ASSORTMENT */}
      <section id="assortment" className="section-pad">
        <div className="container-lg px-4">
          <div className="text-center mb-14">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Что мы делаем</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Ассортимент</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <div key={p.name}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="text-4xl mb-4 block">{p.emoji}</span>
                <h3 className="font-cormorant text-2xl font-semibold text-primary mb-2">{p.name}</h3>
                <p className="font-golos text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-pad bg-secondary">
        <div className="container-lg px-4">
          <div className="text-center mb-14">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Наши работы</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Фотогалерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((item, i) => (
              <div key={i}
                className="relative group rounded-xl overflow-hidden aspect-square cursor-pointer"
                onClick={() => setActiveGallery(i)}>
                <img src={item.img} alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,60%,12%)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="font-cormorant text-white text-xl font-medium">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY MODAL */}
      {activeGallery !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveGallery(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white/70 hover:text-white"
              onClick={() => setActiveGallery(null)}>
              <Icon name="X" size={28} />
            </button>
            <img src={GALLERY[activeGallery].img} alt={GALLERY[activeGallery].name}
              className="w-full rounded-xl object-cover max-h-[75vh]" />
            <p className="font-cormorant text-white text-2xl text-center mt-4">{GALLERY[activeGallery].name}</p>
            <div className="flex justify-center gap-6 mt-4">
              <button className="text-white/60 hover:text-white transition-colors"
                onClick={() => setActiveGallery((activeGallery - 1 + GALLERY.length) % GALLERY.length)}>
                <Icon name="ChevronLeft" size={32} />
              </button>
              <button className="text-white/60 hover:text-white transition-colors"
                onClick={() => setActiveGallery((activeGallery + 1) % GALLERY.length)}>
                <Icon name="ChevronRight" size={32} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONDITIONS */}
      <section id="conditions" className="section-pad">
        <div className="container-lg px-4">
          <div className="text-center mb-14">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Как мы работаем</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Условия сотрудничества</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CONDITIONS.map((c, i) => (
              <div key={c.title}
                className="text-center p-6 bg-card border border-border rounded-xl animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-[hsl(32,85%,52%)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={c.icon} fallback="Circle" size={22} className="text-[hsl(32,85%,52%)]" />
                </div>
                <p className="font-cormorant text-xl font-semibold text-primary mb-1">{c.value}</p>
                <p className="font-golos text-muted-foreground text-sm">{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad relative overflow-hidden"
        style={{ background: "hsl(25,60%,22%)" }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(32,85%,52%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(40,55%,70%) 0%, transparent 40%)" }} />
        <div className="container-lg px-4 relative">
          <div className="text-center mb-14">
            <p className="font-golos text-[hsl(32,85%,65%)] text-sm font-medium tracking-widest uppercase mb-2">Почему мы</p>
            <h2 className="font-cormorant text-5xl font-semibold text-white">Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="flex gap-5 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 shrink-0 bg-white/10 rounded-full flex items-center justify-center mt-1">
                  <Icon name={b.icon} fallback="Circle" size={22} className="text-[hsl(32,85%,65%)]" />
                </div>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-white mb-1">{b.title}</h3>
                  <p className="font-golos text-white/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="section-pad" style={{ background: "hsl(40,55%,95%)" }}>
        <div className="container-md px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Начнём работу</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Оставить заявку</h2>
            <p className="font-golos text-muted-foreground mt-3 max-w-md mx-auto text-sm">
              Заполните форму — менеджер свяжется с вами в течение часа и пришлёт актуальный прайс.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[hsl(32,85%,52%)]/15 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name="CheckCircle" size={32} className="text-[hsl(32,85%,52%)]" />
              </div>
              <h3 className="font-cormorant text-3xl font-semibold text-primary mb-2">Заявка отправлена!</h3>
              <p className="font-golos text-muted-foreground">Мы позвоним вам в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="font-golos text-sm font-medium text-foreground/70 block mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
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
              </div>
              <div className="mb-6">
                <label className="font-golos text-sm font-medium text-foreground/70 block mb-1.5">Комментарий (необязательно)</label>
                <textarea
                  placeholder="Расскажите о вашем заведении или объёме заказа..."
                  rows={4}
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-2.5 font-golos text-sm bg-background focus:outline-none focus:ring-2 focus:ring-[hsl(32,85%,52%)]/30 transition resize-none"
                />
              </div>
              <button type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-golos font-semibold text-base hover:opacity-90 transition-opacity">
                Отправить заявку
              </button>
              <p className="font-golos text-muted-foreground text-xs text-center mt-4">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-pad bg-secondary border-t border-border">
        <div className="container-lg px-4">
          <div className="text-center mb-12">
            <p className="font-golos text-[hsl(32,85%,52%)] text-sm font-medium tracking-widest uppercase mb-2">Где нас найти</p>
            <h2 className="font-cormorant text-5xl font-semibold text-primary">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Phone" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-golos text-sm text-muted-foreground mb-1">Телефон</p>
                <a href="tel:+74951234567" className="font-cormorant text-xl font-medium text-primary hover:text-[hsl(32,85%,52%)] transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-golos text-sm text-muted-foreground mb-1">E-mail</p>
                <a href="mailto:order@konditerra.ru" className="font-cormorant text-xl font-medium text-primary hover:text-[hsl(32,85%,52%)] transition-colors">
                  order@konditerra.ru
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-golos text-sm text-muted-foreground mb-1">Адрес производства</p>
                <p className="font-cormorant text-xl font-medium text-primary">
                  Москва, ул. Хлебная, 12
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 border-t border-border bg-background">
        <div className="container-lg px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-cormorant text-xl font-semibold text-primary">КондиТерра</span>
          <p className="font-golos text-muted-foreground text-sm">© 2025 КондиТерра. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}