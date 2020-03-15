import React, {useState} from "react"
import Error from "./Error"
import { useInput } from "../Utilities/CustomHooks"
import Input from './Input'
import axios from "axios"
const Search = async()=>{
    const [hashtags, setHashtags] = useState([])
    const getHashtagsUrl = async ()=>{
        const hashtagsUrl = `http://localhost:4000/hashtags`
        try{
            let res = await axios.get(hashtagsUrl)
            
            setHashtags(res.data.payload)
        }catch(error){
           setHashtags([]) 
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

        <div className="hashtags">{displayHashtagPics}</div>
          </div>
      )

}

export default Search;
