import { FaCat } from "react-icons/fa";
import { default as Topics } from '../components/Question';
import { useState } from "react";
import { useViewTransitionState } from "react-router-dom";
import Button from '../components/Button';

function Test() {
    const sports = "Badminton"
    let src = "data:image/jpeg;base64,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"

    let w="500", h="500", alt="bean"
    let info = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam, recusandae quas tempora impedit quam dolore minus inventore nemo! Aut?'
    let triggered = []
    // if(triggered.length <= 0){
    //     return(<h1>This rendered first haha</h1>)
    // }
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }

    // let content;
    // if(isLogginIn){
    //     content = <AdminPanel />
    // }else{
    //     content = <LoginForm />
    // }
    // return content

    return(
        <>
        <Button count={count} onClick={handleClick}/>
        <Button count={count} onClick={handleClick}/>
        <h1>Noelle Weaver</h1>
        <p>Hello my name is Noelle Weaver</p>
        <h3> {sports}</h3>
        <img src={src} width={w} height={h} alt={alt}></img>
        <button><FaCat  size="500px" style={{backgroundColor: "pink", color: "darkblue"}}/></button>
        <Topics title="One Piece" info={info}/>

        {
            triggered.length > 0 ?<h1>Hello Data</h1>: <h1>Nothing</h1>
        }
        {/* isLoggedIn ? (<AdminPanel />):(<LoginPage />) */}
        </>
    )
    
}

export default Test;