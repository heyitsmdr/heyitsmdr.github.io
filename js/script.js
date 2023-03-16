const MDR_PROMPT = '<span style="color:var(--blue)">guest</span>@<span style="color:var(--pink)">mdr.dev</span> $&nbsp;';

function shellCmd(cmd, delay = 250, newLine = true) {
  return `${MDR_PROMPT}<span style="color:var(--white)">${cmd}</span>^${delay}${newLine ? '<br><br>' : ''}`;
}

function tableize(data, func) {
  let table = '<table>';

  data.forEach(d => {
    table += '<tr>';
    table += func(d);
    table += '</tr>';
  });

  return `${table}</table><br>`;
}

function returnHome() {
  window.location = "/";
}