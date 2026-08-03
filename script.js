*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{
background:#0d1117;
color:#fff;
}

header{
position:fixed;
width:100%;
top:0;
background:#161b22;
padding:20px 8%;
z-index:1000;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
}

nav h2{
color:#58a6ff;
}

nav ul{
display:flex;
list-style:none;
gap:25px;
}

nav ul li a{
text-decoration:none;
color:white;
transition:.3s;
}

nav ul li a:hover{
color:#58a6ff;
}

.hero{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:52px;
margin-bottom:15px;
}

.hero h1 span{
color:#58a6ff;
}

.hero h3{
font-size:24px;
margin-bottom:20px;
color:#c9d1d9;
}

.hero p{
max-width:650px;
margin:auto;
line-height:1.8;
font-size:18px;
}

.btn{
display:inline-block;
margin-top:30px;
padding:14px 35px;
background:#58a6ff;
color:white;
text-decoration:none;
border-radius:8px;
transition:.3s;
}

.btn:hover{
background:#1f6feb;
transform:translateY(-3px);
}

section{
padding:100px 8%;
}

section h2{
font-size:40px;
margin-bottom:35px;
text-align:center;
color:#58a6ff;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:#161b22;
padding:30px;
border-radius:12px;
transition:.3s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 10px 25px rgba(88,166,255,.3);
}

.card h3{
margin-bottom:15px;
}

#about p,#contact p{
max-width:800px;
margin:auto;
text-align:center;
line-height:1.8;
font-size:18px;
}

#contact a{
color:#58a6ff;
text-decoration:none;
}

footer{
padding:30px;
text-align:center;
background:#161b22;
margin-top:50px;
}

@media(max-width:768px){

.hero h1{
font-size:38px;
}

.hero h3{
font-size:20px;
}

nav{
flex-direction:column;
gap:15px;
}

nav ul{
flex-wrap:wrap;
justify-content:center;
}
}
