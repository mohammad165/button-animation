
demo
export default function buttonAnimations   ({
  href = "/",
  title = "Trun on",
  data_back = "Trun on",
  data_front = "Trun off"
})  {
  return (
    <a
      href={href}
      title={title}
      className="btn-flip"
      data-back={data_back}
      data-front={data_front}
    ></a>
  );
};


css
.btn-flip {
  opacity: 1;
  outline: 0;
  font-family: cursive;
  color: #fff;
  line-height: 48px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  content: attr(data-back);

  &:hover {

    &:after {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }

    &:before {
      opacity: 0;
      transform: translateY(50%) rotateX(90deg);
    }
  }

  &:after {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    border-radius: 6px;
    color: white;
    display: block;
    transition: 0.5s;
    position: absolute;
    background: #1e8cff;
    box-shadow: -2px 2px 6px rgba(30, 140, 255, 0.4);
    content: attr(data-back);
    transform: translateY(-50%) rotateX(90deg);
  }

  &:before {
    top: 0;
    left: 0;
    opacity: 1;
    color: white;
    display: block;
    padding: 0 30px;
    line-height: 48px;
    border-radius: 6px;
    transition: 0.5s;
    position: relative;
    background: #1e8cff;
    border: 1px solid #1e8cff;
    content: attr(data-front);
    transform: translateY(0) rotateX(0);
  }

  .back {
    overflow: hidden;
    height: 0px;
  }
}


