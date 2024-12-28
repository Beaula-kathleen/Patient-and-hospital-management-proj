import React from 'react'
import "../../styles/Admin/emergencyResourceAllocation.module.css"
function EmergencyResourceAllocation() {
    // function searchResource() {
    //     const input = document.getElementById("searchInput").value.toUpperCase();
    //     const table = document.getElementById("resourceTable");
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
    // }

    // function toggleStatus(button) {
    //     const row = button.closest("tr");
    //     const statusCell = row.cells[3];
    //     const timeCell = row.cells[4];
    //     const currentTime = new Date().toLocaleString();

    //     if (statusCell.classList.contains("available")) {
    //         statusCell.classList.remove("available");
    //         statusCell.classList.add("occupied");
    //         statusCell.innerText = "Occupied";
    //     } else {
    //         statusCell.classList.remove("occupied");
    //         statusCell.classList.add("available");
    //         statusCell.innerText = "Available";
    //     }
    //     timeCell.innerText = currentTime;
    // }

    return (
        <div> <header>
            <h1>Admin Portal - Emergency Resource Allocation</h1>
        </header>
            <div class="container">
                <div class="search-bar">
                    <input type="text" id="searchInput" placeholder="Search by bed/resource type or status" />
                    <button onclick="searchResource()">Search</button>
                </div>
                <table id="resourceTable">
                    <thead>
                        <tr>
                            <th>Resource Name</th>
                            <th>Type</th>
                            <th>Location</th>
                            <th>Availability</th>
                            <th>Last Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bed #101</td>
                            <td>ICU Bed</td>
                            <td>Room A1</td>
                            <td class="available">Available</td>
                            <td>2024-12-21 10:30 AM</td>
                            <td><button class="update-btn" onclick="toggleStatus(this)">Change Status</button></td>
                        </tr>
                        <tr>
                            <td>Bed #102</td>
                            <td>ICU Bed</td>
                            <td>Room A2</td>
                            <td class="occupied">Occupied</td>
                            <td>2024-12-21 9:15 AM</td>
                            <td><button class="update-btn" onclick="toggleStatus(this)">Change Status</button></td>
                        </tr>
                        <tr>
                            <td>Ventilator #301</td>
                            <td>Ventilator</td>
                            <td>Room B3</td>
                            <td class="available">Available</td>
                            <td>2024-12-21 11:00 AM</td>
                            <td><button class="update-btn" onclick="toggleStatus(this)">Change Status</button></td>
                        </tr>
                        <tr>
                            <td>Oxygen Cylinder #401</td>
                            <td>Oxygen Cylinder</td>
                            <td>Storage C1</td>
                            <td class="occupied">In Use</td>
                            <td>2024-12-20 6:45 PM</td>
                            <td><button class="update-btn" onclick="toggleStatus(this)">Change Status</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer class="footer">
                © 2024 Admin Portal. All Rights Reserved.
            </footer>
        </div>
    )
}

export default EmergencyResourceAllocation