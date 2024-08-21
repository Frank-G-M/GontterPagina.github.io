//compra-inicio//
const inputquantity = document.querySelector('.input-quantity');
const btnincrement = document.querySelector('#increment');
const btndecrement = document.querySelector('#decrement');

let valuebydefult = parseInt(inputquantity.value);

btnincrement.addEventListener('click', () => {
  valuebydefult += 1;
  inputquantity.value = valuebydefult;
});

btndecrement.addEventListener('click', () => {
    if (valuebydefult === 1){
        return
    }
  valuebydefult -= 1;
  inputquantity.value = valuebydefult;
});

const toggledescription = document.querySelector('.title-description');
const toggleadditionalinformation = document.querySelector('.title-additional-information');

const contentdescription = document.querySelector('.text-description');
const contentadditionalinformation = document.querySelector('.text-additional-information');

toggledescription.addEventListener('click', () => {
    contentdescription.classList.toggle('hidden');
});

toggleadditionalinformation.addEventListener('click', () => {
    contentadditionalinformation.classList.toggle('hidden');
});
/*carrusel*/
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'block';
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function autoSlide() {
    moveSlide(1);
}

showSlide(slideIndex);
setInterval(autoSlide, 3000);

/* Pantalla de carga y modal */
function showPaymentOptions() {
  const paymentMethod = document.getElementById('payment-method').value;
  const additionalOptions = document.getElementById('additional-options');
  additionalOptions.innerHTML = '';

  if (paymentMethod === 'tarjeta-debito' || paymentMethod === 'tarjeta-credito') {
    additionalOptions.innerHTML = `
      <input type="text" placeholder="Número de tarjeta" id="numeroTarjeta">
      <input type="text" placeholder="Fecha de vencimiento">
      <input type="text" placeholder="CVV">
    `;
  } else if (paymentMethod === 'paypal') {
    additionalOptions.innerHTML = `
      <input type="text" placeholder="Correo de PayPal">
    `;
  }
}

function validateForm() {
  const nombre = document.querySelector('input[placeholder="Nombres"]').value.trim();
  const apellido = document.querySelector('input[placeholder="Apellidos"]').value.trim();
  const tipoDocumento = document.querySelector('select').value;
  const numeroTarjeta = document.getElementById('numeroTarjeta') ? document.getElementById('numeroTarjeta').value.trim() : '';
  const direccion = document.querySelector('input[placeholder="Dirección"]').value.trim();
  const barrio = document.querySelector('input[placeholder="Barrio"]').value.trim();
  const telefono = document.querySelector('input[placeholder="Número telefónico"]').value.trim();
  const metodoPago = document.getElementById('payment-method').value;

  // Verificar que todos los campos estén completos
  if (!nombre || !apellido || !tipoDocumento || !direccion || !barrio || !telefono || !metodoPago || (numeroTarjeta === '' && (metodoPago === 'tarjeta-debito' || metodoPago === 'tarjeta-credito'))) {
      alert("Por favor, complete todos los campos.");
      return false;
  }

  // Validar que el campo de número de tarjeta contenga solo números y no sea negativo
  if (numeroTarjeta && (!/^\d+$/.test(numeroTarjeta) || parseInt(numeroTarjeta, 10) <= 0)) {
      alert("Por favor, ingrese un número de tarjeta válido.");
      return false;
  }

  // Validar que el campo de número telefónico contenga solo números y no sea negativo
  if (!/^\d+$/.test(telefono) || parseInt(telefono, 10) <= 0) {
      alert("Por favor, ingrese un número telefónico válido.");
      return false;
  }

  return true; // Si todo está bien, devolver verdadero
}

function processPurchase() {
  if (validateForm()) {
      document.getElementById('preloader').style.display = 'flex';

      setTimeout(() => {
          document.getElementById('preloader').style.display = 'none';
          document.getElementById('successModal').style.display = 'flex';
      }, 3000);
  }
}

function goToPage() {
  window.location.href = 'Gontter.html'; 
}
