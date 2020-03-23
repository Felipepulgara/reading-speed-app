const exampleText = `El Presidente Sebastián Piñera realizó la noche de este domingo una cadena nacional, para referirse a la situación actual ante el Covid-19, en la que partió señalando que "No tengo un mensaje fácil para ustedes esta noche, pero sí tengo un mensaje de fe y esperanza".
El mandatario indicó que "Sabemos que las próximas semanas serán duras, muy duras para todos. El mundo entero, y también Chile, estamos enfrentando la peor catástrofe sanitaria de los últimos 100 años, para lo cual lamentablemente todavía no existe vacuna ni tratamiento comprobado. Esto significa un gran desafío, pero también una gran oportunidad".

Fuente: soychile.cl - https://www.soychile.cl/Santiago/Politica/2020/03/22/644442/Pinera-Las-proximas-semanas-seran-duras-muy-duras-para-todos.aspx`;

const otherExampleTest =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem eum, ipsum assumenda officia voluptas expedita natus inventore! Repellat omnis temporibus nam, sapiente molestiae libero, deleniti quibusdam officia doloremque sit veritatis a eos, et dolorem soluta ad consectetur quos velit odit ratione. Laudantium quod ex nobis fugit, soluta molestias hic. Porro aspernatur ratione enim sunt ea doloribus ipsam magni ducimus molestiae delectus earum, quos quam fugiat suscipit necessitatibus officia a eveniet reprehenderit assumenda laborum. Sapiente illum dolorem eligendi omnis veritatis? Vel mollitia aut deserunt quia aspernatur numquam ad maxime neque, suscipit optio, sapiente debitis nulla aliquid architecto cum molestias officia ipsam temporibus laboriosam quis? Cum ullam vitae dolorem esse omnis voluptatibus asperiores, laudantium mollitia quisquam. Ullam asperiores odit debitis nisi quasi, ipsam voluptatum illum iusto odio, eum itaque maiores adipisci, ducimus veniam in provident.';

const wordsForMinute = (words, seconds) => {
  try {
    return Math.round((words / seconds) * 60);
  } catch (error) {
    console.log(error);
  }
};

const wordsInText = text => {
  let cont = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.substr(i, 1) === ' ' || text.length === i + 1) {
      cont += 1;
    }
  }
  return cont;
};

const removeLineBreaks = text => {
  return text.split('\n').join(' ');
};

let wordsForMinute_ = wordsForMinute(300, 120);
let wordsInText_ = wordsInText(otherExampleTest);
let removeLineBreaks_ = removeLineBreaks(exampleText);
console.log(`Palabras en texto: ${wordsInText_}`);
console.log(`Palabras por minuto: ${wordsForMinute_}`);
console.log(`Texto arreglado: ${removeLineBreaks_}`);
