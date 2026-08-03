*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:"Poppins",sans-serif;
scroll-behavior:smooth;
}

body{
background:#0b1120;
color:#fff;
overflow-x:hidden;
}

header{
position:fixed;
top:0;
left:0;
width:100%;
padding:20px 8%;
display:flex;
justify-content:space-between;
align-items:center;
background:rgba(10,15,30,.8);
backdrop-filter:blur(12px);
z-index:1000;
}

.logo{
font-size:30px;
font-weight:700;
color:#fff;
text-decoration:none;
}

.logo span{
color:#3b82f6;
}

nav a{
margin-left:30px;
text-decoration:none;
color:#fff;
transition:.3s;
font-weight:500;
}

nav a:hover{
color:#3b82f6;
}

.hero{
min-height:100vh;
display:flex;
justify-content:space-between;
align-items:center;
padding:120px 8%;
gap:60px;
}

.hero-content{
flex:1;
}

.hero h3{
font-size:25px;
color:#9ca3af;
}

.hero h1{
font-size:65px;
margin:15px 0;
line-height:1.1;
}

.hero h2{
font-size:35px;
color:#3b82f6;
margin-bottom:20px;
}

.hero p{
font-size:18px;
line-height:1.8;
max-width:600px;
color:#d1d5db;
}

.buttons{
margin-top:35px;
display:flex;
gap:20px;
flex-wrap:wrap;
}

.btn,
.btn-outline{
padding:14px 35px;
border-radius:10px;
text-decoration:none;
font-weight:600;
transition:.35s;
display:inline-block;
}

.btn{
background:#3b82f6;
color:#fff;
}

.btn:hover{
transform:translateY(-5px);
box-shadow:0 10px 25px rgba(59,130,246,.4);
}

.btn-outline{
border:2px solid #3b82f6;
color:#3b82f6;
}

.btn-outline:hover{
background:#3b82f6;
color:white;
}

.socials{
margin-top:40px;
display:flex;
gap:20px;
}

.socials a{
width:50px;
height:50px;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background:#16213e;
color:#fff;
font-size:22px;
transition:.3s;
}

.socials a:hover{
background:#3b82f6;
transform:translateY(-6px);
}

.hero-image{
flex:1;
display:flex;
justify-content:center;
}

.hero-image img{
width:360px;
height:360px;
object-fit:cover;
border-radius:50%;
border:8px solid #3b82f6;
box-shadow:0 0 40px rgba(59,130,246,.5);
}

section{
padding:100px 8%;
}

.title{
text-align:center;
font-size:42px;
margin-bottom:50px;
color:#3b82f6;
}

.about-box,
.card,
form{
background:rgba(255,255,255,.05);
backdrop-filter:blur(12px);
padding:30px;
border-radius:18px;
border:1px solid rgba(255,255,255,.1);
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
text-align:center;
transition:.35s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 15px 30px rgba(59,130,246,.25);
}

.card i{
font-size:55px;
color:#3b82f6;
margin-bottom:20px;
}

.card h3{
margin-bottom:12px;
}

form{
display:flex;
flex-direction:column;
gap:20px;
max-width:700px;
margin:auto;
}

input,
textarea{
padding:16px;
border:none;
border-radius:10px;
background:#111827;
color:white;
font-size:16px;
}

textarea{
height:180px;
resize:none;
}

footer{
padding:35px;
text-align:center;
background:#09101d;
margin-top:40px;
color:#9ca3af;
}

@media(max-width:900px){

.hero{
flex-direction:column-reverse;
text-align:center;
}

.hero h1{
font-size:45px;
}

.hero-image img{
width:250px;
height:250px;
}

nav{
display:none;
}

.buttons{
justify-content:center;
}

.socials{
justify-content:center;
}

.hero p{
margin:auto;
}

}
