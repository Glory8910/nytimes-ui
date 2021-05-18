let apikey = config.APIKEY


let home = document.getElementById("home")
let worldd = document.getElementById("worldnews")


let urlst = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apikey}`

gethomenews(urlst);

async function gethomenews(homeurl) {
    let sectthome=document.createElement("section")
    sectthome.id="datahome"

    let data = await fetch(homeurl);
    let homedata = await data.json();
    console.log(homedata.results)


    await homedata.results.map((ele, index) => {

        let date = new Date(`${ele.created_date}`)

     

        let dateval = date.toDateString()
      

        let div1 = document.createElement('div')

        div1.id = `ele${index}`

        div1.innerHTML = `
      <div class="card mb-3 col-12" >
               <div class="row g-0">
   
                   <div class="col-md-8">
                     <div class="card-body">
                         <h3 class="card-title section-card">${ele.section}</h3>
                         <h5 class="card-title titlecard">${ele.title}</h5>
                         <h5 class="card-title date-card">${dateval}</h5>

                         <p class="card-text abstract-card">${ele.abstract}</p>
                         <a class="linkss " href=${ele.short_url}>continue reading</a>
                     </div>
                 </div>

                <div class="col-md-4">
                    <img class="img-thumbnail  imgset" src="${ele.multimedia[4].url}" alt="newsimg">
               </div>
          </div>
      </div>`

     

        sectthome.append(div1)
        sectthome.style.display="block"
        let doc=document.getElementById("displaybl")
       doc.innerHTML=sectthome.innerHTML

    })

}





function fetchdata(sect) {

    let uri = `https://api.nytimes.com/svc/topstories/v2/${sect.target.id}.json?api-key=${apikey}`



    getnews(uri);

    async function getnews(uri) {


        let data1 = await fetch(uri);
        let homedata1 = await data1.json();
       


        let sectt=document.createElement("section")
        sectt.id=`${sect.target.id}`

        await homedata1.results.map((ele, index) => {

            let date = new Date(`${ele.created_date}`)

            let dateval = date.toDateString()
            // console.log( ele.multimedia[0].url )
            // ${ele.created_date}

            let div1 = document.createElement('div')

            div1.id = `ele${index}`


            if(ele.multimedia!==null) {
                div1.innerHTML = `
          <div class="card mb-3 col-12" >
                   <div class="row g-0">
       
                       <div class="col-md-8">
                         <div class="card-body">
                             <h3 class="card-title section-card">${ele.section}</h3>
                             <h5 class="card-title titlecard">${ele.title}</h5>
                             <h5 class="card-title date-card">${dateval}</h5>
    
                             <p class="card-text abstract-card">${ele.abstract}</p>
                             <a class="linkss " href=${ele.short_url}>continue reading</a>
                         </div>
                     </div>
    
                    <div class="col-md-4">
                        <img class="img-thumbnail  imgset" src="${ele.multimedia[0].url}" alt="newsimg">
                   </div>
              </div>
          </div>`

            }
         
       
        sectt.append(div1)
        sectt.style.display="block"
        let doc=document.getElementById("displaybl")
       doc.innerHTML=sectt.innerHTML
        })

    }



   
}