const addbutton = document.querySelector('#add')

const updateLSData = () => {
    const textareadata = document.querySelectorAll('textarea')
  const notes = [ ];

  textareadata.forEach((note) => {
    return notes.push(note.value);
  })
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note')

    const htmlData = `

    <div class="col-md-3">
      
    <div class="opration">
      <button class="edit"><i class="bi bi-pencil-square"></i></button>
      <button class="delet"><i class="bi bi-trash3-fill"></i></button>
    </div>

    <div class="main  ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  </div>
    `
    note.insertAdjacentHTML('afterbegin',htmlData)
    console.log(note);

    document.body.appendChild(note);

    // buttom refrence 
    const editbtn = note.querySelector('.edit')
    const deletbtn = note.querySelector('.delet')
    const maindiv = note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    // delete the node 
    deletbtn.addEventListener('click', () =>{
        note.remove();
        updateLSData();
    })



    // toggale edit button
    textarea.value = text
    maindiv.value = text

    editbtn.addEventListener('click', () =>{
      maindiv.classList.toggle('hidden');
      textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change', (event) => {
      const value = event.target.value;
      maindiv.innerHTML = value

      updateLSData();
    })

    
}
// getting data from local storage 
const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes);
if (notes){notes.forEach((note) => addNewNote(note) )};

addbutton.addEventListener('click', () => addNewNote());