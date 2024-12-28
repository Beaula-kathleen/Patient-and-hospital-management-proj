import React from 'react'
import "../../styles/Doctor/operation.module.css";

function Operations() {
    // function addNewScheduleRow() {
    //     const table = document.getElementById('scheduleTable');
    //     const newRow = table.insertRow();

    //     const cell1 = newRow.insertCell(0);
    //     const cell2 = newRow.insertCell(1);
    //     const cell3 = newRow.insertCell(2);
    //     const cell4 = newRow.insertCell(3);

    //     cell1.innerHTML = `<input type='text' placeholder='Date' />`;
    //     cell2.innerHTML = `<input type='text' placeholder='Time' />`;
    //     cell3.innerHTML = `<input type='text' placeholder='Patient Name' />`;
    //     cell4.innerHTML = `<input type='text' placeholder='Surgeon' />`;
    // }
    return (
        <div>
            <div class="container">
                <h1>Operation Schedule</h1>

                <table id="scheduleTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Patient Name</th>
                            <th>Surgeon</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

                <div class="button-container">
                    <button class="add-button" onclick="addNewScheduleRow()">Add New Schedule</button>
                </div>
            </div>
        </div>
    )
}

export default Operations;