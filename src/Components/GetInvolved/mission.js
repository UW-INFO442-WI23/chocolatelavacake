
import React from 'react';
import {useState, useEffect} from "react";
import { useRef } from "react";
import info442data from "../data/info442data.json";

export default function Mission(props) {

    // adding filter feature
    // add tag/category to organization in JSON file
    // create drop down menu
    // create filter options
    // filter function

    const DATA = [...info442data];
    let orgArray = [...DATA]; // initialize all orgs
    const [textContent, setTextContent] = useState("");
    const [shownCards, changeCards] = useState(orgArray);
    let shownData = [...orgArray];

    const [appliedLocation, applyLocation] = useState([]);
    const [appliedTags, applyTags] = useState(false);

    

    let rows = results(orgArray);

    const checkBox = (event) => {
        if (event.target.checked) {
            applyLocation([...appliedLocation, event.target.value]);
          } else {
            applyLocation(
              appliedLocation.filter((filterTag) => filterTag !== event.target.value)
            )
            
          }
    }

    if (appliedLocation.length > 0) {
        let filterData = [...orgArray];
        //for (int i = 0; i < )
        filterData = filterData.filter((org) => {
            // org.location == appliedLocation[0]
            // appliedLocation.every(i => org.location.includes(i))
            return (appliedLocation.every(i => org.location.includes(i)));
        });
        shownData = filterData;
        rows = results(filterData);
    } else {
        shownData = DATA;
    }

    /* When user searches in search bar */
    const handleChange = (event) => {
        const typedContent = event.target.value;
        setTextContent(typedContent); // update state w/ search
    }

    if (textContent.length > 0) { // if user searched something
        let data = [...shownData];
        data = data.filter((org) => { // filter for matching orgs
            let name = org.title;
            return (name.toUpperCase().includes(textContent.toUpperCase()));
        });
        rows = results(data);
    }

    // Return orgs to show


    // filter functionality



    const handleClick = (event) => { // make box show up when clicked
        console.log("clicked");
        var element = document.getElementById('overlay');
        element.classList.toggle("show");
    }
    
    const HandleApply = (event) => {
        
        /*
        let data = [...orgArray]; 
        let filter = [];
        let checkedElements = document.getElementsByClassName("filter-selection");
        for (let i = 0; i < checkedElements.length; i++) { // add selected elements to array

            if (checkedElements[i].checked) {
                if (checkedElements[i].id == "US" || checkedElements[i].id == "International") {
                    locationChecked = true;
                    
                    console.log(locationChecked);
                    
                }
                filter.push(checkedElements[i].id);
                
            } 
        }
        
        console.log(appliedLocation);
        if (filter.length > 0) {
            
            for (let i = 0; i < filter.length; i++) {
                console.log("checking " + filter[i]);
                data = data.filter((org) => {
                    return (org.location == filter[i]);
                });
            }
            console.log(data);
            changeCards(data);
            
        }
        
        console.log(rows);
        */
 

        
        var usVar = document.getElementById("US");
        var internationalVar = document.getElementById("International");
        var politicalVar = document.getElementById("Political");
        var violenceVar = document.getElementById("Violence");
        var economicVar = document.getElementById("Economic");
        var healthVar = document.getElementById("Health");

        let setLocationFilter = [];
        let setTagFilter = [];

        if (usVar.checked || internationalVar.checked) {
            
            
            if (usVar.checked) {
                setLocationFilter.push(usVar.id);
                console.log("Looking for US organizations");
                
            } 
            
            if (internationalVar.checked) {
                setLocationFilter.push(internationalVar.id);
                console.log("Looking for International organizations");
                
            }
            
        }
        applyLocation(setLocationFilter);

        
        if (politicalVar.checked || violenceVar.checked || economicVar.checked || healthVar.checked) {
            applyTags(true);
            if (politicalVar.checked) {
                setTagFilter.push(politicalVar.id);
                console.log("Looking for political organizations");
            } 
            
            if (violenceVar.checked) {
                setTagFilter.push(violenceVar.id);
                console.log("Looking for violence organizations");
            }

            if (economicVar.checked) {
                setTagFilter.push(economicVar.id);
                console.log("Looking for economic organizations");
            }

            if (healthVar.checked) {
                setTagFilter.push(healthVar.id);
                console.log("Looking for health organizations");
            }
        }
        applyTags(setTagFilter);
    }


    //changeCards(filteredData);

    /*
    if (appliedLocation.length > 0) {
        let data =[...orgArray];
        for (let i = 0; i < appliedLocation.length; i++) {
            console.log("checking " + appliedLocation[i]);
            data = data.filter((org) => {
                return (org.location == appliedLocation[i]);
            });
        }
        changeCards(data);
    }
    */




    
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
                
                <button className='filter-btn' onClick = {handleClick}> 
                    filter
                </button>
                <div id='overlay' className='filter-overlay'>
                    <div className='overlay-header'>
                        <i class="fa-solid fa-xmark" onClick={handleClick}></i>
                        <h4>Location</h4>
                    </div>

                    <input type='checkbox' id="US" className='filter-selection' onChange={checkBox} value = "US"/>
                    <label for="location1"> US </label><br/>
                    <input type='checkbox' id="International" className='filter-selection' onChange={checkBox} value = "International"/>
                    <label for="location2"> International </label><br/>

                    <h4>Organization Type</h4>

                    <input type='checkbox' id="Political" className='filter-selection'/>
                    <label for="tag1"> Political </label><br/>
                    <input type='checkbox' id="Violence" className='filter-selection'/>
                    <label for="tag2"> Violence </label><br/>
                    <input type='checkbox' id="Economic" className='filter-selection'/>
                    <label for="tag3"> Economic </label><br/>
                    <input type='checkbox' id="Health" className='filter-selection'/>
                    <label for="tag4"> Health </label><br/>
                    
                </div>

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
}

function results(data) {
    data = data.map((org) => {
        let row = (
            <tr key = {org.title}>
                <td>
                    {org.title}
                </td>
            </tr>
        );
        return row;
    })
    return data;
}