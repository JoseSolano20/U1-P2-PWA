self.addEventListener('install',(event)=>{
 console.log('sw: install');
});

self.addEventListener('fetch',(event)=>{
 if (event.request.url.includes('style.css')){
 console.log(event.request.url);
 
 const resp = new Response (

    `
    body{

            color: red;
            background-color: #000;

        }`,
    {

        headers: {
            'Content-Type': 'text/css',
        },
    }  
 );
 }


});

self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('animal1.jpg')){
        let foto = fetch('/U1-P2-PWA/animal2.jpg');
        event.respondWith(foto);
    }
});