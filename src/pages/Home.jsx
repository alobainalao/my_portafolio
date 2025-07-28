import { useTranslation } from 'react-i18next';
import ProfileCard from '../components/ProfileCard';
import './Home.css';
import About from '../components/About';

export default function Home() {
    const { t } = useTranslation();

    return (
        <main>
            <ProfileCard />
            <About />
        </main>
    );
}

