//외부스크립트

//1. 변수선언
const slide = document.querySelector('.slide'); //상품목록의 부모요소
const slide_img = document.querySelectorAll('.slide > li');
const l_btn = document.getElementById('l_btn'); //이전버튼
const r_btn = document.getElementById('r_btn'); //다음버튼
const img_n = slide_img.length; //li의 개수를 변수에 담음.
//console.log(img_n); //스크립트링크가 아래있어야 5개 나옴. 실행순서때문에 or defer
const img_w = 360; //상품사진너비
const m = 60; //여백너비
const s_count = 3; //한페이지에 보여질 상품 개수
let count = 0; //이전,다음 클릭시 사용할 변수값 설정

slide.style.width = (img_w+m)*img_n-m+'px'; //=2040px 공식임!!!

//왼쪽으로 움직이는 슬라이드 함수 작성
function mslide(n){
    slide.style.left = (img_w+m)*-n+'px'; //2040에서 마지막 마진값 뺀거
    count=n;
    console.log(count); //이전버튼누르면 2,1,0반복
    console.log(slide.style.left); //-360+60*1 -420, -360+60*2 -840, -360+60*3 -0
}

// 이전버튼 클릭시 왼쪽으로 슬라이드 이동
l_btn.addEventListener('click', function(){
    if(count>0){ //만약에 카운트 값이 0보다 크면
        mslide(count-1); //카운트값에 1을 빼서 mslide에 넘김
    }else{
        mslide(img_n-s_count); //li개수-3
    }
}); //2,1,0 순으로 반복

// 다음버튼 클릭시 오른쪽으로 슬라이드 이동
r_btn.addEventListener('click', function(){
    if(count<img_n-s_count){ //0보다 li개수가 많다면
        mslide(count+1); //0+1해서 넘김
    }else{ //그렇지 않다면
        mslide(0); //0을대입하여 처음로 돌아가게 함
    }
}); //1,2,0 순으로 반복

//이해안감!!!!!!!!!!!!!!!!!!!!!!!!!이해안감!!!!!!!!!!!!!!!!!!!!!!!!!!!!!이해안감!!!!!!!!!!!!!!!
