import { useTranslation } from 'react-i18next';
import ProjectList from '../components/ProjectList';
import './Developer.css';

export default function Developer() {
    const { t } = useTranslation();
    const projects = t('sections.developer.projects', { returnObjects: true });

    return (
        <div className="developer-container">
            <div className="developer-title">
                <img
                    src="/alex.jpg"
                    alt="Profile"
                    style={{
                        width: '7vw',       // tamaño relativo al ancho de la ventana
                        height: '7vw',      // para mantener proporción cuadrada
                        maxWidth: '30px',   // máximo 150px para no crecer demasiado
                        maxHeight: '30px',  // máximo 150px
                        borderRadius: '50%'
                    }}
                />
                <h2>{t('sections.developer.title')}</h2>
            </div>
            <ProjectList projects={projects} />
        </div>
    );
}


