let Slider = document.querySelector('.slider');
let Bolha = document.getElementById('anobolha');
var arr = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
var ultnum= 0;

Slider.addEventListener("input", mostraSliderValue, false);
var y= 8;

function mostraSliderValue() {
  Bolha.innerHTML = Slider.value;
  if(ultnum<=Slider.value){
    let x= y + '%';  
    console.log(x);
    Bolha.style.left = x; 
    y += 4;
  }else{
    let x= y + '%';  
    console.log(x);
    Bolha.style.left = x; 
    y -= 4;
  }
  ultnum = Slider.value;
}


function mostrarAno(){
  
  if(Slider.value == 1994){
    
    $('#relatorio').html(`
      <div id="dnovequatro" class="grid-layout">
        <img src="img/anos/1994.png">
        <p>Two major Greenpeace campaign victories. In May 1994, the International Whaling Commission establishes an Antarctic whale sanctuary (Environmental Agenda section).
         After 10 years of Greenpeace campaigning on toxic trade, 65 nations sign up to the Basel Convention banning the export of all hazardous wastes from the Organisation for Economic Co-operation and Development (OECD) to non-OECD countries.</p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/0c10f247-greenpeace_international_annualreport1994.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 1995){
    
    $('#relatorio').html(`
      <div id="novecinco"  class="grid-layout">
      <img src="img/anos/1995.png">
        <p>Read about French nuclear testing and Shell’s plans to dump the Brent Spar oil platform in the North Sea.
         You can also find out more about how chlorine chemistry threatens our health and future, together with setbacks in the fight to protect the ozone layer.</p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/08cf5e73-greenpeace_international_annualreport1995.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 1996){
   
    $('#relatorio').html(`
      <div id="noveseis"  class="grid-layout">
        <img src="img/anos/1996.png">
        <p>The US, Russia, France, China and the UK sign the Comprehensive Test Ban Treaty (CTBT). 
        Greenpeace underlines its global commitment, turning east and opening an office in Hong Kong as a first step towards establishing Greenpeace in China.
         Genetically modified organisms and solar power also feature in the report.</p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/711bca09-greenpeace_international_annualreport1996.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 1997){
   
    $('#relatorio').html(`
      <div id="novesete"  class="grid-layout">
        <img src="img/anos/1997.png">
        <p>This is Greenpeace’s first year in China. Highlights from the report include the Kyoto climate agreement,
         an expedition documenting the break-up of Antarctic ice shelves and actions to prevent logging in Canada’s ancient rainforests. 
         Scientific investigations reveal that children are exposed to harmful chemicals from soft PVC (polyvinyl chloride) toys, and that La Hague nuclear reprocessing plant is emitting high levels of radiation into the sea.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/d7b11a4b-greenpeace_international_annualreport1997.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 1998){
   
    $('#relatorio').html(`
      <div id="noveoito"  class="grid-layout">
        <img src="img/anos/1998.png">
        <p>1998 was the UN’s International Year of the Oceans. Greenpeace has long campaigned to protect the oceans, and our efforts are rewarded with ahistoric agreement that bans the dumping of offshore installations like the Brent Spar and a phase-out of radioactive and toxic waste discharges into the north-east Atlantic. 
        Following 15 years of Greenpeace campaigning, the EU decides to phase out drift nets. Also in 1998, logging giant MacMillan Bloedel announces it will phase out its clearcut operations in Canada’s pristine rainforests.
         Greenpeace fliesa balloon over the Taj Mahal to protest nuclear weapons testing by India and Pakistan.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/19432754-greenpeace_international_annualreport1998.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 1999){
    document.getElementById('relatorio').style.visibility='visible'; 
    $('#relatorio').html(`
      <div id="novenove" class="grid-layout">
        <img src="img/anos/1999.png">
        <p>Special reports from the Greenpeace science and political units reflection the year’s campaign activities. 
        Greenpeace activists are in the firing line as Norway and Japan continue whaling. 
        Our scientists reveal that Bhopal in India, the site of one of the world’s worst toxic chemical disasters in 1984, is still highly contaminated. 
        Greenpeace establishes a base in Manaus, Brazil, to help protect the Amazon.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/7d26362e-greenpeace_international_annualreport1999.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2000){
    document.getElementById('relatorio').style.visibility='hidden';
  }

  if(Slider.value == 2001){
    document.getElementById('relatorio').style.visibility='visible';
    $('#relatorio').html(`
      <div id="zeroum" class="grid-layout">
        <img src="img/anos/2001.png">
        <p>Witnesses of environmental crimes speak out.
         A grandmother describes being jailed for taking a peaceful stand against destruction of the Great Bear Rainforest on Canada’s West Coast. 
         Such resistance ultimately led to an agreement to preserve this forest.<br>
         An African American man, whose family was devastated by chemical pollution, speaks out to delegates, who later brokered the Stockholm Treaty to limit chemical pollution.
         A Greenpeace campaigner tells how confrontations with pirate fishers deep in the Atlantic Ocean helped clinch the protection of endangered tuna species.
       </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/3f773192-greenpeace_international_annualreport2001.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2002){
    $('#relatorio').html(`
      <div id="zerodois" class="grid-layout">
        <img src="img/anos/2002.png">
        <p>Vision, Movement, Spirit: Playing cat and mouse with whalers in the Southern Ocean, facing death threats from illegal loggers in the Amazon, crossing Greenland by dog sled.<br>
        It’s all in a day’s work for Greenpeace, and these are just some of the stories from the 2002 annual report – plus, of course, the financial facts and figures and reports from each campaign area.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/d64878f4-greenpeace_international_annualreport2002.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2003){
     
    $('#relatorio').html(`
      <div id="zerotres" class="grid-layout">
        <img src="img/anos/2003.png">
        <p>There are huge numbers of people on every continent who are committed to the common good, and who are no longer willing to accept the agendas of timid or inept governments or unscrupulous corporations.
        This global social movement has been described as the “emerging second superpower” and is made up of millions of people dedicated to environmental protection, human rights and social development.<br>
        The continued growth of Greenpeace – as laid out in this annual report – shows that even in economically difficult times people have a vision of a different world. This is our best hope for a better future.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/12ca5c14-greenpeace_international_annualreport2003.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2004){
     
    $('#relatorio').html(`
      <div id="zeroquatro" class="grid-layout">
        <img src="img/anos/2004.png">
        <p>Environmental crimes happen daily with no government, court, police or authority to turn to. We cannot rely on governments, alone, to act and make change. 
        We can rely on people. The world’s second superpower can guide change, indeed provoke it.
         And where people gather for change, you will find Greenpeace.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/cd9c0a9f-greenpeace_international_annualreport2004.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }
  
  if(Slider.value == 2005){
         
    $('#relatorio').html(`
      <div id="zerocinco" class="grid-layout">
        <img src="img/anos/2005.png">
        <p><b>2005 was a milestone for the planet -the year that the Kyoto Protocol finally became law.
        It took a long time to get here – over ten years – and it’s only the beginning of the battle, but Kyoto is about more than reducing greenhouse gas emissions.
        One of its most exciting results is to prove that people from the diverse communities of the world are learning to work together to solve global environmental problems.</b><br>
        People power is the future for environmental campaigning, and this year we have had some exciting victories by using the internet to bring together people from around the world to put pressure on companies and politicians – demanding change through ‘cyberactivism’. 
        Earlier in the year, Sony Ericsson became the latest global electronics giant to announce that it will phase out toxic chemicals from its products following our online action in which thousands of ordinary people took part to pressure electronics companies to come clean…
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/fabfb751-greenpeace_international_annualreport2005.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2006){
         
    $('#relatorio').html(`
      <div id="zeroseis" class="grid-layout">
        <img src="img/anos/2006.png">
        <p><b>Inconvenient truths and unlikely allies combined in 2006 to make it a notable year for Greenpeace and the environment.</b><br>
        Greenpeace has campaigned for climate protection for two decades, and is uniquely placed to provide leadership in the tough years to come: to promote radical solutions and oppose false promises. 
        Our financial independence – we take no money from governments or corporations – and adherence to the principles of peaceful nonviolent direct action give enormous support to the solutions we propose. 
        Our long involvement in the climate debate means we can hold the politicians to their promises and ensure that the new ‘greening of business’, or Corporate Social Responsibility, is not a soft sell, devoid of hard action, but something that will combine to hold global warming to a manageable level.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/f4b36653-greenpeace_international_annualreport2006.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2007){
         
    $('#relatorio').html(`
      <div id="zerosete" class="grid-layout">
        <img src="img/anos/2007.png">
        <p><b>Upon winning the 2007 Nobel Peace Prize, Al Gore said that he could notunderstand why young people were not chaining themselves to coal-firedpower stations.</b><br>
        They are…and so are we.<br>
        Taking action remains at the heart of Greenpeace. 
        Our non-violentactions happen in all parts of the world, and the number of ouractivists continues to grow. 
        We maintain our independence, accepting nomoney from corporations or governments. But, we want to do more thanact for others; we want to take action with others. 
        Today, it’s as important to Greenpeace that we help others takemeaningful action as it is that we take actions ourselves.<br>
        Our solutions set out a vision for a green and peaceful future. 
        They are designed to benefit both the planet and its people. 
        Big problemsneed big solutions and collective action: Greenpeace is ready for both.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/9ed4ca8b-greenpeace_international_annualreport2007.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2008){
         
    $('#relatorio').html(`
      <div id="zerooito" class="grid-layout">
        <img src="img/anos/2008.png">
        <p><b>Throughout 2008, Greenpeace worked not only to highlight the threats of climate change, but also on showcasing the opportunities and solutions that tackling climate change can bring.</b><br>
        Greenpeace’s Energy [R]evolution shows how to replace fossil fuels quickly and completely. 
        We developed it in partnership with the German Space Agency and universities around the world. 
        It supports current projections of both population and economic growth. 
        It uses existing technologies and rejects unproven carbon capture and storage technologies and dangerous nuclear power.<br>
        Our ‘Forests for Climate’ plan describes how deforestation can be halted by 2015 for priority areas such as the Amazon, the Congo and the paradise forests of Indonesia and Papua New Guinea, and by 2020 globally. 
        It shows how to halt deforestation by investing money raised on carbon markets into forest protection, and by implementing it on a global scale how to avoid the risk that deforestation is simply displaced.<br>
        Our ‘Cool Farming’ report describes how sustainable agriculture systems can feed the world while reducing climate changing emissions from fertilisers and livestock. 
        Our call for a global network of large, fully-protected marine reserves covering 40% of our oceans will not only restore the health of fish stocks and protect ocean life from habitat destruction and collapse, but also make our oceans more resilient to the ravages of climate change.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/99f47c4f-greenpeace_international_annualreport2008.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2009){
         
    $('#relatorio').html(`
      <div id="zeronove" class="grid-layout">
        <img src="img/anos/2009.png">
        <p><b>December 2009 – the UN’s Climate Change Conference in Copenhagen, where the talks were meant to avert catastrophic climate change. Together with a wide coalition of civil society groups, Greenpeace worked tirelessly – under the banner of the Global Campaign for Climate Action (GCCA), of which we were a founding member – to generate the public interest and pressure needed to make the those talks a success.</b><br>
        That pressure compelled some 120 Heads of State to turn up for one of the largest gatherings of world leaders ever. 
        Yet despite the clear public call for a Fair, Ambitious and legally-Binding (FAB) climate deal, all they produced was a feeble three-page Copenhagen Accord.<br>
        It is now clear that the only way big changes are going to happen is if civil society takes the power and compels politicians and business leaders to act.
         We must have a say in what our future and the future of our children will look like. We must make political and business leaders understand that, if they do not act to avert climate chaos, they will be replaced. 
        And to achieve this, we must protect the right to non-violent protest.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/1f27c590-greenpeace_international_annualreport2009.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2010){
         
    $('#relatorio').html(`
      <div id="umzero" class="grid-layout">
        <img src="img/anos/2010.png">
        <p><b>The year was marked by the devastation that the relentless and reckless pursuit of profit can cause: a human tragedy and enormous environmental, social and economic devastation that will last a generation or more. 
        We watched in horror as oil poured from a blown-out deepwater well in the Gulf of Mexico. The oil industry appeared to be both unprepared and powerless to stop it.</b><br>
        The Deepwater Horizon disaster provided yet another reason why the world should end its reliance on dwindling fossil fuels and embrace an Energy [R]evolution based upon smart use of energy and renewable energy sources.<br>
        Throughout the year, we challenged corporations to become leaders in the struggle to avert climate change.
         We challenged them to clean up their supply chains and address their roles in environmental destruction. 
        We demanded that they champion policies to protect the environment and the climate.<br>
        And we harnessed the power of consumers, urging them to vote with their pockets and demand goods and services that do not cost the Earth. 
        We have been increasingly campaigning with our supporters to let major brands know that we won’t buy environmental destruction.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/378d1ec0-greenpeace_international_annualreport2010.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2011){
         
    $('#relatorio').html(`
      <div id="umum" class="grid-layout">
        <img src="img/anos/2011.png">
        <p><b>2011 was the year in which Greenpeace celebrated its 40th anniversary as a campaigning organisation; while the environment may have been under threat back in 1971, it is in a state of crisis today. 
        With the world’s political and industrial leaders unwilling to avert climate chaos, swaths of the world’s forest destroyed daily, the Arctic under threat, and unsustainable consumption in all industrialised countries – the urgency of our work is increasing exponentially.</b><br>
        Within this context, Greenpeace has expanded and strengthened its mobilisation and empowerment of people all around the world to take action.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/fb46f646-greenpeace_international_annualreport2011.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2012){
         
    $('#relatorio').html(`
      <div id="umdois" class="grid-layout">
        <img src="img/anos/2012.png">
        <p><b>With the environmental crisis deepening and climate change impacts being felt across the globe, our work in 2012 proved increasingly more challenging and demanding. 
        However, we completed remarkable work, executed groundbreaking campaigns, and secured environmental victories all over the world.</b><br>
        We launched our “Save the Arctic” campaign, a bold people-powered initiative to draw a line in the ice and say to those who would scour the ends of the Earth for the last drop of oil: “You go no further!”<br>
        We continued our work to achieve zero deforestation by 2020 and to protect the forests globally. On land and at sea, we uncovered scandals within the fishing industry. 
        We showed how, behind the beautiful advertising and the catwalk glamour of the fashion world, there is an industry contributing to the toxic pollution destroying our waterways. And we continued to highlight the need to invest in clean energy to address climate change, exposing the impacts of coal mining and coal burning.<br>
        Greenpeace has a growing supporter base of some 24 million; those who work for us, volunteer, donate, follow, like, and take online action. 
        They share our work, and we share theirs, challenging the most fundamental threat to our future: Apathy. 
        Together, we are part of a growing global movement, more connected than ever before, and one that understands the links between green and peace, and between equity and ecology.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/609378ae-greenpeace_international_annualreport2012.pdf" style="color: white;">Read the full report</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2013){
         
    $('#relatorio').html(`
      <div id="umtres" class="grid-layout">
        <img src="img/anos/2013.png">
        <p><b>Campaigning for a peaceful, just and green future is no longer the job of a specialised few, but the common struggle of all.
        As the distance between rich and poor grows, and the grip of old power systems wreaks ever more havoc on the natural world, our struggle will and must intensify.</b><br>
        As we pour enormous energy and passion into our campaigns, we have also continued to evolve as an organisation, continued to invest in our capacity to design and deliver campaigns in emerging economies, to be as strong in the global south as we are in the north.
        This has not been without challenges: we have made some mistakes, especially in the arena of managing vast foreign currency transfers, as you can see from our financial report. We learn from those mistakes, make changes as necessary and emerge stronger.<br>
        We continue to invest in people-powered campaigning, enabling and catalysing citizens worldwide to bring about positive social and environmental change. 
        We believe all acts of courage, like those of the Arctic 30, propel us forward. 
        They inspire people to take their own actions, to join the growing global movement that will accept no other future than one that is green, peaceful and just.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/d8c715a7-greenpeace_international_annualreport2013.pdf" style="color: white;">Read the full report</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/7e69ddb5-gpi-combined-financial-statements-2013.pdf" style="color: white;>Financial statements 2013</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2014){
         
    $('#relatorio').html(`
      <div id="umquatro" class="grid-layout">
        <img src="img/anos/2014.png">
        <p><b>Now well into its fifth decade of existence, Greenpeace continues to reinvent itself.</b>
        Rather than bask in past glories, our organisation is undergoing a process of renewal that sets us on a path to achieving even more, and much needed, significant victories in the future.<br>
        As you can read in this Annual Report, in 2014 we achieved – with our supporters – a number of important victories in campaigns across the board and in a wide variety of countries.
        We achieved these victories while making big changes to the way we work. 
        We achieved many because we continue to evolve. 
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/1998b4c4-greenpeace_international_annualreport2014.pdf" style="color: white;">Read the full report</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/f4c0b94c-gpi-combined-financial-statements-2014.pdf" style="color: white;>Financial statements 2014</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2015){
         
    $('#relatorio').html(`
      <div id="umcinco" class="grid-layout">
        <img src="img/anos/2015.png">
        <p><b>Greenpeace is on a transformational path.</b>
        Our world is changing faster than at any other time in human history.
        We have witnessed rapid changes in the health of our planet from our oceans to the atmosphere, in economic growth, technological innovation and our increasing interconnectedness via the internet and on social media. 
        These forces drive our organisational change, and in 2015 Greenpeace continued to implement a new way of working, so that we become an organisation that is <b>more enabling, more engaged and more effective</b> as we look ahead to the next 10 years.<br>
        In this 2015 Annual Report, Greenpeace International provides a topline overview of the activities undertaken by the global Greenpeace network in 2015.
        As you will read, Greenpeace moved further towards <b>“people-powered” campaigning</b>, engaging and working alongside others to make change in their own backyards. 
        More and more we are also focusing our attention on what the root causes of issues are so that we can design our campaigns to tackle what is creating the problems in the first place, or holding back the solutions. 
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/f10f4d8b-greenpeace_international_annualreport2015.pdf" style="color: white;">Read the full report</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/d654f3a5-gpi-combined-financial-statements-2015.pdf" style="color: white;>Financial Statements 2015</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2016){
         
    $('#relatorio').html(`
      <div id="umseis" class="grid-layout">
        <img src="img/anos/2016.png">
        <p>Our planet and people are more interconnected than any world-wide-web we could create.
        What impacts one part, affects another and environmental protection is inextricably linked with social justice.<br>
        Last year we connected at climate protests; with elders working to save the Amazon and the Arctic; grandmothers and youth suing governments over climate change. 
        We were awed by the power of the people and we want to say thank you for everything you have done.<br> 
        Together we have achieved a great amount, but we all know there is much more to be done. 
        This report is a snapshot of some of the work we have done together, and we hope you will connect with the people and their stories. 
        We need you to continue to be part of the unstoppable global movement for a clean, green and just planet.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/6188faf2-greenpeace_international_annualreport2016.pdf" style="color: white;">Annual Report 2016</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/11/fdae7835-gpi-combined-financial-statements-2016.pdf" style="color: white;>Financial Statements 2016</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2017){
         
    $('#relatorio').html(`
      <div id="umsete" class="grid-layout">
        <img src="img/anos/2017.png">
        <p>We couldn’t have done it without you. We are grateful to all our supporters for standing by us, for being at the core of the work of Greenpeace International last year and we want to take a moment to share our 2017 Annual Report with you and celebrate our collective achievements.<br>
        Not everything we do makes a headline. But everything we do has been made possible through your support. 
        Millions of you added your name, your voice, your presence and your passion to petitions, actions, phone calls, emails and marches across the globe, standing up for people and the planet.<br>
        We hope that you will be as inspired as we have been by the challenges and achievements we shared in 2017, and will continue to work together with us to create a just, equal, green and peaceful planet.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/10/01501847-2017-fs-gpi-consolidated-final-signed_-08.10.2018.pdf" style="color: white;">Financial Statements GPI 2017</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2018/10/86cb1e92-independent-auditors-opinion-2017.pdf" style="color: white;>Independent Auditors’ opinion 2017</a></li>
    </ul> 
    `);
  }

  if(Slider.value == 2018){
         
    $('#relatorio').html(`
      <div id="umoito" class="grid-layout">
        <img src="img/anos/2018.png">
        <p>We couldn’t have done it without you. We are grateful to all our supporters for standing by us, for being at the core of the work of Greenpeace International last year and we want to take a moment to share our 2017 Annual Report with you and celebrate our collective achievements.<br>
        Not everything we do makes a headline. But everything we do has been made possible through your support. 
        Millions of you added your name, your voice, your presence and your passion to petitions, actions, phone calls, emails and marches across the globe, standing up for people and the planet.<br>
        We hope that you will be as inspired as we have been by the challenges and achievements we shared in 2017, and will continue to work together with us to create a just, equal, green and peaceful planet.
        </p>
      </div>
    `);
    $('#pdf').html(`
    <ul>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2019/06/de3fd269-gpi-combined-financial-statements-2018.pdf" style="color: white;">GPI Combined Financial Statements 2018</a></li>
      <li><a href="https://storage.googleapis.com/planet4-international-stateless/2019/07/11d5a6b1-greenpeace_international_annual_report_2018.pdf" style="color: white;>Greenpeace International Annual Report 2018</a></li>
    </ul> 
    `);
  }
}Slider.addEventListener("input", mostrarAno, false);
