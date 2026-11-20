
"use strict";

// DATOS EDITABLES. Guardar este archivo conserva los cambios al recargar.
// Dejar vacíos los datos no confirmados. La fecha NO es de presentación.
const datosAcademicos = {
  institucion: "", docente: "", seccion: "", comunidad: "", idioma: "",
  fechaDocumento: "05/11/2026", fechaPresentacion: ""
};

// No asignar responsabilidades sin acuerdo. No usar retratos ficticios.
const integrantes = [
  { nombre: "Gerson Ottoniel Tuiz Xoquic.", responsabilidad: "", ruta: "imagenes/integrante-1.jpeg", alt: "Fotografía de Gerson Ottoniel Tuiz Xoquic." },
  { nombre: "Cesar Tomas Tinuguar Rodriguez.", responsabilidad: "", ruta: "imagenes/integrante-3.jpeg", alt: "Fotografía de Cesar Tomas Tinuguar Rodriguez." },
  { nombre: "Erick Obed Roquel Raxtún.", responsabilidad: "", ruta: "imagenes/integrante-2.jpeg", alt: "Fotografía de Erick Obed Roquel Raxtún." },
  { nombre: "Joseph Ezequiel Cojtín Cuj.", responsabilidad: "", ruta: "imagenes/integrante-4.jpeg", alt: "Fotografía de Joseph Ezequiel Cojtín Cuj." }
];

// Completar con personas hablantes. disponible:true SOLO tras revisión y permiso
// de reproducción. Publicar requiere un permiso separado. El crédito es opcional.
const audios = Array.from({ length: 6 }, (_, i) => ({
  titulo: "Expresión " + (i + 1), idioma: "", expresion: "", significado: "", contexto: "",
  ruta: "audios/" + String(i + 1).padStart(2, "0") + ".mp3",
  credito: "", identificacionAutorizada: false, disponible: false
}));

//Audio
audios[0].titulo = "Voces de familia: un saludo que transmite cuidado";
// Interpretación contextual proporcionada por un integrante; no es una traducción literal.
audios[0].expresion = "Conversación familiar: saludo y preocupación por la salud de un hijo.";
audios[0].significado = "Ricarda y Miguel se saludan y conversan sobre el estado de salud de su hijo de 22 años, quien estaba enfermo. Ambos esperan conocer lo que indique el médico.";
audios[0].contexto = "Más allá de las palabras, esta grabación refleja cómo los idiomas viven en los momentos cotidianos: al saludar, preguntar por nuestros seres queridos y expresar afecto y solidaridad. Cada conversación familiar conserva una parte de nuestra memoria, nuestra identidad y los vínculos que unen a las generaciones.";
audios[0].ruta = "Audio/01.mpeg";
audios[0].disponible = true;


// Solo fotos propias autorizadas. Ejemplo de entrada (quitar // para usar):
const galeria = [
  // { ruta: "imagenes/proceso-1.webp", titulo: "Preparación de la estación", alt: "Descripción concreta de lo que muestra la fotografía" }
];

