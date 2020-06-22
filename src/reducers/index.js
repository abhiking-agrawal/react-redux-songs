import { combineReducers } from 'redux'

//action crator
const songReducer = ()=>{
   return [
    
    {"title":"1904","artist":"The Tallest Man on Earth"," duration":"20.12","web_url":"http://www.songnotes.cc/songs/78-the-tallest-man-on-earth-1904","img_url":"http://fireflygrove.com/songnotes/images/artists/TheTallestManOnEarth.jpg"},
    {"title":"#40","artist":"Dave Matthews"," duration":"19.99","web_url":"http://www.songnotes.cc/songs/119-dave-matthews-40","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},
    {"title":"40oz to Freedom","artist":"Sublime"," duration":"19.96","web_url":"http://www.songnotes.cc/songs/45-sublime-40oz-to-freedom","img_url":"http://fireflygrove.com/songnotes/images/artists/Sublime.png"},
    {"title":"#41","artist":"Dave Matthews"," duration":"19.96","web_url":"http://www.songnotes.cc/songs/46-dave-matthews-band-41","img_url":"http://fireflygrove.com/songnotes/images/artists/DaveMatthews.jpg"},
    {"title":"American Girl","artist":"Tom Petty"," duration":"19.77","web_url":"http://www.songnotes.cc/songs/86-tom-petty-american-girl","img_url":"http://fireflygrove.com/songnotes/images/artists/TomPetty.png"},
    {"title":"American Music","artist":"Violent Femmes"," duration":"19.91","web_url":"http://www.songnotes.cc/songs/123-violent-femmes-american-music","img_url":"http://fireflygrove.com/songnotes/images/artists/ViolentFemmes.jpg"}
   ]
}

const selectSongReducer = (selectedSong=null,action)=>{
    if(action.type === "SONG_SELECTED"){
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
   songs:  songReducer,
   selectedSong : selectSongReducer
})