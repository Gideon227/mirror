import React from 'react'
import Select from 'react-select';


const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '300px',
      border: 'none', 
    }),
  };

const EditProductForm = ({ type, value, onChangeFunction, placeholder, labelText, extraStyles, selectOptions, closeMenuOnSelect= false }) => {
   
  return (
    <div>
        {type === "input" ? 
        <form>
            <label className='space-y-2'>
                <span className='font-medium text-[14px] text-gray-600'>
                    {labelText}:
                </span>
                
                <input
                    value={value}
                    onChange={onChangeFunction}
                    type='text'
                    placeholder={placeholder}
                    required
                    className={`${extraStyles} w-[100%] rounded-lg flex border border-gray-200 mt-2 mb-8 px-4 py-2.5 text-[14px] text-gray-900 outline-0`}
                    />  
            </label>
        </form>
    
    : (type === "textArea") ? (
        <form>
            <label className='space-y-2'>
                <span className='font-medium text-[14px] text-gray-600'>
                    {labelText}:
                </span>

                <textarea
                    value={value}
                    onChange={onChangeFunction}
                    type='text'
                    placeholder={placeholder}
                    rows={8}
                    cols={20}
                    required
                    className={`${extraStyles} w-[100%] rounded-lg flex border border-gray-200 mt-2 mb-8 px-4 py-2.5 text-[14px] text-gray-900 outline-0`}
                />  
            </label>
        </form>
    )
    : (type === "select") ? 
        <form>
            <label className='space-y-2'>
                <span className='font-medium text-[14px] text-gray-600'>
                    {labelText}:
                </span>
                <Select 
                    styles={customStyles}
                    value={value}
                    onChange={onChangeFunction}
                    options={selectOptions}
                    isMulti
                    closeMenuOnSelect={closeMenuOnSelect}
                    isSearchable
                    className={`{extraStyles} text-[14px] rounded-lg`}
                />
            </label>
        </form>
    : null
    }
</div>
  )
}

export default EditProductForm