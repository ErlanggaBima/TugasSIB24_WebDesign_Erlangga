let endpoint = 'https://api.jikan.moe/v4/top/manga'

let konten = document.getElementById('konten')

let datas = fetch(endpoint)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                
                response.data.forEach(element => {
                    
                    let elemen = document.createElement('div')

                    console.log(element);
                    
                    elemen.innerHTML = `
                                        <div class="card shadow-sm" style="min-height: 460px">

                                        <div class='overflow-hidden' style='height:450px'>
                                            <img class='card-img-top img-fluid h-100 object-fit-cover' src="${element.images.webp.image_url}" alt="">
                                        </div>
                                        
                                        <div class="card-body">
                                        <h2> ${element.title} </h2>
                                        <p class="card-text">${element.synopsis.substring(0, 100)}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                        </div>
                                        </div>
                                    </div>`

                                    
                    konten.appendChild(elemen)
                });
                
                
            
            
            })