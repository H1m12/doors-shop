"use client";

import { useState } from "react";

const products = [
  { id: 1, cat: "Входная", name: "Версаль", desc: "Премиум входная дверь с терморазрывом", price: "89 900", oldPrice: "129 900", badge: "ХИТ", variant: "1" },
  { id: 2, cat: "Межкомнатная", name: "Палаццо", desc: "Натуральный шпон дуба, итальянская фурнитура", price: "34 500", badge: "NEW", variant: "2" },
  { id: 3, cat: "Входная", name: "Тоскана", desc: "3 контура уплотнения, шумоизоляция", price: "67 200", variant: "3" },
  { id: 4, cat: "Межкомнатная", name: "Флоренция", desc: "Эмаль, скрытые петли, без наличников", price: "42 800", badge: "ХИТ", variant: "4" },
  { id: 5, cat: "Входная", name: "Милан", desc: "Бронированная сталь, биометрический замок", price: "145 000", variant: "5" },
  { id: 6, cat: "Межкомнатная", name: "Венеция", desc: "Стеклянные вставки, алюминиевая кромка", price: "38 700", variant: "6" },
];

const categories = ["Все двери", "Входные", "Межкомнатные", "Премиум"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Все двери");
  const [formData, setFormData] = useState({ name: "", phone: "", door: "", message: "" });

  const filtered = activeTab === "Все двери"
    ? products
    : activeTab === "Премиум"
    ? products.filter(p => parseInt(p.price.replace(/\s/g, "")) > 80000)
    : products.filter(p => activeTab.includes(p.cat));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Мы перезвоним вам в течение 15 минут.`);
    setFormData({ name: "", phone: "", door: "", message: "" });
  };

  return (
    <>
      <nav>
        <div className="logo">ДВЕРНОЙ&nbsp;ДОМ</div>
        <ul className="nav-links">
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#why">О нас</a></li>
          <li><a href="#process">Как работаем</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
        <div className="nav-phone">+7 (495) 123-45-67</div>
      </nav>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="hero-tag">Премиум двери с 2008 года</div>
            <h1>Двери,<br/>что хранят<br/><em>ваш дом</em></h1>
            <p className="hero-desc">Производство и установка элитных входных и межкомнатных дверей. Собственная фабрика в Подмосковье. Гарантия 10 лет на конструкцию и фурнитуру.</p>
            <div className="hero-btns">
              <a href="#catalog" className="btn btn-primary">
                Смотреть каталог
                <span className="btn-arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-outline">Замер бесплатно</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="stat-num">17</div>
                <div className="stat-label">лет на рынке</div>
              </div>
              <div>
                <div className="stat-num">12 800</div>
                <div className="stat-label">установлено дверей</div>
              </div>
              <div>
                <div className="stat-num">10</div>
                <div className="stat-label">лет гарантии</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-tag tag-1">Сталь 2.5 мм</div>
            <div className="hero-visual-tag tag-2">Гарантия 10 лет</div>
            <div className="door-light"></div>
            <div className="door-frame">
              <div className="door-panel">
                <div className="door-panel-inner"></div>
                <div className="door-panel-inner"></div>
              </div>
              <div className="door-handle"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog">
        <div className="section-header">
          <div className="section-tag">// Каталог продукции</div>
          <h2 className="section-title">Наши <em>двери</em></h2>
          <p className="section-sub">Более 200 моделей входных и межкомнатных дверей. Производим на собственной фабрике с использованием европейских материалов.</p>
        </div>

        <div className="catalog">
          <div className="catalog-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`tab ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map(p => (
              <div key={p.id} className="product">
                <div className="product-img">
                  {p.badge && <div className={`product-badge ${p.badge === "ХИТ" ? "hit" : ""}`}>{p.badge}</div>}
                  <div className="product-door" data-variant={p.variant}>
                    <div className="product-door-inner"></div>
                    <div className="product-handle"></div>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-cat">{p.cat}</div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-bottom">
                    <div>
                      {p.oldPrice && <div className="product-price-old">{p.oldPrice} ₽</div>}
                      <div className="product-price">{p.price} <span style={{fontSize: 16, color: "var(--text-dim)"}}>₽</span></div>
                    </div>
                    <button className="product-btn">Заказать →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="why">
        <div className="section-header">
          <div className="section-tag">// Почему выбирают нас</div>
          <h2 className="section-title">Наши <em>преимущества</em></h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-num">01</div>
            <div className="why-title">Собственное производство</div>
            <div className="why-text">Фабрика в Подмосковье площадью 8000 м². Контроль качества на каждом этапе.</div>
          </div>
          <div className="why-card">
            <div className="why-num">02</div>
            <div className="why-title">Европейская фурнитура</div>
            <div className="why-text">Замки CISA, Mottura, петли AGB. Только сертифицированные комплектующие.</div>
          </div>
          <div className="why-card">
            <div className="why-num">03</div>
            <div className="why-title">Гарантия 10 лет</div>
            <div className="why-text">Расширенная гарантия на конструкцию двери и всю фурнитуру.</div>
          </div>
          <div className="why-card">
            <div className="why-num">04</div>
            <div className="why-title">Установка за 1 день</div>
            <div className="why-text">Опытные монтажники. Чистый монтаж без пыли и грязи.</div>
          </div>
          <div className="why-card">
            <div className="why-num">05</div>
            <div className="why-title">Замер бесплатно</div>
            <div className="why-text">Выезд замерщика по Москве и МО в удобное для вас время.</div>
          </div>
          <div className="why-card">
            <div className="why-num">06</div>
            <div className="why-title">Рассрочка 0%</div>
            <div className="why-text">Беспроцентная рассрочка до 12 месяцев от банков-партнёров.</div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="section-header">
          <div className="section-tag">// Этапы работы</div>
          <h2 className="section-title">Как мы <em>работаем</em></h2>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-circle">I</div>
            <div className="step-title">Заявка</div>
            <div className="step-text">Звонок или форма на сайте. Подберём варианты под ваш бюджет.</div>
          </div>
          <div className="process-step">
            <div className="step-circle">II</div>
            <div className="step-title">Замер</div>
            <div className="step-text">Бесплатный выезд замерщика. Точные размеры и расчёт.</div>
          </div>
          <div className="process-step">
            <div className="step-circle">III</div>
            <div className="step-title">Производство</div>
            <div className="step-text">Изготовление двери на нашей фабрике за 7-14 дней.</div>
          </div>
          <div className="process-step">
            <div className="step-circle">IV</div>
            <div className="step-title">Установка</div>
            <div className="step-text">Монтаж за 1 день. Чистая работа без пыли. Гарантия на установку.</div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="section-header">
          <div className="section-tag">// Запись на замер</div>
          <h2 className="section-title">Закажите <em>бесплатный</em> замер</h2>
          <p className="section-sub">Замерщик приедет в удобное для вас время и поможет подобрать идеальную дверь под ваш интерьер</p>
        </div>

        <div className="cta-wrap">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Ваше имя</label>
                <input
                  type="text" required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Петров"
                />
              </div>
              <div className="form-group">
                <label>Телефон</label>
                <input
                  type="tel" required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Тип двери</label>
              <select
                value={formData.door}
                onChange={e => setFormData({...formData, door: e.target.value})}
              >
                <option value="">Выберите тип</option>
                <option>Входная дверь</option>
                <option>Межкомнатная дверь</option>
                <option>Комплект (входная + межкомнатные)</option>
                <option>Не определился</option>
              </select>
            </div>
            <div className="form-group">
              <label>Комментарий</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Адрес объекта, удобное время для замера..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Записаться на замер
              <span className="btn-arrow">→</span>
            </button>
            <p style={{ textAlign: "center", fontSize: 11, color: "var(--text-dim)", marginTop: 16, letterSpacing: 1 }}>
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: 16 }}>ДВЕРНОЙ&nbsp;ДОМ</div>
            <p style={{ fontSize: 13, color: "var(--text-dim)", lineHeight: 1.7 }}>
              Производство и установка премиальных входных и межкомнатных дверей. Собственная фабрика, 17 лет на рынке.
            </p>
          </div>
          <div className="footer-col">
            <h4>Каталог</h4>
            <ul>
              <li><a href="#">Входные двери</a></li>
              <li><a href="#">Межкомнатные</a></li>
              <li><a href="#">Премиум коллекция</a></li>
              <li><a href="#">Распродажа</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Услуги</h4>
            <ul>
              <li><a href="#">Бесплатный замер</a></li>
              <li><a href="#">Доставка</a></li>
              <li><a href="#">Установка</a></li>
              <li><a href="#">Гарантия</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Контакты</h4>
            <ul>
              <li>+7 (495) 123-45-67</li>
              <li>info@dvernoy-dom.ru</li>
              <li>Ежедневно 9:00 — 21:00</li>
              <li>Москва, ул. Дверная, 1</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2024 Дверной Дом. Все права защищены.</div>
          <div>Политика конфиденциальности</div>
        </div>
      </footer>
    </>
  );
}
