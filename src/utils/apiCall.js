import { callAPI,callAPI2,ThirdPartycallAPI } from 'src/utils/apiUtils';
import { apiUrls } from 'src/utils/apiUrls';

export const getHistoryList = async (filterGuideId,filteCircleId)=>{
    try{       
     const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     const body = { timezone: timeZone, clientId:localStorage.getItem('clientId'),guide:filterGuideId, circle:filteCircleId};          
     const apiResponse = await callAPI(apiUrls.call_history,{}, "POST", body);
     return apiResponse;
    }
    catch(err){
      console.log(err)
    }     
  }

  
export const getSchedules = async (filterGuideId,filteCircleId)=>{
    try{       
     const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     const body = { timezone: timeZone, clientId:localStorage.getItem('clientId'),guide:filterGuideId, circle:filteCircleId};          
     const apiResponse = await callAPI(apiUrls.schedule,{}, "POST", body);
     return apiResponse;
    }catch(err){
      console.log(err)
    }     
 }

 export const subscribeAPI = async (id,isOnLocation = false)=>{
    try{       
     const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
     let bodycontent = {id: id,clientId:localStorage.getItem('clientId'),timezone:timeZone} 
         if(isOnLocation){
            bodycontent['type'] = 'onlocation';
         }        
     const apiResponse = await callAPI(apiUrls.registerCall,{},'POST',bodycontent);
     return apiResponse;
    }catch(err){
      console.log(err)
    }     
 }