import React from 'react'
import style from "../../styles/Admin/Payment.module.css"
function Payment() {
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
    <div class="container">
    <h1>Hospital Payment Portal</h1>
    <form id="paymentForm">
      <div className={style.form_group}>
        <label for="patientName">Patient Name</label>
        <input type="text" id="patientName" name="patientName" placeholder="Enter patient name" required/>
      </div>
      <div className={style.form_group}>
        <label for="patientID">Patient ID</label>
        <input type="text" id="patientID" name="patientID" placeholder="Enter patient ID" required/>
      </div>
      <div className={style.form_group}>
        <label for="amount">Amount</label>
        <input type="number" id="amount" name="amount" placeholder="Enter payment amount" required/>
      </div>
      <div className={style.form_group}>
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
      </div>
      <div className={style.form_group}>
        <label for="expiryDate">Expiry Date</label>
        <input type="month" id="expiryDate" name="expiryDate" required/>
      </div>
      <div className={style.form_group}>
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required/>
      </div>
      <button type="submit" class="btn">Pay Now</button>
    </form>
    <div className={style.success_message} id="successMessage">
      Payment Successful! Thank you.
    </div>
  </div>

  )
}

export default Payment;