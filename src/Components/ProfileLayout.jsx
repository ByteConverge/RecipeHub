

/* eslint-disable react/prop-types */

export default function ProfileLayout(props){
    return (
      <div id="layOut" className="h-[3rem] flex gap-[10px] items-center bg-white p-[10px] rounded-[10px]">
        <figure>
          <img src={props.img} alt="" height={"300px"} />
        </figure>
        <h3 className="font-normal">{props.text}</h3>
      </div>
    );
}