document.getElementById("themeToggle").addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

    });

    function showSkill(name, percent) {

      const display = document.getElementById("skillDisplay");

      display.textContent = `${name} — ${percent}`;

    }

 
