
let arr = ["0","550px","250px","450px"]
let back_color = ["bisque","rgba(0,0,0,0.4)"]
let side_navs = ["mySidenav1","mySidenav2","mySidenav3"]

  var k = 0;
  function Nav_toggle(num){
    if(document.getElementById("main").style.marginLeft == "0px")
      k = 0;
      let z = (num == 0 || num == k) ? 0 : 1 ;
      document.body.style.backgroundColor = back_color[z]; 
    document.getElementById("main").style.marginLeft = "0"; 
    for(let i = 1 ; i <= 3 ; i++)
    if(i == num && k!= num)
    document.getElementById(side_navs[i-1]).style.width = arr[i],
    document.getElementById("main").style.marginLeft = arr[i];
    else 
    document.getElementById(side_navs[i-1]).style.width = "0";
    k = num
  }

let click_count = []
var called = 0;
const classes_for_box = ["present-somwre","present-here","not-present-here"]
//Number of conditions be 4
//Present here => This is blue =>present-here
//Present Somwhere else 

function clicked(id){
  let ele = document.getElementById(id);
  let X = parseInt(id[0])
  let y = parseInt(id[1])
  click_count[X][y] =(click_count[X][y]+1)%3 ;
  console.log(click_count[X][y]);
  ele.className = classes_for_box[click_count[X][y]];
}


  function initnotes(){
    Nav_toggle(3)
    if(called) return;
    called = 1;
    let  notes_board= document.getElementById("notes__board");
        for (let i = 0; i <= 9; i++){
        var row = document.createElement("span");
        row.className = "notes_row";
        let count_row_click = []
        //console.log(i);
        for(let j = 0; j < 5 ; j++) {
            let numb = document.createElement("span");
            count_row_click.push(0)
            numb.className = "present-somwre";
            numb.id = (i)*10+j+"0box";
            numb.onclick = function () {
            clicked(numb.id); 
            };
            numb.innerHTML = (i);
            row.appendChild(numb);
        }
        click_count.push(count_row_click)
    notes_board.appendChild(row);
    }
    //console.log(click_count);
}



initnotes()