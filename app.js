const music=new Audio('audio/10.mp3');

const songs=[
    {
    id:"1",
    songName:`Tum Kya Mile<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/1.jpg",
    },
    {
    id:"2",
    songName:`Tu Mujse Juda<br>
    <div class="subtitle">Arman Malik</div>`,
    poster:"img/2.jpg",
    },
    {
    id:"3",
    songName:`Tu Hai To Kya<br>
    <div class="subtitle">KK</div>`,
    poster:"img/3.jpg",
    },
    {
    id:"4",
    songName:`Teri Ashiqi Ne Mera<br>
    <div class="subtitle">Arijit Singh</div>`,
    poster:"img/4.jpg",
    },
    {
    id:"5",
    songName:`Tere Vaste<br>
    <div class="subtitle">Sunidhi Singh</div>`,
     poster:"img/5.jpg",
    },
    {
    id:"6",
    songName:`Tere Pyar Me<br>
    <div class="subtitle">Palak Tiwari</div>`,
     poster:"img/6.jpg",
    },
    {
    id:"7",
    songName:`Tere Mere<br>
    <div class="subtitle">Aleon Mask</div>`,
    poster:"img/7.jpg",
    },
    {
    id:"8",
    songName:`Tere Hawale<br>
    <div class="subtitle">Arijit Singh & Silpi Rao</div>`,
    poster:"img/8.jpg",
    },
    {
        id:"9",
        songName:`Tere Anshu<br>
        <div class="subtitle">Akash Chaitanya</div>`,
        poster:"img/9.jpg",
        },
        {
        id:"10",
        songName:`Tannu Kinna Pyar<br>
        <div class="subtitle">Javed Mousin</div>`,
         poster:"img/10.jpg",
        },
        {
        id:"11",
        songName:`Sithara<br>
        <div class="subtitle">Ustad Nusrat Fatah Ali Khan</div>`,
         poster:"img/11.jpg",
        },
        {
        id:"12",
        songName:`Ram Siya Ram<br>
        <div class="subtitle">Sachet Tandon</div>`,
        poster:"img/12.jpg",
        },
        {
        id:"13",
        songName:`Manike...<br>
        <div class="subtitle">Yohani</div>`,
        poster:"img/13.jpg",
        },

        {
            id:"14",
            songName:`Man Meri Jaan<br>
            <div class="subtitle">King</div>`,
            poster:"img/14.jpg",
            },
            {
            id:"15",
            songName:`Malang Sajna <br>
            <div class="subtitle">Prampara Tandon</div>`,
            poster:"img/15.jpg",
            },
            {
                id:"16",
                songName:`Koi AAye To Le<br>
                <div class="subtitle">Alka Yognik</div>`,
                poster:"img/16.jpg",
                },
                {
                id:"17",
                songName:`Kahani Suno<br>
                <div class="subtitle">Kaifi Khali</div>`,
                 poster:"img/17.jpg",
                },
                {
                id:"18",
                songName:`Jannat Ve<br>
                <div class="subtitle">Darshan Rawal</div>`,
                 poster:"img/18.jpg",
                },
                {
                id:"19",
                songName:`Gallan Mith<br>
                <div class="subtitle">Aleon Mask</div>`,
                poster:"img/19.jpg",
                },
                {
                id:"20",
                songName:`Dil Galti Kr <br>
                <div class="subtitle">Rahat Fatahi Ali Khan</div>`,
                poster:"img/20.jpg",
                }
]




Array.from(document.getElementsByClassName('song_item')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

masterPlay.addEventListener(('click'), ()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');
    }
});

const makeAllbackground = () =>{
    Array.from(document.getElementsByClassName('song_item')).forEach((el) =>{
        el.style.background = 'rgb(105,105,105, .0)';
    });
}

const makeAllplay = () =>{
    Array.from(document.getElementsByClassName('PlayListplay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}



let index=0;

let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
let download_music=document.getElementById('download_music');


// let subdownload_music=document.getElementById('subtitle');
 Array.from(document.getElementsByClassName('PlayListplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
    index=el.target.id;
    // console.log(index);
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });


    makeAllbackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105, .1)";
  
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    wave.classList.add('active1');

    });
 })

 
 let currentStart=document.getElementById('currentStart');
 let currentEnd=document.getElementById('currentEnd');
 let bar2=document.getElementById('bar2');
 let seek=document.getElementById('seek');
 let dot=document.getElementsByClassName('dot')[0];

 music.addEventListener('timeupdate', () => {
    let music_curr=music.currentTime;
    let music_dur=music.duration;
 
    // console.log(music_curr);
    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);
 
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2=Math.floor(music_curr / 60);
    let sec2=Math.floor(music_curr % 60);
 
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar=parseInt((music_curr / music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    // console.log(seekbar)
    
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
    
 });

 seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration / 100;
 })

 let vol_icon=document.getElementById('vol_icon');
 let vol=document.getElementById('vol');
 let vol_bar=document.getElementsByClassName('vol_bar')[0];
 let vol_dot=document.getElementById('vol_dot');

 vol.addEventListener('change', ()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    const vol_a=vol.value;
    vol_bar.style.width= `${vol_a}%`;
    vol_dot.style.left= `${vol_a}%`;
    music.volume = vol_a / 100;

 })

 let back=document.getElementById('back');
 let next=document.getElementById('next');

 back.addEventListener('click', (el)=>{
    index-=1;
    if(index<=0){
        index=Array.from(document.getElementsByClassName('song_item')).length;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
   

    let songTitle=songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let {songName} = elss;
        title.innerHTML= songName;
        download_music.setAttribute('download',songName);
    });

    makeAllbackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105, .1)";
  
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    wave.classList.add('active1');

 });

 next.addEventListener('click', (el)=>{
    index+=1;
    if(index>Array.from(document.getElementsByClassName('song_item')).length){
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
   

    let songTitle=songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let {songName} = elss;
        title.innerHTML= songName;
        download_music.setAttribute('download',songName);
    });

    makeAllbackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105, .1)";
  
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    wave.classList.add('active1');

 })

 

let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft-=330;
});


let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let item=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',() => {
    item.scrollLeft+=330;
});
pop_art_left.addEventListener('click',() => {
    item.scrollLeft-=330;
});
// console.log(5)


let shuffle=document.getElementsByClassName('shuffle')[0];
  
shuffle.addEventListener('click', () =>{
    let a = shuffle.innerHTML;

    switch(a){
        case "next":
             shuffle.classList.add('bi-arrow-repeat');
             shuffle.classList.remove('bi-music-note-beamed');
             shuffle.classList.remove('bi-shuffle');
             shuffle.innerHTML('repeat');
             break;
        case "repeat":
             shuffle.classList.remove('bi-arrow-repeat');
             shuffle.classList.remove('bi-music-note-beamed');
             shuffle.classList.add('bi-shuffle');
             shuffle.innerHTML('random');
              break;
        case "random":
              shuffle.classList.remove('bi-arrow-repeat');
              shuffle.classList.add('bi-music-note-beamed');
              shuffle.classList.remove('bi-shuffle');
              shuffle.innerHTML('next');
              break;
        
    }
  });

  music.addEventListener('ended', ()=>{
    index++;
    if(index>songs.length)
    index=1;
    music.src=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href=`audio/${index}.mp3`;
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download',songName);
    });


    makeAllbackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background="rgb(105,105,105, .1)";
  
    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');

    wave.classList.add('active1');


  })
