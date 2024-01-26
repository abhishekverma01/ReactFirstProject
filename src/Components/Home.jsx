import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillYoutube,AiFillAmazonCircle,AiFillInstagram} from "react-icons/ai";


const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="graphics" />
       <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quis asperiores mollitia, architecto recusandae dolorum reiciendis atque ipsa quidem rem ex laudantium sunt doloribus magnam!
            </p>
        </div> 
    </div>
    <div className="home3" id='about'>
            <div>
                <h1>who we are?</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit illo provident, sit, aspernatur fugiat, architecto similique placeat illum aut in temporibus deserunt. Iusto aspernatur, repellendus quis placeat magnam, neque praesentium at vero tenetur reprehenderit aut minima unde ab laborum, nostrum libero possimus? Sit voluptatem iste dolor animi deserunt molestiae aspernatur!
                </p>
            </div>
        </div>
    <div className="home4" >
    <div id="brands"> 
        <h1>Brands
        </h1>
        <article>
            <div
            style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div
            style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div
            style={{animationDelay:"0.7s"}}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div
            style={{animationDelay:"0.9s"}}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
        </article>
    </div>
    </div>
    </>
  )
}

export default Home;