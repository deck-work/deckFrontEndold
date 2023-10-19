import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./presentation.scss";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
function Custom() {
const [imageCount,setImageCount]=useState("");
const [imageName,setImageName]=useState("");
const [deckText,setDeckText]=useState("");
const location = useLocation();
const [loadingData, setLoadingData] = useState(true);
const [imgs, setImgs] = useState([]);
const [apiResponse, setApiResponse] = useState({
  imageCount: '',
  imageName: '',
  deckText:" "
});
// console.log(data);
// const user=data.user
// const deck=data.deck
// let userId = 1;
// let deckId = "e2a3a350-4b34-4609-aeb5-62ae0131efea";
// const location = useLocation();

  // Parse the query parameters from the location
  const queryParams = new URLSearchParams(location.search);

  // Access specific query parameters
  const param1 = queryParams.get("userId");
  const param2 = queryParams.get("deckId");
  // console.log(param1,param2);
useEffect(() => {
 
  fetchData();
}, []);
useEffect(() => {
setImage() 
}, [apiResponse]);
async function fetchData() {
  try{
  const apiResponse1 = await callAPI(apiUrls.GETPPTDATA, {userId:param1,deckId:param2}, "GET");
  console.log(apiResponse1,"apiii");
  const updatedObject = {
    ...apiResponse,
    imageCount: apiResponse1.data.imageCount,
    imageName: apiResponse1.data.imageName,
    deckText:apiResponse1.data.deckText
  };
  
setApiResponse(updatedObject)
  // setImageName(apiResponse1.data.imageName)
  // setImageCount(apiResponse1.data.imageCount);
  // setDeckText(apiResponse1.data.deckText)
  // setVal(apiResponse1.data);
}
catch(err){
  console.log(err)
}
finally{
  setLoadingData(false);
}
}

function setImage(){
  console.log("spaisen",apiResponse);
let tempArr=[];
  tempArr.push({id:1,value:`http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}.jpg`})
  setWordData(tempArr[0])
  for(let i=2; i<=apiResponse.imageCount; i++){
    tempArr.push({id:{i},value:`http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}-${i}.jpg`})
    }
    setImgs(tempArr)
}
console.log("image",imgs)
  const [wordData, setWordData] = useState();
  const [val, setVal] = useState(0);

  const handleClick = (index) => {
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
    console.log("wweerr",wordSlider);
  };

  const handleNext = () => {
    let index = val < imgs.length - 1 ? val + 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };
const HandleChange=(event)=>{
  const updatedObject = {
    ...apiResponse,
        deckText:event.target.deckText
  };
  setApiResponse(updatedObject)
  
}
  const handlePrevious = () => {
    let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
    setVal(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div>
      {!loadingData ? (
        <div className="main">
          <div className="slides-container">
            <div className="thumbnails">
              {imgs.map((data, i) => (
                <div
                  className={`thumbnail ${wordData?.id === i ? "clicked" : ""}`}
                  key={i}
                  onClick={() => handleClick(i)}
                >
                  <img
                    src={data.value}
                    alt={`Thumbnail ${i + 1}`}
                    height="171"
                    
                    width="334"
                    className={wordData?.id === i ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
            <div className="main-slide">
              <div className="img">
                {console.log(wordData, "wordSData")}
                <img src={wordData?.value} alt="Main Slide" height="500" width="600" />
              </div>
            </div>
            <div className="notes">
              <div className="notes-flex">
                <h3>Notes</h3>
                <button>Generate</button>
              </div>
              <div className="notes-input">
                <textarea
                  // type="z"
                  name="deckText"
                  onChange={HandleChange}
                  value={apiResponse.deckText}
                  placeholder="Your presentation notes"
                  style={{ width: "250px", height: "474px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
  
}

export default Custom;
