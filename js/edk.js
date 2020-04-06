window.onload = function() {
  init();
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "makanan.txt", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var text = JSON.parse(xhttp.responseText);
      $("#hitung").append("Menunjukkan ", text.makanan.length , " hasil:");
      for ( i in text.makanan ) {
        let m = document.createElement("div");
        let p = document.createElement("div");
        p.classList.add("MenuBox");
        let q = document.createElement("img");
        q.setAttribute("src", text.makanan[i].gambar);
        p.appendChild(q);
        let j = document.createElement("h2");
        let k = document.createTextNode(text.makanan[i].nama);
        j.appendChild(k);
        p.appendChild(j);
        j = document.createElement('p');
        k = document.createTextNode("Rp ");
        j.append(k);
        k = document.createTextNode(text.makanan[i].harga);
        j.appendChild(k);
        p.appendChild(j);
        j = document.createElement('p');
        k = document.createTextNode(text.makanan[i].waktu);
        j.appendChild(k);
        k = document.createTextNode(" menit");
        j.appendChild(k);
        p.appendChild(j);
        m.appendChild(p);
        j = document.createElement("button");
        k = document.createTextNode("Add to Cart");
        j.appendChild(k);
        m.appendChild(j);
        j = document.createElement("button");
        k = document.createTextNode("Delete");
        j.appendChild(k);
        m.appendChild(j);
        document.getElementsByClassName("ListMenu")[0].appendChild(m);
      }
    }
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("heading2")[0].style.top = "75.333px";
  } else {
    document.getElementsByClassName("heading2")[0].style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
      $('#sb').click();
    }
});

$("#sb").click(function() {
  $("#hitung").empty();
  $(".ListMenu").empty();
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "makanan.txt", true);
  xhttp.send();
  $('#hitung').empty();
  if ($("#search").val() == null || $("#search").val() == " ") {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var text = JSON.parse(xhttp.responseText);
        for ( i in text.makanan ) {
          let m = document.createElement("div");
          let p = document.createElement("div");
          p.classList.add("MenuBox");
          let q = document.createElement("img");
          q.setAttribute("src", text.makanan[i].gambar);
          p.appendChild(q);
          let j = document.createElement("h2");
          let k = document.createTextNode(text.makanan[i].nama);
          j.appendChild(k);
          p.appendChild(j);
          j = document.createElement('p');
          k = document.createTextNode("Rp ");
          j.append(k);
          k = document.createTextNode(text.makanan[i].harga);
          j.appendChild(k);
          p.appendChild(j);
          j = document.createElement('p');
          k = document.createTextNode(text.makanan[i].waktu);
          j.appendChild(k);
          k = document.createTextNode(" menit");
          j.appendChild(k);
          p.appendChild(j);
          m.appendChild(p);
          j = document.createElement("button");
          k = document.createTextNode("Add to Cart");
          j.appendChild(k);
          m.appendChild(j);
          j = document.createElement("button");
          k = document.createTextNode("Delete");
          j.appendChild(k);
          m.appendChild(j);
          document.getElementsByClassName("ListMenu")[0].appendChild(m);
        }
      }
    }
    $("#hitung").append("Menunjukkan ", text.makanan.length , " hasil:");
  }
  else {
    let input = $('#search').val();
    input = input.toLowerCase();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var text = JSON.parse(xhttp.responseText);
        var l = 0;
        for ( i in text.makanan ) {
          if ( text.makanan[i].nama.toLowerCase().includes(input) ) {
            l += 1;
            let m = document.createElement("div");
            let p = document.createElement("div");
            p.classList.add("MenuBox");
            let q = document.createElement("img");
            q.setAttribute("src", text.makanan[i].gambar);
            p.appendChild(q);
            let j = document.createElement("h2");
            let k = document.createTextNode(text.makanan[i].nama);
            j.appendChild(k);
            p.appendChild(j);
            j = document.createElement('p');
            k = document.createTextNode("Rp ");
            j.append(k);
            k = document.createTextNode(text.makanan[i].harga);
            j.appendChild(k);
            p.appendChild(j);
            j = document.createElement('p');
            k = document.createTextNode(text.makanan[i].waktu);
            j.appendChild(k);
            k = document.createTextNode(" menit");
            j.appendChild(k);
            p.appendChild(j);
            m.appendChild(p);
            j = document.createElement("button");
            k = document.createTextNode("Add to Cart");
            j.appendChild(k);
            m.appendChild(j);
            j = document.createElement("button");
            k = document.createTextNode("Delete");
            j.appendChild(k);
            m.appendChild(j);
            document.getElementsByClassName("ListMenu")[0].appendChild(m);
          }
        }
        $("#hitung").append("Menunjukkan ", l, " hasil :");
      }
    }    
  }
})