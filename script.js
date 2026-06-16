document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche la page de se recharger

            // Récupération des données du formulaire
            const name = document.getElementById('fullname').value;
            const guests = document.getElementById('guests').value;
            const dateInput = document.getElementById('date').value;
            const time = document.getElementById('time').value;

            // Formatage de la date en français
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const dateFormatted = new Date(dateInput).toLocaleDateString('fr-FR', options);

            // Création du texte personnalisé
            successText.innerHTML = `Merci, <strong>${name}</strong>.<br><br>
            Votre demande pour <strong>${guests} convive(s)</strong> le <strong>${dateFormatted}</strong> à <strong>${time}</strong> a bien été transmise.<br><br>
            Une invitation officielle vous sera envoyée par e-mail après validation de notre majordome.`;

            // Animation visuelle : cache le formulaire et montre le message de succès
            bookingForm.style.display = 'none';
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }
});