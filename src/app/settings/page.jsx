export default function Settings() {

    return (

        <div className="flex flex-col space-y-4 p-5">
            <a href="/profile">
                <div
                    className="flex items-center text-lg p-4 rounded-lg shadow mt-5 bg-[var(--secondary-background)]"

                >
                    <div className="mr-3">
                        <svg
                            className="w-7 h-7 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7 2a2 2 0 0 0-2 2v1a1 1 0 0 0 0 2v1a1 1 0 0 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7Zm3 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-1 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Cuenta</span>
                </div>
            </a>


            <div
                className="flex items-center text-lg p-4 rounded-lg shadow bg-[var(--secondary-background)]"
            >
                <div className="mr-3">
                    <svg
                        className="w-7 h-7 text-black-800 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17.133 12.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.933.933 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.391A1.001 1.001 0 1 1 6.854 5.8a7.43 7.43 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 17.146 5.8a1 1 0 0 1 1.471-1.354 9.424 9.424 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                    </svg>
                </div>

                <span className="text-gray-700 font-medium">Notificaciones</span>
            </div>



            <div className="flex items-center text-lg p-4 rounded-lg shadow bg-[var(--secondary-background)]">

                <div className="mr-3">
                    <svg
                        class="w-7 h-7 text-gray-800 dark:text-black"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                        />
                    </svg>


                </div>

                <span className="text-gray-700 font-medium">Localización</span>
            </div>


            <a
                href="https://github.com/MorasDeFresa/paddle-gap/issues/new"
                target="_blank"
            >
                <div
                    className="flex items-center text-lg p-4 rounded-lg shadow bg-[var(--secondary-background)]"
                >
                    <div className="mr-3">
                        <svg
                            className="w-7 h-7 text-gray-800 dark:text-black"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z"
                            />
                        </svg>
                    </div>

                    <span className="text-gray-700 font-medium">Soporte</span>
                </div>
            </a>

            <div class="w-full h-[2px] bg-gray-300 my-4"></div>

            <div className="flex flex-col items-center">
                <h1 className="text-center font-bold text-2xl">REDES SOCIALES</h1>
            </div>


            <div className="flex justify-between flex-row items-center text-lg p-4 rounded-lg shadow bg-[var(--secondary-background)]" >
                <a href="https://www.instagram.com/">
                    <svg
                        class="w-15 h-15 text-gray-800 dark:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                            clip-rule="evenodd"
                        />
                    </svg>

                </a>
                <a href="https://twitter.com">
                    <svg
                        class="w-15 h-15 text-gray-800 dark:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="50" height="50" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            fill-rule="evenodd"
                            d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/watch?v=Z_AjDK9BuSc&t=4s&ab_channel=MrAndreitus">
                    <svg
                        class="w-15 h-15 text-gray-800 dark:text-white"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            fill-rule="evenodd"
                            d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                            clip-rule="evenodd" />
                    </svg>

                </a>
                <a href="https://web.facebook.com/">
                    <svg
                        class="w-15 h-15 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            fill-rule="evenodd"
                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                    </svg>


                </a>
            </div>

            <div class="w-full h-[2px] bg-gray-300 my-4"></div>

        </div >
    )
}