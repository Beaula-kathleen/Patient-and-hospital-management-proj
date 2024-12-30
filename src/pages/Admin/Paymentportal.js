import React from 'react'
import "../../styles/Admin/Paymentportal.modules.css"

function Paymentportal() {
    
        // document.getElementById("paymentForm").addEventListener("submit", function(e) {
        //     e.preventDefault();
        //     const patientName = document.getElementById("patientName").value;
        //     const patientID = document.getElementById("patientID").value;
        //     const paymentAmount = document.getElementById("paymentAmount").value;
        //     const paymentMethod = document.getElementById("paymentMethod").value;

        //     if (patientName && patientID && paymentAmount && paymentMethod) {
        //         alert(Payment collected successfully!\n\nDetails:\nPatient Name: ${patientName}\nPatient ID: ${patientID}\nAmount: ₹${paymentAmount}\nPayment Method: ${paymentMethod});
        //         document.getElementById("paymentForm").reset();
        //     } else {
        //         alert("Please fill all the fields.");
        //     }
        // });

  return (
    <><div class="container mt-5">
    <h2 class="text-center">Admin Payment Collection Portal</h2>
    <div class="card mt-4">
        <div class="card-body">
            <form id="paymentForm">
                <div class="mb-3">
                    <label for="patientName" class="form-label">Patient Name</label>
                    <input type="text" class="form-control" id="patientName" placeholder="Enter patient's name" required/>
                </div>
                <div class="mb-3">
                    <label for="patientID" class="form-label">Patient ID</label>
                    <input type="text" class="form-control" id="patientID" placeholder="Enter patient's ID" required/>
                </div>
                <div class="mb-3">
                    <label for="paymentAmount" class="form-label">Payment Amount (₹)</label>
                    <input type="number" class="form-control" id="paymentAmount" placeholder="Enter payment amount" required/>
                </div>
                <div class="mb-3">
                    <label for="paymentMethod" class="form-label">Payment Method</label>
                    <select class="form-select" id="paymentMethod" required>
                        <option value="" disabled selected>Select payment method</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="UPI">UPI</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary w-100">Submit Payment</button>
            </form>
        </div>
    </div>
</div>
</>
  )
}

export default Paymentportal