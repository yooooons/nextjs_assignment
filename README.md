정부 교육관련 오픈 API접속후  
Next.js를 사용하여 학교 정보 데이터 불러오기
===  


### GET localhost:3000/assignment/{페이지넘버}/{교육지원청이름}  
* 총 30개의 리스트로 교육지원청과 매치해서 소속학교를 보여준다.
* 페이지넘버를 통해서 다음 페이지의 30개의 리스트를 볼수있다.
* 페이지넘버 = "1" 이상의 정수   
ex)1, 2 ,3 ...
* 교육지원청이름 = 찾고싶은 교육지원청 이름   
ex) 서울특별시강서양천교육지원청, 경상남도창원교육지원청...  

![image](https://user-images.githubusercontent.com/96519249/182142084-414d6116-7c39-45f9-89f0-58031b2f9cfc.png)
#### "assignment/1/경상남도창원교육지원청" 에서 "교육지원청에 소속된 학교 검색하기" 버튼을 클릭할시
![image](https://user-images.githubusercontent.com/96519249/182142972-6155018f-505c-4fac-9072-2dec62606121.png)
#### 30개의 size인 페이지를 테이블로 확인할 수 있습니다. 
![image](https://user-images.githubusercontent.com/96519249/182142829-013c9c76-6ef5-4fb7-87f1-0d7ab20ff276.png)
#### 마찬가지로, "assignment/2/경상남도창원교육지원청" 에 접근하여 페이지 넘버를 통해서 다음 페이지의 리스트들을 확인할 수 있습니다.
