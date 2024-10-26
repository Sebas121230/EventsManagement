"use client";

import { useState } from 'react';

export default function Profile() {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center text-lg m-5 p-4 rounded-lg shadow mt-5 bg-[var(--secondary-background)] cursor-pointer">
            <span className="text-gray-700 mb-3 text-center font-bold text-2xl">INFORMACION DE USUARIO</span>

            <div className="flex items-start p-4 mt-3 bg-gray-100 rounded-lg shadow w-full">
                <label className="w-16 h-16 rounded-full overflow-hidden mr-4 border border-gray-300 flex items-center justify-center cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    {image ? (
                        <img
                            src={image}
                            alt="Usuario"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-gray-400">+</span>
                    )}
                </label>


                <div>
                    <p><strong>Nombre: Rafael Gomez</strong></p>
                    <p><strong>Email: rafita@gmail.com</strong></p>
                    <p><strong>Edad: 21</strong></p>
                </div>
            </div>
        </div>
    );
}
