import React from 'react'
import './VideoPlaylist.css'
import v1 from './videos/v1.mp4'
import v2 from "./videos/v2.mp4"
import v3 from  "./videos/v3.mp4"
import data from './data'

const videoplaylist = () => {

   

    let listVideo = document.querySelectorAll('.video-list .vid');
    let mainVideo = document.querySelector('.main-video video');
    let title = document.querySelector('.main-video .vtitle');
    listVideo.forEach(video => {
      video.Click = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
    
        if (video.classList.contains('active')) {
          let src = video.children[0].getAttribute('src');
          mainVideo.src = src;
          let text = video.children[1].innerHTML;
          title.innerHTML = text;
        }
      };
    });

    return (
        <>
        <section className="videomodule">
        <h3 className="h3vheading">Video Gallery</h3>
        <div className="vcontainer">
            <div className="main-video">
                <div className="video" >
                    <video src={v1} controls muted autoPlay></video>
                    <h3 className="vtitle">01. Video title goes here</h3>
                </div>
            </div>
            <div className="video-list">
                <div className="vid active">
                    <video src={v1} controls muted ></video>
                    <h3 className="vtitle">01. Video title goes here</h3>
                </div>
                <div className="vid ">
                    <video src={v2} controls muted ></video>
                    <h3 className="vtitle">02. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v3} controls muted ></video>
                    <h3 className="vtitle">03. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v1} controls muted ></video>
                    <h3 className="vtitle">04. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v2} controls muted ></video>
                    <h3 className="vtitle">05. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v3} controls muted ></video>
                    <h3 className="vtitle">06. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v1} controls muted ></video>
                    <h3 className="vtitle">07. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v2} controls muted ></video>
                    <h3 className="vtitle">08. Video title goes here</h3>
                </div>
                <div className="vid">
                    <video src={v3} controls muted ></video>
                    <h3 className="vtitle">09. Video title goes here</h3>
                </div>
            </div>
        </div>
        </section>              
        </>
    )
}

export default videoplaylist;
