let students=[];

const tbody=document.getElementById('tbody');
const form=document.getElementById('form');

form.addEventListener('submit',addStudent);

function addStudent(event){
    event.preventDefault();

    const id=document.getElementById('id').value;
    const name=document.getElementById('name').value;

if(id!='' && name!=''){
    const stud={id,name};
    students.push(stud);
    display();
    console.log(students)
    localStorage.setItem("arr",JSON.stringify(students));
}else{
    const str="<div class='alert alert-warning alert-dismissible fade show' role='alert'><strong>Warning!</strong> Please enter both the inputs.<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button></div>"
    document.getElementById('error').innerHTML=str;
}

    

    
}

const display=()=>{
tbody.innerHTML='';
    students.forEach((stud,index)=>{
        const newtr=document.createElement('tr');
        const str=`<td>${stud.id}</td>
        <td>${stud.name}</td>
        <td><button onclick="deleteStudent(${index})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="updateStudent(${index})" class="btn btn-success">Update</button></td>`;
        newtr.innerHTML=str;
        tbody.appendChild(newtr);
    })
}

    


const deleteStudent=(index)=>{
    students.splice(index,1);
    display();
    localStorage.setItem("arr",JSON.stringify(students));
}

const updateStudent=(index)=>{
    const id=prompt("Enter new id:");
    const name=prompt("Enter new name:");
    if(id!=null && name!=null){
        students[index]={id,name};
        display();
        localStorage.setItem("arr",JSON.stringify(students));
        
    }
}
