import  {useEffect, useRef , useState} from 'react';

function AnimationPane() {

  const [ position , setPosition] = useState({x:0,y:0});
  const [pupilAngle , setPupilAngle] = useState({left: 0 , right: 0});

  const leftEyeRef = useRef(null);
  const rightEyeRef =  useRef(null);
  useEffect(()=>{
    const handleMouseMove = (event)=>{
      setPosition({x: event.clientX, y: event.clientY});

      if(leftEyeRef.current && rightEyeRef.current)
      {
          //left eye ka position nikalo
        const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
        const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width/2;
        const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height/2;

        //left eye ka pupilAngle
        const deltaXLeft = event.clientX - leftEyeCenterX;
        const deltaYLeft = event.clientY - leftEyeCenterY;
        const angleLeft = Math.atan2(deltaYLeft, deltaXLeft);

        //right eye ka position nikalo
        const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
        const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width/2;
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height/2;

        //right eye ka pupilAngle
        const deltaXRight = event.clientX - rightEyeCenterX;
        const deltaYRight = event.clientY - rightEyeCenterY;
        const angleRight = Math.atan2(deltaYRight, deltaXRight);

        setPupilAngle({left:angleLeft, right:angleRight});
      }
    };

    window.addEventListener('mousemove',handleMouseMove);

    return()=>{
      window.removeEventListener('mousemove', handleMouseMove);
    };
  },[]);


  return(
    <div className="split-screen-child">
    <div className="character-head">

    <img src="pinku.png" className="sprite" />
    <div className="eye-socket left-eye" ref={leftEyeRef}>
    <div className="/pupil"
      style={{

        transform: `rotate(${pupilAngle.right}rad) translateX(15px)`
      }}
    >
    </div>
    </div>

    <div className="eye-socket right-eye" ref={rightEyeRef}>
    <div className="pupil"
      style={{

        transform: `rotate(${pupilAngle.right}rad) translateX(15px)`
      }}
    >
    
    </div>
    </div>
    </div>
    </div>
  );
  
}

export default AnimationPane;
