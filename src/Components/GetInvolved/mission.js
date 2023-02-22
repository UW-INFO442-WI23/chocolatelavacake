
import React from 'react';
import {useState} from "react";

export default function Mission(props) {

    // adding filter feature
    // add tag/category to organization in JSON file
    // create drop down menu
    // create filter options
    // filter function
    let testArray = [
        {"name":"Org1"},
        {"name":"Women"},
        {"name":"Men"},
        {"name":"DiffOrg"},
        {"name":"New"},
    ]
    // let orgArray = [...props.data];
    const [textContent, setTextContent] = useState("");
    let rows = results(testArray);
    let testString = "Men";
    console.log(testString.toLowerCase().includes("men"));
    const handleChange = (event) => {
        let data = [...testArray];
        const typedContent = event.target.value;
        setTextContent(typedContent);
        console.log(typedContent);
        data = data.filter((org) => {
            let name = org.name;
            console.log("checking: " + name.toUpperCase() + " " + name.includes(textContent.toUpperCase()));
            return (name.toUpperCase().includes(textContent.toUpperCase()));
        });
        rows = results(data);
    }

    function results(data) {
        data = data.map((org) => {
            let row = (
                <tr key = {org.name}>
                    <td>
                        {org.name}
                    </td>
                </tr>
            );
            return row;
        })
        return data;
    }


    return(
        <div className='container-mission'>
            <h2>
                Get Involved
            </h2>
            <p>
                Lorem ipsum dolor sit amet. Vel enim officia et amet quasi in voluptatem provident vel animi internos et voluptatem molestias non consequatur totam! Ut obcaecati enim cum veniam tempore hic quidem consectetur ut consectetur alias.
            </p>
            <div className='search-filter'>
                <input className='search' placeholder="Search for an Organization"  value={textContent} onChange={handleChange}/>
                <button className='filter'> 
                    filter
                </button>
            </div>
            <div className='org'>
                <table>
                    <tbody>
                        {rows} 
                    </tbody> 
                </table>
            </div>
        </div>
    )
};