//交差している時だけ
const show = (entries, obs) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['300px 0',0]
        }
        entry.target.animate(keyframes,600);

        //一度表示されたら止める
      obs.unobserve(entry.target);
    }
    });
  }
  
  //監視機能の設置
  const observer = new IntersectionObserver(show);
  
  //監視対象の指示
  const images = document.querySelectorAll('.img');
images.forEach(img =>{
  observer.observe(img);
});



//交差している時だけ
const show02 = (entries, obs) => {
    entries.forEach((entry) => {
    if(entry.isIntersecting){
        const keyframes = {
          opacity: [0, 1],
          translate: ['-300px 0',0]
        }
        entry.target.animate(keyframes,600);

        //一度表示されたら止める
      obs.unobserve(entry.target);
    }
    });
  }
  
  //監視機能の設置
  const observer2 = new IntersectionObserver(show02);
  
  //監視対象の指示
  const images2 = document.querySelectorAll('.img02');
images2.forEach(img =>{
  observer2.observe(img);
});




  