import React from 'react';
import Card from "../components/reusable/Card"
import { doctors } from '../constant/specialist';
import "../styles/specialist.modules.css"

function Specialist() {
  return (
    <div><Card data={doctors}/></div>
  )
}

export default Specialist