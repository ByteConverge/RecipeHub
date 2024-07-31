/* eslint-disable react/prop-types */





export default function Recommend({id}) {

let jwt = localStorage.getItem('token')
console.log(id);

async function likeHandle() {

  let response =  await  fetch(`https://recidishbackend.onrender.com/api/post/like/${id}`, {
      method: "POST"  ,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    if(response.ok){
        console.log(response);
    }
  let data = await response.json() 
  console.log(data); 
  
}

async function unlikeHandle() {
  let response = await fetch(
    `https://recidishbackend.onrender.com/api/post/unlike/${id}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  if (response.ok) {
    console.log(response);
  }
  let data = await response.json();
  console.log(data);
}


  return (
    <div className="md:self-start flex gap-2 md:gap-10 w-[50%] ml-8 md:ml-0">
      <div id="no" className="flex gap-2 items-center">
        <p className="text-[.8rem] md:text-[20px]">No</p>
        <input
          type="radio"
          name="recommendation"
          value="no"
          onClick={unlikeHandle}
        />
      </div>
      <div id="yes" className="flex gap-2 items-center">
        <p className="text-[.8rem] md:text-[20px]">Yes</p>
        <input
          type="radio"
          name="recommendation"
          value="yes"
          onClick={likeHandle}
        />
      </div>
    </div>
  );
}
