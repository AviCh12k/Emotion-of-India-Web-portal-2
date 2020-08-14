$(".dropdown-item").on("click",(event)=>{
    // console.log(event.target.text);
    $(".aspect-button").text(event.target.text);
    $(".aspect-heading").text(event.target.text);
    var aspect_name = event.target.text;
    val1 = [116.745117, 13402, 42978, 23543, 17987, 42122, 18035, 27108, 53919];
    val2 = [58.817, 7818, 18979, 8917, 14125, 11987, 15860, 7652, 35121];
    val3 = [151.3598, 22507, 59933, 24533, 48587, 30872, 45196, 17456, 60901];
    val4 = [173.2597, 25903, 51979, 31509, 63193, 34023, 54068, 19861, 74300];
    val5 = [136.8525, 21686, 36654, 25023, 36835, 38636, 41768, 14728, 64944];
    val6 = [81.3066, 13332, 28211, 14605, 22515, 16697, 24991, 12909, 33256];
    var data = [{
        type: "sunburst",
        ids: [aspect_name + '',
          aspect_name + '-anger',
          aspect_name + '-anticipation',

          aspect_name + '-disgust',
          aspect_name + '-fear',
          aspect_name + '-joy ',
          aspect_name + '-sadness',
          aspect_name + '-surprise',
          aspect_name + '-trust'],
          labels: [aspect_name + '',
          'anger',
          'anticipation',
          'disgust',
          'fear',
          'joy',
          'sadness',
          'surprise',
          'trust'],
          parents:[
          '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + '',
          aspect_name + ''],
        values: [],
        outsidetextfont: {size: 20, color: "#377eb8"},
        // leaf: {opacity: 0.4},
        marker: {line: {width: .1}},
        insidetextorientation: 'radial',
      }
    ];
    console.log(data[0].values);
    console.log(aspect_name);
    if(aspect_name=="Nature")
        {data[0].values = val1;
        $(".intro").text("Our surroundings have a very huge impact on our lives. Nature heals but we harm. The lockdown though has helped nature heal. Pollution levels have reduced significantly leading to clearer night sky. Stars are visible again, birds are chirping and everything now looks beautiful again. The sunburst given depicts the results of what people feel about nature's healing.");}
    else if(aspect_name=="Lockdown")
        {data[0].values = val2;
          $(".intro").text("Lockdown has impacted our lives in many ways. For some it has had a positive impact while for some it has shattered their hopes and dreams. The given sunburst depicts the same.");
        }
    else if(aspect_name=="Education")
        {data[0].values = val3;
          $(".intro").text("Education is all about gaining knowledge and skills and applying that on real time problems. COVID-19 impacted education of students in both positive and negative ways. There is a sudden shift  to online education from physical education. For some students education was not completely accessible due to lack of proper facilities while for some it gave them time to gain some extra knowledge on the field they want to enhance. The sunburst charts shown here depicts the same.");
        }
    else if(aspect_name=="Politics")
        {data[0].values = val4;
          $(".intro").text("It is truly said politics is not a game but a serious business. One wrong decision can make or break lives. In case of lockdown, people were very anticipatory on the decision made by the government. They were not sure of working from home or studying online. On the other hand, many were happy to spend time with their family.");
        }
    else if(aspect_name=="Health")
        {data[0].values = val5;
          $(".intro").text("During these difficult times health has become a major topic of discussion for the people. It has affected people not physically but majorly as emotionally. Everyone is concerned for their health. People are shifting to online fitness programs to practice in home due to lock-down as one's health is his/her own responsibility.");
        }
    else if(aspect_name=="Market")
        {data[0].values = val6;
          $(".intro").text("A market is one of a composition of systems, institutions, procedures, social relations or infrastructures whereby parties engage in exchange. Indian economy was impacted on a large scale by COVID-19. There was a condition of crisis everywhere. Businesses shutdown, people lost their livelihood as well as their only source of income. The sunburst charts depicts the same.");
        }
    console.log(data[0].values);

      
      var layout = {
        margin: {l: 0, r: 0, b: 0, t:0},
        sunburstcolorway:["#636efa","#ef553b","#00cc96"],
      };
      
      
      Plotly.newPlot('myDiv', data, layout);
        
      $(".img-plot").attr("src","/images/" + aspect_name + ".jpg");
})