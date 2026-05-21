import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export type LegalDoc =
  | "privacy"
  | "consent"
  | "cookies"
  | "contacts"

const docs: Record<LegalDoc, { title: string; content: React.ReactNode }> = {
  privacy: {
    title: "Политика обработки персональных данных",
    content: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        {/* ЗАМЕНИТЬ: вставить финальный текст политики конфиденциальности */}
        <p><strong>1. Общие положения</strong></p>
        <p>
          Настоящая политика обработки персональных данных составлена в соответствии с
          требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных»
          и определяет порядок обработки персональных данных пользователей сайта.
        </p>
        <p><strong>2. Оператор персональных данных</strong></p>
        <p>
          {/* ЗАМЕНИТЬ: полное наименование, ИНН, адрес */}
          ООО «Вам Лям!», ИНН: 0000000000, адрес: г. Москва, ул. Примерная, д. 1.
        </p>
        <p><strong>3. Какие данные мы собираем</strong></p>
        <p>
          Имя и номер телефона — для связи по заявке. Мы не собираем лишних данных и
          не передаём их третьим лицам без вашего согласия, за исключением случаев,
          предусмотренных законом.
        </p>
        <p><strong>4. Цели обработки</strong></p>
        <p>
          Обработка персональных данных осуществляется исключительно для: связи с
          потенциальными клиентами по их заявкам, улучшения качества сервиса.
        </p>
        <p><strong>5. Хранение и защита</strong></p>
        <p>
          Данные хранятся на защищённых серверах. Срок хранения — не более 3 лет
          с момента последней активности или до отзыва согласия.
        </p>
        <p><strong>6. Ваши права</strong></p>
        <p>
          Вы вправе в любой момент запросить, изменить или удалить свои данные,
          написав на {/* ЗАМЕНИТЬ: email */} hello@vamlyam.ru.
        </p>
        <p className="text-xs text-gray-400">Дата последнего обновления: январь 2026 года. {/* ЗАМЕНИТЬ: актуальная дата */}</p>
      </div>
    ),
  },
  consent: {
    title: "Согласие на обработку персональных данных",
    content: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        {/* ЗАМЕНИТЬ: вставить финальный текст согласия */}
        <p>
          Настоящим я, субъект персональных данных, даю своё согласие на обработку моих
          персональных данных — имени и номера телефона — оператору:
        </p>
        <p>
          {/* ЗАМЕНИТЬ: полное наименование, ИНН */}
          ООО «Вам Лям!», ИНН: 0000000000.
        </p>
        <p>
          Согласие даётся в целях получения консультации и обработки заявки.
          Согласие действительно до его отзыва. Отозвать согласие можно, направив
          письменный запрос по адресу электронной почты: {/* ЗАМЕНИТЬ: email */} hello@vamlyam.ru.
        </p>
        <p>
          Согласие предоставляется в соответствии с Федеральным законом от 27.07.2006
          №152-ФЗ «О персональных данных».
        </p>
        <p className="text-xs text-gray-400">Дата: {/* ЗАМЕНИТЬ: актуальная дата */} январь 2026 года.</p>
      </div>
    ),
  },
  cookies: {
    title: "Cookie-политика",
    content: (
      <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
        {/* ЗАМЕНИТЬ: вставить финальный текст cookie-политики */}
        <p><strong>Что такое cookies?</strong></p>
        <p>
          Файлы cookie — небольшие текстовые файлы, которые сохраняются в браузере
          при посещении сайта.
        </p>
        <p><strong>Какие cookies мы используем?</strong></p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Необходимые</strong> — для работы форм и безопасности сайта. Всегда активны.</li>
          <li><strong>Аналитические</strong> — Яндекс.Метрика, Google Analytics. Только с вашего согласия.</li>
          <li><strong>Маркетинговые</strong> — пиксели ретаргетинга. Только с вашего согласия. {/* ЗАМЕНИТЬ: перечислить конкретные пиксели */}</li>
        </ul>
        <p><strong>Как управлять cookies?</strong></p>
        <p>
          Вы можете изменить настройки в любое время через баннер внизу страницы или
          в настройках браузера.
        </p>
        <p className="text-xs text-gray-400">Дата последнего обновления: январь 2026 года. {/* ЗАМЕНИТЬ: актуальная дата */}</p>
      </div>
    ),
  },
  contacts: {
    title: "Контакты и реквизиты",
    content: (
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        {/* ЗАМЕНИТЬ: все реквизиты на реальные */}
        <p><strong>Полное наименование:</strong> ООО «Вам Лям!»</p>
        <p><strong>ИНН:</strong> 0000000000</p>
        <p><strong>ОГРН:</strong> 0000000000000</p>
        <p><strong>Юридический адрес:</strong> 000000, г. Москва, ул. Примерная, д. 1, оф. 1</p>
        <p><strong>Фактический адрес:</strong> 000000, г. Москва, ул. Примерная, д. 1, оф. 1</p>
        <hr className="border-gray-100" />
        <p><strong>Email:</strong> <a href="mailto:hello@vamlyam.ru" className="text-[#392AE7] hover:underline">hello@vamlyam.ru</a></p>
        <p><strong>Телефон:</strong> <a href="tel:+78001234567" className="text-[#392AE7] hover:underline">8 800 123-45-67</a></p>
        <p><strong>Telegram:</strong> <a href="https://t.me/vamlyam" target="_blank" rel="noopener noreferrer" className="text-[#392AE7] hover:underline">@vamlyam</a></p>
        <hr className="border-gray-100" />
        <p className="text-xs text-gray-400">
          {/* ЗАМЕНИТЬ: добавить банковские реквизиты при необходимости */}
          По вопросам обработки персональных данных — hello@vamlyam.ru
        </p>
      </div>
    ),
  },
}

type Props = {
  doc: LegalDoc | null
  onClose: () => void
}

export function LegalModal({ doc, onClose }: Props) {
  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [doc, onClose])

  useEffect(() => {
    document.body.style.overflow = doc ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [doc])

  const current = doc ? docs[doc] : null

  return (
    <AnimatePresence>
      {doc && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col"
          >
            <div className="flex items-start justify-between gap-4 p-5 border-b border-gray-100">
              <h2 className="font-semibold text-gray-900 text-base leading-snug">{current.title}</h2>
              <button
                onClick={onClose}
                aria-label="Закрыть"
                className="text-gray-400 hover:text-gray-700 transition-colors shrink-0 mt-0.5 focus:outline-none focus:ring-2 focus:ring-[#392AE7] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-y-auto p-5 flex-1">
              {current.content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
