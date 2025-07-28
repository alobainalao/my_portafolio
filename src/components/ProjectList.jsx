import { useTranslation } from 'react-i18next';
import './ProjectList.css';

export default function ProjectList({ projects }) {
    const { t } = useTranslation();
    return (
        <div className="project-list">
            {projects.map((p, i) => (
                <div key={i} className="project-card">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <a href={p.link} target="_blank" rel="noreferrer">
                        {t('projectList.view')}→
                    </a>
                </div>
            ))}
        </div>
    );
}
