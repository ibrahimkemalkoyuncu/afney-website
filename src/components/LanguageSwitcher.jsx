import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'tr' ? 'en' : 'tr';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 border border-slate-700/50 transition-all backdrop-blur-sm"
            aria-label={`Switch to ${currentLang === 'tr' ? 'English' : 'Turkish'}`}
            title={currentLang === 'tr' ? 'Switch to English' : 'Türkçe\'ye geç'}
        >
            <Globe size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-slate-300 uppercase">
                {currentLang === 'tr' ? 'EN' : 'TR'}
            </span>
        </motion.button>
    );
}
