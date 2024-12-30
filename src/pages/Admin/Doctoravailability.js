import React from 'react';
import "../../styles/Admin/Doctoravailability.modules.css"
function Doctoravailability() {
    // // function searchDoctor() {
    //     const input = document.getElementById("searchInput").value.toUpperCase();
    //     const table = document.getElementById("doctorTable");
    //     const rows = table.getElementsByTagName("tr");
    //     for (let i = 1; i < rows.length; i++) {
    //         const cells = rows[i].getElementsByTagName("td");
    //         let match = false;
    //         for (let j = 0; j < cells.length; j++) {
    //             if (cells[j].innerText.toUpperCase().includes(input)) {
    //                 match = true;
    //                 break;
    //             }
    //         }
    //         rows[i].style.display = match ? "" : "none";
    //     }
    // // }
    return (
        <div>
            <div class="container">
                <div class="search-bar">
                    <input type="text" id="searchInput" placeholder="Search doctor by name or specialization" />
                    <button onclick="searchDoctor()">Search</button>
                </div>
                <table id="doctorTable">
                    <thead>
                        <tr>
                            <th>Doctor Name</th>
                            <th>Specialization</th>
                            <th>Available Days</th>
                            <th>Time Slots</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dr. John Smith</td>
                            <td>Cardiologist</td>
                            <td>Monday, Wednesday, Friday</td>
                            <td>10:00 AM - 1:00 PM</td>
                            <td style={{ color: "green", font_weight: "bold" }}>Available</td>
                        </tr>
                        <tr>
                            <td>Dr. Sarah Johnson</td>
                            <td>Dermatologist</td>
                            <td>Tuesday, Thursday</td>
                            <td>2:00 PM - 5:00 PM</td>
                            <td style={{ color: "red", font_weight: "bold" }}>Not Available</td>
                        </tr>
                        <tr>
                            <td>Dr. Emily Davis</td>
                            <td>Orthopedic</td>
                            <td>Monday, Wednesday</td>
                            <td>3:00 PM - 6:00 PM</td>
                            <td style={{ color: "green", font_weight: "bold" }}>Available</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer class="footer">
                © 2024 Admin Portal. All Rights Reserved.
            </footer>
        </div>

    );
}

export default Doctoravailability