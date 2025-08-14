let inputElem = document.getElementById("inputField");
      let clickBtn = document.querySelector(".btn");
      let todoElem = document.querySelector(".todoListsElem");

      const addTodo = () => {
        let pElem = document.createElement("p");
        pElem.textContent = inputElem.value;
        todoElem.append(pElem);
        inputElem.value = "";
      };

      clickBtn.addEventListener("click", () => {
        addTodo();
      });

      todoElem.addEventListener("click", (event) => {
        let currentElem = event.target;
        currentElem.remove();
      });
