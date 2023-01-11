<script>

        // adiciona title quando está na pagina/altera quando sai da pagina
        
        
        document.addEventListener("visibilitychange", (event) => {
            if(document.visibilityState ==="visible") {
                document.title = "Seja bem vindo";
            }
            else{
                document.title = "Volta aqui irmão";
            }
        });
        
    </script>
