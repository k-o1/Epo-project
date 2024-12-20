document.getElementById('welcomeButton').addEventListener('click', function() {
 document.getElementById('welcomeMessage').textContent = 'Nous sommes ravis de vous accueillir sur le site dédié à l\'EPO. Explorez nos programmes et nos initiatives!';
});

function changeDynamicContent() {
 document.getElementById('dynamicContent').textContent = 'Le contenu a été changé
grâce à JavaScript!';
}
window.onload = function() {
 changeDynamicContent();
};
