import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

type CookiePrefs = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = "cookie_consent"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  function acceptAll() {
    const all = { necessary: true, analytics: true, marketing: true }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all))
    setVisible(false)
  }

  function acceptNecessary() {
    const min = { necessary: true, analytics: false, marketing: false }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(min))
    setVisible(false)
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-label="Настройки cookie"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100] glass rounded-2xl shadow-2xl p-5"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-sm font-semibold text-gray-900">Мы используем cookies 🍪</p>
            <button
              onClick={acceptNecessary}
              aria-label="Закрыть"
              className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 mt-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!showSettings ? (
            <>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Мы используем файлы cookie, чтобы сайт работал лучше. Аналитика и маркетинг —
                только с вашего согласия. Без согласия запускаем только необходимые cookie.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-[#392AE7] hover:bg-[#2d21c0] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
                >
                  Принять все
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors"
                >
                  Только нужные
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-500 text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  Настроить
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3 mb-4">
                {[
                  { key: "necessary" as const, label: "Необходимые", desc: "Авторизация, безопасность, форма заявок", disabled: true },
                  { key: "analytics" as const, label: "Аналитические", desc: "Яндекс.Метрика, Google Analytics", disabled: false },
                  { key: "marketing" as const, label: "Маркетинговые", desc: "Пиксели ВКонтакте, Яндекс Аудитории", disabled: false },
                ].map((item) => (
                  <label key={item.key} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={prefs[item.key]}
                      disabled={item.disabled}
                      onChange={(e) => setPrefs((p) => ({ ...p, [item.key]: e.target.checked }))}
                      className="mt-0.5 w-4 h-4 accent-[#392AE7] cursor-pointer disabled:opacity-60"
                    />
                    <span>
                      <span className="text-sm font-medium text-gray-900 block">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.desc}</span>
                    </span>
                  </label>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={saveSettings}
                  className="flex-1 bg-[#392AE7] hover:bg-[#2d21c0] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Сохранить
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm py-2.5 rounded-xl transition-colors"
                >
                  Назад
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}