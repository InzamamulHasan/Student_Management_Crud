let students=[];
let tbody=document.querySelector("tbody");
let c=0;
let gid;

function add_data(){
    let n=document.getElementById("name").value;
    let e=document.getElementById("email").value;
    let g=document.getElementById("grade").value;
    let a=document.getElementById("age").value;
    let d=document.getElementById("degree").value;
    if(a==""||n==""||e==+""||g==""||d==""){
        alert("Insufficent Data");
        return;
    }
    if(document.querySelector("#submit").innerText=="Add Student"){
        c++;
        let obj={
        Id:c,
        name: n,
        email:e, 
        grade:g,
        age: a,
        degree: d,
    };
   
    students.push(obj);
    console.log(students);
    display(students);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("email").value = "";
    }
    if(document.querySelector("#submit").innerText=="Edit Student"){
        let obj={
            Id:gid,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            grade: document.getElementById("grade").value,
            age: document.getElementById("age").value,
            degree: document.getElementById("degree").value
        };
        console.log("gotIt");

        for(let i=0;i<students.length;i++){
            if(students[i].Id=gid){
                students[i]=obj;
                break;
            }  
        }
        display(students);
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("grade").value = "";
        document.getElementById("degree").value = "";
        document.getElementById("email").value = "";
        document.querySelector("#submit").innerText="Add Student";
    }  
    //document.querySelector("#submit").removeEventListener("inclick",add)
}
function display(arr){
    document.querySelector("tbody").innerHTML=null;
    arr.forEach(function(elem,index){
        let tr=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=index+1;
        let index1=index+1;
        let col2=document.createElement("td");
        col2.innerText=elem.name;
        let col3=document.createElement("td");
        col3.innerText=elem.email;
        let col4=document.createElement("td");
        col4.innerText=elem.grade;
        let col5=document.createElement("td");
        col5.innerText=elem.age;
        let col6=document.createElement("td");
        col6.innerText=elem.degree+"  ";
        let edit=document.createElement("img");
        edit.src="edit.png";
        let del=document.createElement("img");
        edit.addEventListener("click",function(){
            document.querySelector("#submit").innerText="Edit Student";
            document.getElementById("name").value = elem.name;
            document.getElementById("grade").value = elem.grade;
            document.getElementById("age").value = elem.age;
            document.getElementById("degree").value = elem.degree;
            document.getElementById("email").value = elem.email;
            console.log("inza");
            gid=index+1;

        }); 
            
        del.src="trash.png";
        del.addEventListener("click",function(){
            c--;
            arr.splice(index,1);
            display(arr);
        });
        let div=document.createElement("div");
        div.append(edit,del);
        col6.appendChild(div);
        tr.append(col1,col2,col3,col5,col4,col6);
        tbody.appendChild(tr); 
    })
}
function search(){
    let data=document.querySelector("#se").value;
    let arr=[];
    console.log("haskj")
    for(let i=0;i<students.length;i++){
        console.log(students[i].name)
        if(students[i].name==data || students[i].email==data|| students[i].degree==data){
            arr.push(students[i]);
        }
    }
    if(data==""){
        display(students);
        return;
    }
    display(arr) ;
}



