import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


function Edu(props){


return <>
<table border='1'>
    <thead>
    <tr>
        <td>교육지원청</td>
        <td>학교</td>
    </tr>
    </thead>
    <tbody>
    {props.title.map((item) => {
    return (
    <tr>
        <td>{props.search}</td>
        <td>{item}</td>
    </tr>
    );
    })}
    </tbody>
</table>

</>
}


function HomePage() {
const [title,setTitle]=useState([]);

const router = useRouter();
const pageNm = router.query.pageNm;
const school = router.query.school;
let arr =[];


useEffect(()=>{
axios
.get("http://api.data.go.kr/openapi/tn_pubr_public_schul_atndskl_zn_drw_lnkinfo_api?numOfRows=30&"+ encodeURIComponent('pageNo')+"="+pageNm+"&" + encodeURIComponent('serviceKey')+
"=55dW2uKFLL1jV5Io%2BWUr6Yr7%2FqB8VbAzqyBAGam8Ue10Wnnsr%2Fyq8jbC8vQ511f7ENplgA9YST6Q13hnCEm2OA%3D%3D"+"&"+encodeURIComponent('edcSportNm')+"="+school)
.then((res)=>{
let xmlParser = new DOMParser();
let xmlDoc = xmlParser.parseFromString(res.data, "text/xml");
let schul=xmlDoc.getElementsByTagName("schulNm");

for(let schul_node of schul){

arr.push(schul_node.textContent);
}
})
});

return <>
<Edu search={school} title={title}></Edu>
<button onClick={event=>{
    event.preventDefault();
    setTitle(arr);
    }}>교육지원청에 소속된 학교검색하기
</button>
</>

}

export default HomePage