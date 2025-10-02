/*
    Name:   LEE Oppa
    Email:  lee.oppa.2020
*/

function display_default() {

    console.log("===[START] display_default() ===")

    // Call API and get data
    let api_endpoint_url = "api/info.php"

    // Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // a) Inspect the response
        // console.log(response.data)

        // DOM
        populate_table(response.data.military_statistics)
        
    })
    .catch(error => {
        console.log(error.message)
    })

    console.log("===[END] display_default() ===")

}


function populate_table(data) {

    console.log("===[START] populate_table() ===")

    console.log(data)

    /*
                <tr>
                    <th>USA</th>
                    <td>Joseph Biden</td>
                    <td>334998398</td>
                    <td class="font-omg">36.5</td>
                </tr>
    */

    let str = ''


    for(country_key in data) {
        console.log("-----------------")
        console.log(country_key)

        let country_details = data[country_key]
        let flag_relative_url = country_details['flag_relative_url']
        let head_of_state = country_details['head_of_state']
        let total_population = country_details.personnel.total_population
        let total_fit_for_service = country_details.personnel.total_fit_for_service
        let percent_fit_for_service = Number(total_fit_for_service) / Number(total_population) * 100
        percent_fit_for_service = parseFloat(percent_fit_for_service).toFixed(1)
        console.log(percent_fit_for_service)
        let font_class_name = get_font_class_name(percent_fit_for_service)

        str += `
                <tr>
                    <th>${country_key}</th>
                    <td>${head_of_state}</td>
                    <td>${total_population}</td>
                    <td class="${font_class_name}">${percent_fit_for_service}</td>
                </tr>`
    }

    console.log(str)

    // DOM id='slides-box'
    document.getElementById('table-tbody').innerHTML = str
    
    console.log("===[END] populate_table() ===")
}


function get_font_class_name(percent_value) {
    if(percent_value < 30) {
        return "font-okay"
    }
    if(percent_value < 40) {
        return "font-omg"
    }
    return "font-holy-moly"
}