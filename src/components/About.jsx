// src/components/AboutMe.jsx
import { useTranslation } from 'react-i18next';
import './About.css';

export default function AboutMe() {
    const { t } = useTranslation();

    return (
        <section className="about-container">
            <p>{t('about.text')}</p>
        </section>
    );
}
