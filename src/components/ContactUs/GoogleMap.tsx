import React from 'react';

const GoogleMap = () => {
    return (
        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 relative group">
            <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10" />
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184126388439!2d-73.98773192404069!3d40.75889497138668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                title="Google Map"
                className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out block"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
