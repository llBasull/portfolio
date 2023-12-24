const typingTextElement = document.getElementById("typing-text");
      const rolesArray = [
        "Software Engineer",
        "Full Stack Web Developer",
        "MERN Developer",
      ];
      let index = 0;
      let letterIndex = 0;
      let roleIndex = 0;

      function type() {
        if (letterIndex === 0) {
          // Display the first character "A" all the time
          typingTextElement.innerHTML = "A ";
        } else if (letterIndex <= rolesArray[roleIndex].length) {
          typingTextElement.innerHTML += rolesArray[roleIndex].charAt(
            letterIndex - 1
          );
        } else {
          setTimeout(erase, 1000);
          return;
        }
        letterIndex++;
        setTimeout(type, 100);
      }

      function erase() {
        if (letterIndex > 0) {
          typingTextElement.innerHTML =
            "A " + rolesArray[roleIndex].substring(0, letterIndex - 1);
          letterIndex--;
          setTimeout(erase, 50);
        } else {
          roleIndex = (roleIndex + 1) % rolesArray.length;
          setTimeout(type, 500);
        }
      }
      type();