import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 border border-slate-700/50 transition-all backdrop-blur-sm"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Aydınlık tema' : 'Karanlık tema'}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {theme === 'dark' ? (
                    <Sun size={20} className="text-yellow-400" />
                ) : (
                    <Moon size={20} className="text-blue-600" />
                )}
            </motion.div>
        </motion.button>
    );
}