// Los textos definitivos se editan aquí; no hay personalización temporal.
const caras = [
  { titulo: "Memoria e historia", explicacion: "Los idiomas transmiten relatos, conocimientos e identidades. El Acuerdo de 1995 reconoce antecedentes de discriminación por cultura y lengua.", relacion: "Comprender esa historia evita culpar únicamente a quienes sienten temor de hablar.", accion: "Pregunta a una persona hablante qué expresión cotidiana le gustaría compartir; no atribuyas su experiencia a toda la comunidad." },
  { titulo: "Derechos lingüísticos", explicacion: "El Acuerdo de 1995 aborda idiomas y educación bilingüe e intercultural. La Ley de Idiomas Nacionales reconoce, promueve y respeta los idiomas Mayas, Garífuna y Xinka; el español es el idioma oficial.", relacion: "Respetar el uso de un idioma ayuda a abrir espacios para practicarlo. Consulta las fuentes en el contexto histórico.", accion: "Propón que una actividad del grupo incluya una expresión revisada en el idioma de la comunidad, con su significado en español." },
  { titulo: "Aprender sin burlas", explicacion: "Equivocarse al pronunciar forma parte del aprendizaje. Escuchar con paciencia puede ayudar a recuperar la confianza.", relacion: "Respondemos a la situación de burlas descrita por el equipo, sin generalizarla a todas las comunidades.", accion: "Acuerda una regla de aprendizaje sin burlas y pregunta antes de corregir. Practica una expresión a tu ritmo." },
  { titulo: "Participar con equidad de género", explicacion: "Mujeres y hombres pueden aprender, enseñar, grabar y decidir. Las mujeres indígenas son hablantes y creadoras de conocimiento, no responsables exclusivas de conservar el idioma.", relacion: "Las oportunidades y las responsabilidades compartidas permiten que más voces participen.", accion: "Pregunta qué horarios y apoyos necesita cada participante. Reparte las tareas de grabación, revisión y cuidado de forma acordada." },
  { titulo: "Compartir entre generaciones", explicacion: "Personas mayores, jóvenes y otras personas hablantes pueden compartir sus conocimientos. No suponemos que solo las personas mayores hablen idiomas indígenas.", relacion: "El archivo sonoro conecta voces y abre oportunidades de aprender de otras generaciones.", accion: "Graba una expresión solo con autorización. Revisa su significado, acuerda los créditos y entrega una copia a quien la compartió." },
  { titulo: "Usar el idioma diariamente", explicacion: "Conservar grabaciones es útil, pero el idioma también necesita oportunidades para utilizarse en la vida cotidiana.", relacion: "El archivo puede apoyar la práctica y la transmisión; por sí solo no resolverá el desplazamiento lingüístico.", accion: "Elige una expresión revisada para usar hoy. Invita a otra persona a practicar contigo, sin presionarla ni ridiculizarla." }
];

const $ = id => document.getElementById(id);
function el(tag, clase, texto) {
  const nodo = document.createElement(tag);
  if (clase) nodo.className = clase;
  if (texto !== undefined) nodo.textContent = texto;
  return nodo;
}

