import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

export default function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    {t('nav.home')}
                </NavLink>
                <NavLink to="/developer" className={({ isActive }) => isActive ? 'active' : ''}>
                    {t('nav.developer')}
                </NavLink>
                <NavLink to="/datascience" className={({ isActive }) => isActive ? 'active' : ''}>
                    {t('nav.data_science')}
                </NavLink>
                {/*<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>*/}
                {/*    {t('nav.about')}*/}
                {/*</NavLink>*/}
            </nav>
            <LanguageSwitcher />
        </header>
    );
}
