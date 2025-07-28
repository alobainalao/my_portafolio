import { useTranslation } from 'react-i18next';
export default function ProfileCard() {
    const { t } = useTranslation();

    return (
        <div style={{ textAlign: 'center' }}>
            <img
                src="/alex.jpg"
                alt="Profile"
                style={{
                    marginTop: '10vh',
                    width: '15vw',       // tamaño relativo al ancho de la ventana
                    height: '15vw',      // para mantener proporción cuadrada
                    maxWidth: '100px',   // máximo 150px para no crecer demasiado
                    maxHeight: '100px',  // máximo 150px
                    borderRadius: '50%'
                }}
            />
            <h3>Alexander Lobaina La'O</h3>
            <p>{t('profile.title')}</p>
        </div>
    );
}