// Ilustraciones SVG integradas: funcionan sin internet ni archivos adicionales.
const colores = ["#dc8981", "#eac17a", "#79b9a5", "#91add1", "#b6a2cb", "#dfaa7c"];
function persona(x, y, color, escala = 1, pelo = "#29353b") {
  return `<g transform="translate(${x} ${y}) scale(${escala})"><path d="M-34 76Q-36 30 0 29Q36 30 34 76Z" fill="${color}"/><path d="M-23 0Q-25-30 0-30Q27-30 23 2L21 31H-21Z" fill="${pelo}"/><ellipse cy="3" rx="20" ry="24" fill="#b97b55"/><path d="M-20-4Q-24-29 0-29Q23-28 21-4L21-4Q6-8 0-20Q-6-7-20-4" fill="${pelo}"/><path d="M-8 8h1m14 0h1" stroke="#342c2c" stroke-width="3" stroke-linecap="round"/><path d="M-5 18q5 4 10 0" fill="none" stroke="#643e32" stroke-width="2"/></g>`;
}
const libro = '<path d="M39 214Q95 193 150 217Q206 193 261 214V264Q206 245 150 268Q95 245 39 264Z" fill="#fff2cf" stroke="#19313d" stroke-width="4"/><path d="M150 218v49M60 230q34-8 67 2m49 0q33-9 64-2" fill="none" stroke="#ac895a" stroke-width="3"/>';
const dibujos = [
  persona(80, 147, "#497d75", 1.1, "#d9d1bf") + persona(222, 171, "#ab5c63", .85) + libro,
  '<rect x="70" y="45" width="160" height="210" rx="14" fill="#fff0cb"/><path d="M150 78v105m-60-72h120M106 111l-25 48h50Zm88 0-25 48h50ZM128 199h44m-63 21h82" stroke="#28515c" stroke-width="7" stroke-linejoin="round" fill="none"/>',
  persona(78, 184, "#547d96") + persona(222, 184, "#aa6571") + '<path d="M66 48h168v62H162l-22 23v-23H66Z" fill="#fff1d0"/><path d="M130 70c-19-21-39 8 20 36 59-28 39-57 20-36-9 10-15 10-20 0-6-10-13-10-20 0" fill="#bd6b72"/>',
  persona(61, 173, "#aa5e6c", .85) + persona(150, 164, "#3c8073", 1) + persona(239, 173, "#476e93", .85) + '<path d="M115 64h70m-70 27h70" stroke="#fff0c9" stroke-width="13" stroke-linecap="round"/>',
  persona(71, 181, "#50877d", 1.05, "#ddd4c4") + persona(224, 196, "#8e619a", .82) + '<rect x="119" y="51" width="62" height="108" rx="12" fill="#233e4c"/><rect x="132" y="66" width="36" height="68" rx="5" fill="#f9e2ad"/><path d="M142 92v18m9-27v35m9-28v22" stroke="#4b8475" stroke-width="5"/><circle cx="150" cy="147" r="5" fill="#f9e2ad"/>',
  '<path d="M54 130 150 48l96 82v121H54Z" fill="#fff0cb" stroke="#23434e" stroke-width="5"/>' + persona(117, 177, "#50877d", .83) + persona(197, 184, "#9c697c", .72) + '<path d="M24 47h85v42H80L65 104V89H24Z" fill="#fff0cb"/><path d="M40 62h51M40 76h35" stroke="#50877d" stroke-width="4"/>'
];
const imagenes = dibujos.map((d, i) => "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="${colores[i]}"/><circle cx="150" cy="145" r="115" fill="#fff5df" opacity=".15"/>${d}<path d="M10 10h24M10 10v24M290 10h-24M290 10v24M10 290h24M10 290v-24M290 290h-24M290 290v-24" fill="none" stroke="#fff4dc" stroke-width="3"/></svg>`));
const giros = ["rotateX(-10deg) rotateY(-14deg)", "rotateX(-10deg) rotateY(-90deg)", "rotateX(-10deg) rotateY(-180deg)", "rotateX(-10deg) rotateY(90deg)", "rotateX(-90deg)", "rotateX(90deg)"];
const superficies = [];
let estado, resueltas, seleccion = 0, origenMensaje = null;
caras.forEach((cara, f) => {
  const caraDOM = el("div", "face f" + f);
  for (let n = 0; n < 9; n++) {
    const pieza = el("div", "tile");
    pieza.style.backgroundImage = `url("${imagenes[f]}")`;
    caraDOM.append(pieza);
  }
  superficies.push(caraDOM); $("cube").append(caraDOM);
  const boton = el("button", "face-button"); boton.type = "button";
  const imagen = el("img"); imagen.src = imagenes[f]; imagen.alt = "";
  boton.append(imagen, el("span", "", (f + 1) + ". " + cara.titulo));
  boton.addEventListener("click", () => { seleccion = f; render(); });
  $("faces").append(boton);
});
function render() {
  superficies.forEach((cara, f) => [...cara.children].forEach((pieza, n) => {
    const fila = Math.floor(n / 3), columna = n % 3;
    pieza.style.backgroundPosition = ((columna + estado[f][fila]) % 3) * 50 + "% " + fila * 50 + "%";
  }));
  $("cube").style.transform = giros[seleccion];
  $("cube").setAttribute("aria-label", "Cara seleccionada: " + caras[seleccion].titulo);
  $("step").textContent = "Cara " + (seleccion + 1) + " de 6";
  $("face-title").textContent = caras[seleccion].titulo;
  $("reference").src = imagenes[seleccion];
  $("reference").alt = "Imagen completa: " + caras[seleccion].titulo;
  $("rows").replaceChildren();
  for (let fila = 0; fila < 3; fila++) {
    const b = el("button", "row"); b.type = "button";
    b.disabled = estado[seleccion][fila] === 0;
    b.append(el("span", "", "Fila " + (fila + 1)), el("span", "", b.disabled ? "Lista ✓" : "Girar →"));
    b.addEventListener("click", () => girar(fila)); $("rows").append(b);
  }
  if (resueltas[seleccion]) {
    const b = el("button", "secondary", "Releer mensaje"); b.type = "button";
    b.addEventListener("click", mostrarMensaje); $("rows").append(b);
  }
  $("hint").textContent = resueltas[seleccion] ? "Cara completa. Puedes releer su mensaje o elegir otra." : "Cada clic desplaza una fila una posición. Compara con la imagen objetivo.";
  const total = resueltas.filter(Boolean).length;
  $("count").textContent = total + " de 6"; $("progress").value = total;
  [...$("faces").children].forEach((b, f) => {
    b.className = "face-button" + (f === seleccion ? " active" : "") + (resueltas[f] ? " solved" : "");
    b.setAttribute("aria-pressed", String(f === seleccion));
    b.setAttribute("aria-label", caras[f].titulo + (resueltas[f] ? ", completada" : ", pendiente"));
  });
}
function girar(fila) {
  estado[seleccion][fila] = (estado[seleccion][fila] + 1) % 3;
  const completa = estado[seleccion].every(n => n === 0);
  if (completa) resueltas[seleccion] = true;
  render();
  if (completa) mostrarMensaje();
  else {
    // Restaurar foco tras reconstruir los botones, incluido al completar una fila.
    const siguiente = [...$("rows").querySelectorAll(".row")];
    (siguiente[fila].disabled ? siguiente.find(b => !b.disabled) : siguiente[fila])?.focus();
  }
}
function mostrarMensaje() {
  origenMensaje = $("faces").children[seleccion];
  const c = caras[seleccion];
  $("message-image").src = imagenes[seleccion]; $("message-image").alt = c.titulo;
  $("message-number").textContent = "Compromiso " + (seleccion + 1) + " de 6";
  $("message-title").textContent = c.titulo; $("message-explanation").textContent = c.explicacion;
  $("message-relation").textContent = c.relacion; $("message-action").textContent = "Acción: " + c.accion;
  $("next").textContent = resueltas.every(Boolean) ? "Ir al cierre" : "Siguiente cara";
  if (resueltas.every(Boolean)) $("closing").hidden = false;
  $("message").showModal();
}
$("close-message").addEventListener("click", () => $("message").close());
$("message").addEventListener("close", () => {
  if (origenMensaje?.isConnected) origenMensaje.focus();
  else $("faces").children[seleccion].focus();
});
$("next").addEventListener("click", () => {
  $("message").close();
  if (resueltas.every(Boolean)) {
    $("closing").scrollIntoView({ block: "center" }); $("closing").focus({ preventScroll: true });
  } else {
    seleccion = resueltas.findIndex(n => !n); render(); $("rows").querySelector("button").focus();
  }
});
function reiniciar() {
  estado = Array.from({ length: 6 }, () => [1, 1, 1]);
  resueltas = Array(6).fill(false); seleccion = 0;
  $("closing").hidden = true; render();
}
$("restart").addEventListener("click", reiniciar);
reiniciar();

// Un solo audio a la vez, sin reproducción automática y sin solicitudes externas.
let audioActivo = null;
let disponibles = 0;
function actualizarArchivo() {
  $("archive-status").textContent = disponibles === 6
    ? "Seis audios configurados para escuchar. Revisa su reproducción y registra las entregas por separado."
    : "Recurso en preparación · " + disponibles + " de 6 audios configurados. Idioma y expresiones por confirmar donde se indique.";
}
audios.forEach((dato, i) => {
  const tarjeta = el("article", "audio-card");
  tarjeta.append(el("h3", "", dato.titulo));
  tarjeta.append(el("p", "", "Idioma: " + (dato.idioma || "Pendiente de confirmar")));
  tarjeta.append(el("p", "", "Expresión: " + (dato.expresion || "Pendiente de incorporar")));
  tarjeta.append(el("p", "", (dato.significado ? "Sentido de la conversación (interpretación contextual): " : "Significado en español: ") + (dato.significado || "Pendiente de revisión")));
  if (dato.contexto) tarjeta.append(el("p", "", "Relación con el proyecto: " + dato.contexto));
  const player = el("audio"); player.controls = true; player.preload = "none";
  player.setAttribute("aria-label", "Escuchar " + dato.titulo);
  const aviso = el("p", "note"); aviso.setAttribute("role", "status");
  if (dato.disponible) {
    disponibles++; player.src = dato.ruta; aviso.textContent = "Audio configurado. Pulsa reproducir.";
    let falloRegistrado = false;
    player.addEventListener("error", () => {
      aviso.textContent = "No se pudo abrir " + dato.ruta + ". Verifica el nombre, la ubicación y el formato del archivo; después recarga la página.";
      if (!falloRegistrado) { falloRegistrado = true; disponibles--; actualizarArchivo(); }
    });
  } else aviso.textContent = "Audio pendiente de incorporar";
  player.addEventListener("play", () => {
    if (audioActivo && audioActivo !== player) audioActivo.pause();
    audioActivo = player;
  });
  tarjeta.append(player, aviso);
  if (dato.identificacionAutorizada && dato.credito.trim()) tarjeta.append(el("p", "note", "Voz: " + dato.credito));
  $("audio-cards").append(tarjeta);
});
actualizarArchivo();

const etiquetas = { institucion: "Institución", docente: "Docente", seccion: "Sección", comunidad: "Comunidad", idioma: "Idioma", fechaDocumento: "Fecha del documento", fechaPresentacion: "Presentación" };
Object.entries(datosAcademicos).forEach(([clave, valor]) => {
  if (valor.trim()) $("academic-data").append(el("dt", "", etiquetas[clave]), el("dd", "", valor));
});
integrantes.forEach(dato => {
  const tarjeta = el("article", "member"), marco = el("div", "portrait");
  const iniciales = dato.nombre.split(/\s+/).slice(0, 2).map(n => n[0]).join("");
  const respaldo = el("span", "", iniciales); respaldo.setAttribute("aria-hidden", "true"); marco.append(respaldo);
  const imagen = el("img"); imagen.alt = dato.alt; imagen.hidden = true;
  const estadoFoto = el("p", "note", "Foto pendiente");
  imagen.addEventListener("load", () => { imagen.hidden = false; respaldo.hidden = true; estadoFoto.hidden = true; });
  imagen.addEventListener("error", () => { imagen.hidden = true; respaldo.hidden = false; estadoFoto.hidden = false; });
  marco.append(imagen); imagen.src = dato.ruta;
  tarjeta.append(marco, estadoFoto, el("h3", "", dato.nombre), el("p", "", "Responsabilidad: " + (dato.responsabilidad || "Pendiente de acordar")));
  $("team").append(tarjeta);
});
galeria.forEach(dato => {
  const figura = el("figure"), imagen = el("img"); imagen.alt = dato.alt;
  imagen.addEventListener("load", () => {
    figura.append(imagen, el("figcaption", "", dato.titulo));
    $("gallery").append(figura); $("gallery-section").hidden = false;
  });
  imagen.addEventListener("error", () => { figura.remove(); $("gallery-section").hidden = !$("gallery").children.length; });
  imagen.src = dato.ruta;
});
