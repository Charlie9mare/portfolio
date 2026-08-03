/* ==========================
   GOOGLE FONT
========================== */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
scroll-behavior:smooth;
}

:root{

--bg:#050816;
--bg2:#0f172a;

--card:rgba(255,255,255,.08);

--glass:rgba(255,255,255,.12);

--text:#ffffff;

--text2:#cbd5e1;

--blue:#3b82f6;

--border:rgba(255,255,255,.15);

--shadow:0 15px 40px rgba(0,0,0,.35);

}

body.light{

--bg:#f5f7fb;

--bg2:#ffffff;

--card:rgba(255,255,255,.75);

--glass:rgba(255,255,255,.65);

--text:#111827;

--text2:#475569;

--border:rgba(0,0,0,.08);

}

body{

background:var(--bg);

color:var(--text);

overflow-x:hidden;

transition:.4s;

}

#particles-js{

position:fixed;

width:100%;

height:100%;

top:0;

left:0;

z-index:-2;

}

.cursor{

position:fixed;

width:18px;

height:18px;

border-radius:50%;

background:var(--blue);

pointer-events:none;

opacity:.25;

z-index:9999;

transition:.1s;

}

header{

position:fixed;

top:0;

left:0;

width:100%;

padding:18px 8%;

display:flex;

justify-content:space-between;

align-items:center;

backdrop-filter:blur(18px);

background:rgba(5,8,22,.55);

border-bottom:1px solid rgba(255,255,255,.05);

z-index:1000;

}

.logo{

font-size:32px;

font-weight:700;

}

.logo span{

color:var(--blue);

}

nav{

display:flex;

gap:35px;

}

nav a{

text-decoration:none;

color:var(--text);

font-weight:500;

transition:.3s;

}

nav a:hover{

color:var(--blue);

}

.theme-toggle{

width:45px;

height:45px;

display:flex;

justify-content:center;

align-items:center;

border-radius:50%;

background:var(--card);

cursor:pointer;

}

.hero{

min-height:100vh;

display:grid;

grid-template-columns:1fr 1fr;

align-items:center;

padding:120px 8%;

gap:60px;

}

.hero h3{

font-size:24px;

color:var(--text2);

}

.hero h1{

font-size:68px;

margin:12px 0;

line-height:1.1;

}

.hero h2{

font-size:34px;

margin-bottom:25px;

color:var(--blue);

height:42px;

}

.hero p{

font-size:18px;

line-height:1.9;

max-width:620px;

color:var(--text2);

}

.buttons{

display:flex;

gap:18px;

margin-top:35px;

flex-wrap:wrap;

}

.btn{

padding:15px 34px;

background:linear-gradient(45deg,#2563eb,#60a5fa);

border-radius:12px;

text-decoration:none;

color:white;

font-weight:600;

transition:.35s;

}

.btn:hover{

transform:translateY(-6px);

box-shadow:0 15px 35px rgba(59,130,246,.35);

}

.btn2{

padding:15px 34px;

border:2px solid var(--blue);

border-radius:12px;

text-decoration:none;

color:var(--blue);

font-weight:600;

transition:.35s;

}

.btn2:hover{

background:var(--blue);

color:white;

}

.socials{

display:flex;

gap:18px;

margin-top:35px;

}

.socials a{

width:52px;

height:52px;

display:flex;

justify-content:center;

align-items:center;

background:var(--card);

border-radius:50%;

color:var(--text);

font-size:20px;

text-decoration:none;

transition:.35s;

backdrop-filter:blur(15px);

}

.socials a:hover{

transform:translateY(-8px);

background:var(--blue);

color:white;

}

.hero-image{

display:flex;

justify-content:center;

}

.glass{

width:390px;

height:390px;

border-radius:30px;

background:var(--glass);

backdrop-filter:blur(25px);

display:flex;

justify-content:center;

align-items:center;

border:1px solid var(--border);

box-shadow:var(--shadow);

}

.glass img{

width:320px;

height:320px;

border-radius:50%;

object-fit:cover;

border:7px solid var(--blue);

}
