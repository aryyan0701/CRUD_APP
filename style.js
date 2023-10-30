
      let addBtn = document.getElementById('add_btn');
      let inputField = document.querySelector('.form-control');
      let chapterList = document.getElementById('chapterList');

      // Allow adding elements by click
      addBtn.addEventListener('click', addChapter);

      // Allow adding elements by pressing Enter key
      inputField.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          addChapter();
        }
      });

      function addChapter() {
        let chapterName = inputField.value;

         let newLi = document.createElement('li');
          newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
          newLi.innerHTML = `<span>${chapterName}</span>
          <div>
            <button class="btn btn-primary btn-sm me-2" onclick="editItem(this)">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="removeItem(this)">Remove</button>
          </div>`;
          
          chapterList.appendChild(newLi);

          // Clear the input field after adding a chapter
          inputField.value = "";
        }

         
        

       function editItem(button) {
        let listItem = button.parentElement.parentElement;
        let textSpan = listItem.querySelector('span');
        let editButton = listItem.querySelector('.btn-primary');
        let newText = prompt('Edit the subjects:', textSpan.textContent);

        if (newText !== null) {
          textSpan.textContent = newText;
          editButton.textContent = 'edit';
        }
      }


      function removeItem(button) {
        let listItem = button.parentElement.parentElement;
        chapterList.removeChild(listItem);

        if(chapterList.children.length<=0){
          alert("Now your list is empty, please add new sujects.")

  
        }
      }
      
    