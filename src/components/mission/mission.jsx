"use client";

import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";

export function Mission({ title, body }) {
    const [isIconVisible, setIsIconVisible] = useState(false);
    const [sucessMission, setSucessMission] = useState(false);
    const [success_notification, setSuccess_notification] = useState(null);

    useEffect(() => {
        setSuccess_notification(new Audio('/sounds/notification.wav'));
    }, []);

    const toggleIcon = () => {
        setIsIconVisible(!isIconVisible);
        success_notification.play();
        setSucessMission(true);
    };

    return (
        <Card horizontal className="w-2/3 lg:w-1/2 self-center mt-2 p-2 flex flex-row">
            <div className="flex items-center">
                <div
                    className="mr-4 w-12 h-12 bg-gray-200 flex-shrink-0 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-200"
                    onClick={sucessMission ? () => { } : toggleIcon}
                >
                    <svg
                        className={`w-6 h-6 ${isIconVisible ? 'visible' : 'invisible'} text-green-500`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 11.917 9.724 16.5 19 7.5"
                        />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold lg:text-2xl">{title}</h3>
                    <br className='text-black' />
                    <p className="lg:text-xl">{body}</p>
                </div>
            </div>
        </Card>
    );
}