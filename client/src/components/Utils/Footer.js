import '../../styles/footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <h3>A votre service</h3>
        <ul className="footer-links">
            <li className="footer-link">Conditions générales de vente</li>
            <li className="footer-link">Mentions légales</li>
            <li className="footer-link">Politique de confidentialité</li>
            <li className="footer-link">Politique de retour</li>
            <li className="footer-link">Livraison</li>
            <li className="footer-link">Contactez-nous</li>
            <li className="footer-link">Paiement 100% sécurisé</li>
        </ul>
        <p>Droit d'auteur © 2022, AD115 Nicolas HOULIAT</p>
    </div>
  )
}
