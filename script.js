document.addEventListener('DOMContentLoaded', () => {
    const btnReserve = document.querySelector('.btn-reserve');

    if (btnReserve) {
        btnReserve.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien de recharger la page
            
            // Simulation d'une interaction moderne (Prompt/Alerte stylisée)
            const nom = prompt("Pour honorer la tradition de SURA, sous quel nom souhaitez-vous réserver ?");
            
            if (nom) {
                const convives = prompt("Combien de convives partageront ce rituel du feu ? (Maximum 6 par table)");
                
                if (convives && !isNaN(convives) && convives > 0) {
                    alert(`Demande reçue, ${nom}.\nUne table exclusive pour ${convives} personnes est pré-réservée. Notre équipe vous contactera sous peu pour confirmer votre venue au 15 Avenue Montaigne.`);
                } else {
                    alert("Veuillez indiquer un nombre de convives valide.");
                }
            }
        });
    }
});