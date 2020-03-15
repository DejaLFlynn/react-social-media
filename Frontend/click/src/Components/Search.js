import React, {useState} from "react"
import Error from "./Error"
import { useInput } from "../Utilities/CustomHooks"
import Input from './Input'
import axios from "axios"
import "../CSS/HomePage.css"

const Search = async()=>{
    const searched = useInput("")
    const [hashtags, setHashtags] = useState([])

 const handleSubmit =(event)=>{
    event.preventDefault()
    try{
        let res = await axios.get(`http://localhost:4000/hashtags`)
        debugger
        setHashtags(res.data.payload)

    }catch(error){

    }
}

    
    useEffect(() => {
        getHashtagsUrl();
      }, []);
      let displayHashtagPics = hashtags.map(pic=>{
          
        <div className ="hashtagSearch"key= {pic.id}>
              <Image className="hashPic" image={pic.body}/>
        </div>
      })
    
      return(
          <div className="Search">

        <div className="hashtags">{displayHashtagPics}
        <form className="hashtagform" onSubmit={handleSubmit}></form>
        </div>
          </div>
      )

}

export default Search;
