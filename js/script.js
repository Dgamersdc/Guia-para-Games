
let jogo = document.getElementById("jogo");
let especifica = document.getElementById("spec");
let placaDeVideo = document.getElementById("placaDeVideo");
let memoriaRam = document.getElementById("memoriaRam");
let processador = document.getElementById("processador");

class game {
    constructor(name, especifica, placaDeVideo, processador, memoriaRam) {
        this.name = name;
        this.especifica = especifica;
        this.placaDeVideo = placaDeVideo;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
    }
}

let games = [5];
games[0] = new game("CSGO", "Especificações do CSGO:", "Placa de Video - NVIDIA® GeForce GTX 1650", "Processador - Intel® Core™ i5 750", "Memoria Ram - 8 GB de RAM");
games[1] = new game("VALORANT","Especificações do VALORANT:","Placa de Video - NVIDIA® Geforce GT 730", "Processador - Intel® Core™ i3-41 50 , AMD 3 1200", "Memoria Ram - 8 GB de RAM");
games[2] = new game("COD","Especificações do COD:", "Placa de Video - NVIDIA® GeForce® GTX 1060", "Processador - Intel® Core™ i3-6100, AMD Ryzen™ 3 1200 ", "Memoria Ram - 8 GB de RAM");
games[3] = new game("OVERWATCH","Especificações do OVERWATCH:", "Placa de Video - NVIDIA® GeForce® GTX 1060", "Processador - Intel® Core™ i3 ou AMD Phenom™ X3 865 ", "Memoria Ram - 8 GB de RAM");
games[4] = new game("APEX","Especificaçõesdo APEX:", "Placa de Video - NVIDIA® GeForce GTX 1650", "Processador - Intel® Core i3 6300, AMD FX 4350", "Memoria Ram - 8 GB de RAM");

function pesquisarButton() {
    let pesquisa = document.getElementById("txtBusca").value;
    let find = false;

    for (let i = 0; i < games.length; i++) {
        if (pesquisa.toLowerCase() === games[i].name.toLowerCase()) {
            jogo.innerHTML = "";
            especifica.innerHTML = games[i].especifica;
            placaDeVideo.innerHTML = games[i].placaDeVideo;
            processador.innerHTML = games[i].processador;
            memoriaRam.innerHTML = games[i].memoriaRam;
            find = true;
            break;
        }
    }
    if (!find) {
        jogo.innerHTML = "";
        especifica.innerHTML = "";
        placaDeVideo.innerHTML = "";
        processador.innerHTML = "";
        memoriaRam.innerHTML = "";
    }
}