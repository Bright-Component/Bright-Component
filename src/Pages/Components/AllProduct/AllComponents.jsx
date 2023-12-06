import React, { useState } from 'react';

const components = {
    1: {
        name: 'SuccessAlert3',
        component: () => (
            <div className="py-10 bg-white dark:bg-dark">
                <div className="container">
                    <div className="rounded-md bg-[#C4F9E2] p-4">
                        <p className="flex items-center text-sm font-medium text-[#004434]">
                            <span className="pr-3">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx={10} cy={10} r={10} fill="#00B078" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.1203 6.78954C14.3865 7.05581 14.3865 7.48751 14.1203 7.75378L9.12026 12.7538C8.85399 13.02 8.42229 13.02 8.15602 12.7538L5.88329 10.4811C5.61703 10.2148 5.61703 9.78308 5.88329 9.51682C6.14956 9.25055 6.58126 9.25055 6.84753 9.51682L8.63814 11.3074L13.156 6.78954C13.4223 6.52328 13.854 6.52328 14.1203 6.78954Z"
                                        fill="white"
                                    />
                                </svg>
                            </span>
                            Your item has been added successfully
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    2: {
        name: 'SuccessAlert2',
        component: () => (
            <div className="py-10 bg-white dark:bg-dark">
                <div className="container">
                    <div className="border-green bg-green-light-6 flex w-full rounded-lg border-l-[6px] px-7 py-8 md:p-9">
                        <div className="bg-green mr-5 flex h-[34px] w-full max-w-[34px] items-center justify-center rounded-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_961_15637)">
                                    <path
                                        d="M8.99998 0.506248C4.3031 0.506248 0.506226 4.30312 0.506226 9C0.506226 13.6969 4.3031 17.5219 8.99998 17.5219C13.6969 17.5219 17.5219 13.6969 17.5219 9C17.5219 4.30312 13.6969 0.506248 8.99998 0.506248ZM8.99998 16.2562C5.00623 16.2562 1.77185 12.9937 1.77185 9C1.77185 5.00625 5.00623 1.77187 8.99998 1.77187C12.9937 1.77187 16.2562 5.03437 16.2562 9.02812C16.2562 12.9937 12.9937 16.2562 8.99998 16.2562Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.4187 6.38437L8.07183 9.64687L6.55308 8.15625C6.29996 7.90312 5.90621 7.93125 5.65308 8.15625C5.39996 8.40937 5.42808 8.80312 5.65308 9.05625L7.45308 10.8C7.62183 10.9687 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9687 8.69058 10.8L12.3187 7.3125C12.5718 7.05937 12.5718 6.66562 12.3187 6.4125C12.0656 6.15937 11.6718 6.15937 11.4187 6.38437Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_961_15637">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-full">
                            <h5 className="mb-3 text-lg font-semibold text-[#004434]">
                                Message Sent Successfully
                            </h5>
                            <p className="text-base leading-relaxed text-body-color">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
};

const AllComponents = () => {
    //provide a json for a component , where show component and click to show code
    const components = [
        {
            id: 1,
            name: 'Button',
            description: 'A button is an element that triggers an action when clicked.',
            example: <section className="relative z-10 bg-primary py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[400px] text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                                    Oops! That page can’t be found
                                </h4>
                                <p className="mb-8 text-lg text-white">
                                    The page you are looking for it maybe deleted
                                </p>
                                <a
                                    href="javascript:void(0)"
                                    className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-[]"
                                >
                                    Go To Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    <div className="flex h-full w-1/3">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
                </div>
            </section>,
            code: `import React from "react";

const Error = () => {
  return (
    <>
      <section className="relative z-10 bg-primary py-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                  Oops! That page can’t be found
                </h4>
                <p className="mb-8 text-lg text-white">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-primary"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </>
  );
};

export default Error;`,
        },
        {
            id: 2,
            name: 'Input',
            description: 'An input field allows the user to enter text. It can be used as a single line or multiline input.',
            example: <main>
                <div className=" px-4 flex items-center justify-start  md:px-8">
                    <div className="max-w-lg mx-auto text-center">
                        <div className="pb-6">
                            <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                        </div>
                        <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                            Page not found
                        </h3>
                        <p className="text-gray-600 mt-3">
                            Sorry, the page you are looking for could not be found or has been removed.
                        </p>
                    </div>
                </div>
            </main>,
            code: `export default () => {
    return (
        <main>
            <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <div className="pb-6">
                        <img src="https://floatui.com/logo.svg" width={150} className="mx-auto" />
                    </div>
                    <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
                        Page not found
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Sorry, the page you are looking for could not be found or has been removed.
                    </p>
                </div>
            </div>
        </main>
    )
}`,
        },
    ];


    const [showCodeMap, setShowCodeMap] = useState({});

    const toggleCode = (id) => {
        setShowCodeMap((prevShowCodeMap) => ({
            ...prevShowCodeMap,
            [id]: !prevShowCodeMap[id],
        }));
    };

    return (
        <div className='w-screen'>
            <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
                {components.map((component) => (
                    <div key={component.id} >
                        <h2 style={{ fontSize: '1.2em', color: '#0070c9' }}>{component.name}</h2>
                        <p style={{ fontSize: '0.9em', marginBottom: '10px' }}>{component.description}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <button
                                style={{
                                    backgroundColor: '#0070c9',
                                    color: 'white',
                                    padding: '8px 12px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => toggleCode(component.id)}
                            >
                                {showCodeMap[component.id] ? 'Hide Code' : 'Show Code'}
                            </button>
                        </div>
                        {showCodeMap[component.id] && <div class=" mt-8">
                            <div class="w-full h-11 rounded-t-lg bg-gray-400 flex justify-start items-center space-x-1.5 px-3 ">
                                <span class="w-3 h-3 rounded-full bg-red-400"></span>
                                <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
                                <span class="w-3 h-3 rounded-full bg-green-400"></span>

                            </div>

                            <div className="bg-gray-700 border-t-0 w-full max-h-[500px] overflow-auto">
                                <pre className="text-white p-4">
                                    <code>{component.code}</code>
                                </pre>
                            </div>

                        </div>}

                        <div className='rounded-xl overflow-auto'>{!showCodeMap[component.id] && component.example}</div>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllComponents;