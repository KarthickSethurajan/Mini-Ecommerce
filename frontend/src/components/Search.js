import {useState} from 'react';
import{useNavigate}from 'react-router-dom';

export default function Search(){
    const [keyword,setKeyword]=useState("");
    const navigate=useNavigate();

    const searchHandler=()=>{
      navigate('/search?keyword='+keyword)
  
    }

    return  <div class="input-group">
          <input
            type="text"
            id="search_field"
            onChange={(event)=>
              setKeyword(event.target.value)
            }
            onBlur={searchHandler}
            class="form-control"
            placeholder="Enter Product Name ..."
          />
          <div class="input-group-append">
            <button onClick={searchHandler} id="search_btn" class="btn"> 
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
}