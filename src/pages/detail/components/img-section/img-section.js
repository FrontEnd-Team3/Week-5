const ImgSection = ({ num }) => {
  // 나중에 파라미터 쓰기
  console.log(num);
  return <img src={`img/recommend_thumbnail${num}.jpg`} alt="" width={"300"} />;
};

export default ImgSection;
