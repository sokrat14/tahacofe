// script.js
document
  .getElementById("orderForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre de manière classique

    // Récupérer les données du formulaire
    const name = document.getElementById("name").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    // Afficher les détails de la commande
    const orderDetails = `
        Nom : ${name} <br>
        Produit : ${product} <br>
        Quantité : ${quantity}
    `;
    document.getElementById("orderDetails").innerHTML = orderDetails;

    // Masquer le formulaire et afficher la confirmation
    document.getElementById("orderForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  });
