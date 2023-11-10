// navbar https://stackoverflow.com/questions/72450250/how-to-make-the-nav-bar-in-all-your-pages-without-having-to-rewrite-the-code-in (og Stein Henrik) //
var navbarItems = 
                `<ul>
                    <li> <a class="navbar" href="index.html">Home</a></li>
                    <li> <a class="navbar" href="about me.html">About me</a></li>
                    <li> <a class="navbar" href="socials.html">Socials</a></li>
                </ul>
                <style>
        ul{
        font-family: "DeterminationSans", sans-serif;
        font-size: 300%;
        background-color: black;
        width: 100%;
        text-align: center;
    }

    li{
        display: inline;
    }
    </style>`
document.body.insertAdjacentHTML("afterbegin", navbarItems);