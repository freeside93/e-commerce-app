import React from 'react'

const Hero = () => {
    return (
        <div className="w-full h-110 flex flex-row">
            <div className="hidden lg:flex w-1/4 h-110 p-px m-px">
                <img className='w-full h-full object-cover' alt="de bethune watch" src="https://cdn.wallpapersafari.com/39/96/HIwUJK.jpg" />
            </div>
            <div className="w-1/2 lg:w-1/4 h-110 m-px p-px">
                <img className='w-full h-full object-center object-cover' alt="de bethune watch" src="https://images.hdqwalls.com/download/maserati-watches-pic-2560x1440.jpg" />
            </div>
            <div className="w-1/2 lg:w-1/4 h-110 m-px p-px">
                <img className='w-full h-full object-cover' alt="Glashutte watch" src="https://i1.wp.com/storage.googleapis.com/stateless-watchilove-com/2022/06/1d6d80d7-glashutte-original_panomaticcalendar_1-92-10-01-03-62-pt-1-92-09-02-05-62-rg-pmc-couple-moebius-srgb-25cm-1024x768.jpg?ssl=1" />
            </div>
            <div className="hidden lg:flex h-110 w-1/4 p-px m-px">
                <img className='w-full h-full object-cover' alt="de bethune watch" src="https://www.zastavki.com/pictures/originals/2015/Creative_Wallpaper_The_silver_case_and_black_dial_expensive_watches_109477_.jpg" />
            </div>
        </div>
    )
}

export default Hero