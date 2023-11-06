import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GeneratingModal from "./GeneratingModel";
import "./presentation.scss";
import { apiUrls } from "../utils/apiUrls";
import { callAPI } from "../utils/apiUtils";
function Custom() {
  const [imageCount, setImageCount] = useState("");
  const [imageName, setImageName] = useState("");
  const [deckText, setDeckText] = useState("");
  const location = useLocation();
  const [loadingData, setLoadingData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [abble, setAble] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState([]);
  const [summary, setSummary] = useState([]);
  const [apiResponse, setApiResponse] = useState({
    imageCount: '',
    imageName: '',
    ext:""
  });
  const [apiSlideResponse, setApiSlideResponse] = useState({
    id: '',
    text: '',
    summary: " ",
    summaryCount:" "
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
    getSlides();
    fetchData();
  }, []);
  useEffect(() => {
    setImage()
  }, [apiResponse]);
  async function fetchData() {
    try {
      const apiResponse1 = await callAPI(apiUrls.GETPPTDATA, { userId: param1, deckId: param2 }, "GET");
      console.log(apiResponse1,"apiii");
      const updatedObject = {
        ...apiResponse,
        imageCount: apiResponse1.data.imageCount,
        imageName: apiResponse1.data.imageName,
        ext:apiResponse1.data.ext
      };

      setApiResponse(updatedObject)
      // setImageName(apiResponse1.data.imageName)
      // setImageCount(apiResponse1.data.imageCount);
      // setDeckText(apiResponse1.data.deckText)
      // setVal(apiResponse1.data);
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setLoadingData(false);
    }
  }
  const handleCloseModal = () => {
    // setIsModalOpen(false);
    setIsLoading(false); // Reset loading state
    // setIsImported(false); // Reset imported state
    // setUploadedFile(null);
  };
  function setImage() {
    
    console.log("spaisen", apiResponse);
    let tempArr = [];
    if(apiResponse.ext=="pdf"){
    // tempArr.push({ id: 1, value: `http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}.jpg` })
    tempArr.push({ id: 1, value: `http://localhost:5001/uploads/${param1}/${param2}/page_1.png` })
    setWordData(tempArr[0])
    for (let i = 2; i <= apiResponse.imageCount; i++) {
      // tempArr.push({ id: i, value: `http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}-${i}.jpg` })
      tempArr.push({ id: i, value: `http://localhost:5001/uploads/${param1}/${param2}/page_${i}.png` })
    }}else{
    tempArr.push({ id: 1, value: `http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}.jpg` })
    setWordData(tempArr[0])
    for (let i = 2; i <= apiResponse.imageCount; i++) {
      tempArr.push({ id: i, value: `http://localhost:5001/uploads/${param1}/${param2}/${apiResponse.imageName}-${i}.jpg` })
    }
    }
    setImgs(tempArr)
  }
  // console.log("image",imgs);
  const [wordData, setWordData] = useState();
  const [val, setVal] = useState(0);
  const [x, setX] = useState(0);
  const handleClick = (index) => {
    setVal(index);
    const wordSlider = imgs[index];
    setX(index)
    setWordData(wordSlider);
    // console.log("wweerr", wordSlider);
  };

  // const handleNext = () => {
  //   let index = val < imgs.length - 1 ? val + 1 : val;
  //   setVal(index);
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };
  const HandleChange = (event) => {
    text=event.target.deckText
    setText(text)
    const updatedObject = {
      ...apiSlideResponse,
      
      summaryCount:event.target.deckText
    };

    setApiSlideResponse(updatedObject)
    

  }
  // const handlePrevious = () => {
  //   let index = val <= imgs.length - 1 && val > 0 ? val - 1 : val;
  //   setVal(index);
  //   const wordSlider = imgs[index];
  //   setWordData(wordSlider);
  // };
  const getSlides = async () => {
    try {
      const apiResponse2 = await callAPI(apiUrls.GETSLIDESTEXT, { deckId: param2 }, "GET");
      console.log("apiii", apiResponse2);
      setText(apiResponse2.data)
      setSummary(apiResponse2.data)
      
      const updatedObject = {
        ...apiSlideResponse,
        id:apiResponse2.data,
        text:apiResponse2.data,
        summary:apiResponse2.data,
        summaryCount:apiResponse2.data
      };

      setApiSlideResponse(updatedObject)
      // setImageName(apiResponse1.data.imageName)
      // setImageCount(apiResponse1.data.imageCount);
      // setDeckText(apiResponse1.data.deckText)
      // setVal(apiResponse1.data);
    }
    catch (err) {
      console.log(err)
    }
  }
  const generateSummary = async () => {
    // setLoadingData(true)
    setIsLoading(true)
    try {
      const apiResponse1 = await callAPI(apiUrls.GETSUMMARY, { deckId: param2 ,slideId:slideId}, "GET");
      console.log(apiResponse1, "apiii");
      if(apiResponse1.status==200){
        const updatedObject = {
          ...apiSlideResponse,
        
        };
        setIsLoading(false)
        setApiSlideResponse(updatedObject)
    // const apiResponse = await callAPI(apiUrls.CONVERT, {}, "POST", formdata,{},headers);
        const headers={
        "Content-Type": "application/json",

        }
      const respon = await callAPI(apiUrls.CREATESLIDETEXT, {}, "POST",{ slideId: apiSlideResponse.id[x].slideId,summary:apiResponse1.data.message},{},headers);
console.log(respon);
}
      const updatedObject = {
        ...apiSlideResponse,
        summary: apiSlideResponse.summary[x].summary
      }

      apiSlideResponse(updatedObject)
      // setApiResponse(updatedObject)
      // setImageName(apiResponse1.data.imageName)
      // setImageCount(apiResponse1.data.imageCount);
      // setDeckText(apiResponse1.data.deckText)
      // setVal(apiResponse1.data);
    }
    catch (err) {
      console.log(err)
    }
    finally {
      setIsLoading(false);

    }

  }
  
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
                    className={wordData?.id === i + 1  ? "selected" : ""}
                  />
                </div>
              ))}
            </div>
            <div className="main-slide">
              <div className="img">
                <img src={wordData?.value} alt="Main Slide" height="500" width="600" />
              </div>
            </div>
            <div className="notes">
              <div className="notes-flex">
                <h3>Notes</h3>
                {apiSlideResponse.summary[x]?.summaryCount>=1?<button onClick={generateSummary} disabled={true}>Generated</button>:
               <button onClick={generateSummary} disabled={false}>Generate</button>}
              </div> 
              <div className="notes-input">
                <textarea
                  // type="z"
                  name="deckText"
                  id={apiSlideResponse.id[x]?.slideId}
                  value={apiSlideResponse.summary[x]?.summary?apiSlideResponse.summary[x].summary:apiSlideResponse.text[x]?.textExtract}
                  onChange={HandleChange}
                  placeholder="Your presentation notes"
                  style={{ width: "250px", height: "474px" }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isLoading && <GeneratingModal handleCloseModal={handleCloseModal} />}
    </div>
  );

}

export default Custom;
