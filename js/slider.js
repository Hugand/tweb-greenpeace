// data variable esta no ficheiro dadosRecuros.js
let slider = document.querySelector('.slider')
let bolha = document.getElementById('anobolha')
let arr = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
let sliderStepSize= slider.getBoundingClientRect().width/24

slider.addEventListener("input", mostraSliderValue, false)

mostraSliderValue()

window.onresize = windowResize

function mostraSliderValue() {
  bolha.innerHTML = slider.value
  const sliderPos = arr.indexOf(slider.value)
  const left = sliderStepSize*sliderPos

  bolha.style.left = left+"px"
  mostrarAno(parseInt(slider.value))
}

function windowResize(){
  sliderStepSize= slider.getBoundingClientRect().width/24
  mostraSliderValue()
}

function mostrarAno(ano){

  $('#relatorio').html(`
    <div id="dnovequatro" class="grid-layout">
      ${(data[ano].text !== "Relatório indisponível") ?
        '<img src="img/anos/'+ano+'.png">' 
      :
        "" }
      <p>${data[ano].text}</p>
    </div>
  `)
  $('#pdf').html(`
    <label>Ler mais em:</label>
    <ul>
      ${(data[ano].links !== null) ? data[ano].links : "<li style='color: white'>Não existem hiperligações disponíveis</li>"}
    </ul> 
  `)
}

slider.addEventListener("input", mostrarAno, false)
