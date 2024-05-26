import React from 'react';

const ToggleSwitch = ({checked, onChange }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div className="relative">
                <div className={`block w-14 h-8 rounded-full ${checked ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
                <div
                    className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                        checked ? 'transform translate-x-6' : ''
                    }`}
                ></div>
            </div>
        </label>
    );
};

export default ToggleSwitch;
