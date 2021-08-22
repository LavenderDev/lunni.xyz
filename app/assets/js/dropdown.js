if (user) {
     const dropbtn = document.querySelector(".drop-btn")
     const  dropdown = document.querySelector(".drop-items")
     dropbtn.onclick = () => {
          dropdown.classList.toggle("hid")
     }
}
     
/* css
.navbar {
     display: flex;
     justify-content: space-evenly;
}
.nav-branding {
     margin-top: 15px;
}
.nav-drop {
     margin-top: 14px;
}

.drop-btn {
     display: flex;
     background-color: var(--dark);
     border-radius: 5px;
     padding: 5px 10px 5px 10px ;
}
.drop-btn span {
     font-size: 17px;
     font-weight: 500;
}
.drop-btn i {
     margin-top: 2px;
     margin-left: 10px;
}

.drop-items {
     margin-top: 10px;
     padding: 10px;
     background-color: var(--dark);
     border-radius: 5px;
     opacity: 1;
     transition: opacity 0.2s linear;
}
.drop-items.hid {
     opacity: 0;
     pointer-events: none;
}
.drop-items ul {
     list-style: none;
}
.drop-items a {
     text-decoration: none;
}
.drop-item-last-child {
     margin-top: 5px;
}
.drop-li {
     color: white;
     transition: color 0.5s linear;
}
.drop-li:hover {
     color: #a0a0a0;
}


*/


/* js
 <div class="navbar">
          <div class="nav-branding">
               <h2>Lunni</h2>
          </div>
          <div class="nav-drop">
               <div class="drop-btn">
                    <span>Lavender</span>
                    <i class="fas fa-sort-down"></i>
               </div>
               <div class="drop-items hid">
                    <ul>
                         <li ><a href="/dashboard" class="drop-li">Dashboard</a></li>
                         <li class="drop-item-last-child"><a href="/logout" class="drop-li">Logout</a></li>
                    </ul>
               </div>
          </div>
     </div>
     */