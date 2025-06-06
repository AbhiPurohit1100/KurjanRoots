import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const CustomNodeWithDropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-3 rounded shadow border h-20 w-60 text-center relative backgro">
      {/* Input handle (for incoming edges) */}
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ background: '#555' }}
      />
      
      <div className="font-bold mb-2">{data.label}</div>
      {data.hasDropdown && (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white px-2 py-1 rounded hover:bg-blue-100"
          >
            {isOpen ? <SlArrowUp /> : <SlArrowDown />}
          </button>
          {isOpen && (
            <div className="mt-2 border rounded p-2 bg-gray-100">
              <img
                src={data.imageUrl}
                alt="Description"
                className="w-32 h-20 object-cover mb-2"
              />
              <p className="text-sm text-gray-700">{data.description}</p>
            </div>
          )}
        </div>
      )}
      
      {/* Output handle (for outgoing edges) */}
      <Handle 
        type="source" 
        position={Position.Bottom} 
        style={{ background: '#555' }}
      />
    </div>
  );
};

export default CustomNodeWithDropdown;